import sharp from "sharp";
import { readdir, stat, rename } from "fs/promises";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const INPUT_DIR = join(__dirname, "../public/images");
const WEBP_QUALITY = 82;
const MAX_WIDTH = 1920;

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) =>
      e.isDirectory() ? getFiles(join(dir, e.name)) : join(dir, e.name)
    )
  );
  return files.flat();
}

function formatBytes(bytes) {
  return (bytes / 1024).toFixed(1) + " KB";
}

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) return null;

  const outPath = filePath.replace(/\.(png|jpe?g)$/i, ".webp");
  const beforeStat = await stat(filePath);

  const image = sharp(filePath);
  const meta = await image.metadata();

  const pipeline = image
    .resize({ width: Math.min(meta.width, MAX_WIDTH), withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY });

  await pipeline.toFile(outPath);

  const afterStat = await stat(outPath);
  const saved = beforeStat.size - afterStat.size;
  const pct = ((saved / beforeStat.size) * 100).toFixed(1);

  return {
    file: basename(filePath),
    before: beforeStat.size,
    after: afterStat.size,
    saved,
    pct,
  };
}

async function main() {
  console.log("🔍 Buscando imagens em", INPUT_DIR);
  const files = await getFiles(INPUT_DIR);
  const images = files.filter((f) => /\.(png|jpe?g)$/i.test(f));

  if (images.length === 0) {
    console.log("Nenhuma imagem PNG/JPG encontrada.");
    return;
  }

  console.log(`📸 ${images.length} imagem(ns) encontrada(s). Otimizando...\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const img of images) {
    try {
      const result = await optimizeImage(img);
      if (result) {
        totalBefore += result.before;
        totalAfter += result.after;
        const sign = result.saved >= 0 ? "-" : "+";
        console.log(
          `  ✅ ${result.file.padEnd(45)} ${formatBytes(result.before).padStart(9)} → ${formatBytes(result.after).padStart(9)}  (${sign}${Math.abs(result.pct)}%)`
        );
      }
    } catch (err) {
      console.error(`  ❌ Erro em ${basename(img)}:`, err.message);
    }
  }

  const totalSaved = totalBefore - totalAfter;
  const totalPct = ((totalSaved / totalBefore) * 100).toFixed(1);

  console.log("\n" + "─".repeat(75));
  console.log(
    `  Total original : ${formatBytes(totalBefore)}`
  );
  console.log(
    `  Total otimizado: ${formatBytes(totalAfter)}`
  );
  console.log(
    `  Economia total : ${formatBytes(totalSaved)} (${totalPct}%)`
  );
  console.log("\n✨ WebPs gerados na mesma pasta das originais.");
  console.log(
    "   Atualize as referências no código de .png/.jpg para .webp para usar os arquivos otimizados."
  );
}

main();
