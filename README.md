# Restaurante Gael — Landing Page

Landing page do **Restaurante Gael**, em Pinheiros, São Paulo.
Construída com **React + Vite + Tailwind CSS v4**, a partir de um design importado do Figma.

## Seções

- **Navbar** — fixo com scroll adaptativo, logo SVG e menu mobile
- **Hero** — imagem de fundo fullscreen com headline e CTA
- **O Jeito Gael** — textos institucionais e grid de 4 fotos do espaço
- **Nossa Cozinha** — descrição do cardápio e grid de fotos dos pratos
- **Nossa Casa** — galeria de ambientes do restaurante
- **Contato** — endereço, horários e mapa
- **Footer** — padrão teal com logo, links, contato e horários

## Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS v4
- Fontes: Cormorant Garamond + Lato (Google Fonts)
- Assets: imagens e SVGs importados do Figma via `figma:asset/` e `src/imports/`

## Estrutura

```
src/
  app/
    App.tsx                    # Componente raiz
    components/
      Navbar.tsx
      Hero.tsx
      GaelSection.tsx
      CozinhaSection.tsx
      CasaSection.tsx
      ContactSection.tsx
      Footer.tsx
      figma/
        ImageWithFallback.tsx  # Wrapper para imagens do Figma
  imports/
    svg-oj8mr5v7qc.ts         # Paths SVG exportados do Figma (244 keys)
    Desktop1.tsx              # Frame Figma original (referência)
  styles/
    fonts.css
    index.css
    tailwind.css
    theme.css
```

## Nota sobre os assets do Figma

As imagens de produto (fotos de pratos e ambiente) são referenciadas via `figma:asset/<hash>.png`,
scheme virtual do Figma Make. Para usar o projeto fora do ambiente Figma Make, substitua as
importações por URLs reais ou arquivos locais.

O arquivo `src/imports/svg-oj8mr5v7qc.ts` contém os ~244 paths SVG (logotipo, ilustrações
decorativos) gerados automaticamente a partir do arquivo Figma.

## Desenvolvimento

```bash
npm install
npm run build
```

---

**Gael Restaurante** — Rua Ferreira de Araújo, 320 e 322, Pinheiros, São Paulo
