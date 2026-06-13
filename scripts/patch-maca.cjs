/**
 * Adiciona os glifos Ç (U+00C7) e ç (U+00E7) à fonte Maca-Bold,
 * que não os possui, compondo C/c + vírgula (como cedilha).
 * Saída: public/fonts/Maca-Bold-patched.otf
 */
const fs = require("fs");
const path = require("path");
const opentype = require("opentype.js");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "public", "fonts", "Maca-Bold.ttf");
const OUT = path.join(ROOT, "public", "fonts", "Maca-Bold-patched.otf");

const font = opentype.parse(fs.readFileSync(SRC).buffer);

function clonePathScaled(srcPath, s, tx, ty) {
  const p = new opentype.Path();
  for (const cmd of srcPath.commands) {
    const c = { ...cmd };
    for (const k of ["x", "x1", "x2"]) if (c[k] !== undefined) c[k] = c[k] * s + tx;
    for (const k of ["y", "y1", "y2"]) if (c[k] !== undefined) c[k] = c[k] * s + ty;
    p.commands.push(c);
  }
  return p;
}

function makeCedillaGlyph(name, unicode, baseGlyph, commaGlyph, scale) {
  const bb = baseGlyph.getBoundingBox();
  const cb = commaGlyph.getBoundingBox();
  // cedilha centralizada um pouco à direita do centro do C, pendurada abaixo da base
  const targetCx = bb.x1 + (bb.x2 - bb.x1) * 0.55;
  const commaCx = ((cb.x1 + cb.x2) / 2) * scale;
  const tx = targetCx - commaCx;
  const ty = bb.y1 + 12 - cb.y2 * scale; // topo da cedilha encosta na base do C
  const newPath = new opentype.Path();
  newPath.commands = baseGlyph.path.commands.map((c) => ({ ...c }));
  newPath.commands.push(...clonePathScaled(commaGlyph.path, scale, tx, ty).commands);
  return new opentype.Glyph({
    name,
    unicode,
    advanceWidth: baseGlyph.advanceWidth,
    path: newPath,
  });
}

const C = font.charToGlyph("C");
const c = font.charToGlyph("c");
const comma = font.charToGlyph(",");

if (font.glyphs.indexOf?.(comma) === 0 || !comma.path.commands.length) {
  throw new Error("Fonte não tem vírgula utilizável para compor a cedilha");
}
if (!C.path.commands.length || !c.path.commands.length) {
  throw new Error("Glifos C/c não encontrados na fonte");
}

const Ccedilla = makeCedillaGlyph("Ccedilla", 0x00c7, C, comma, 0.75);
const ccedilla = makeCedillaGlyph("ccedilla", 0x00e7, c, comma, 0.75);

const glyphs = [];
for (let i = 0; i < font.glyphs.length; i++) glyphs.push(font.glyphs.get(i));
glyphs.push(Ccedilla, ccedilla);

const out = new opentype.Font({
  familyName: (font.names.fontFamily && font.names.fontFamily.en) || "Maca",
  styleName: (font.names.fontSubfamily && font.names.fontSubfamily.en) || "Bold",
  unitsPerEm: font.unitsPerEm,
  ascender: font.ascender,
  descender: font.descender,
  glyphs,
});

fs.writeFileSync(OUT, Buffer.from(out.toArrayBuffer()));
console.log("OK:", OUT);
console.log("Glifos:", glyphs.length, "| unitsPerEm:", font.unitsPerEm);
