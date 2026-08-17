# Práctica: deploy con GitHub Actions → GitHub Pages

Sitio estático mínimo (HTML + CSS + JS) para practicar el flujo de CI/CD.

## Cómo funciona

`.github/workflows/deploy.yml` define dos jobs:

1. **build** — clona el repo, configura Pages y empaqueta la carpeta indicada
   en `path:` como un *artifact*.
2. **deploy** — toma ese artifact y lo publica. Depende de `build` (`needs:`).

Se dispara en cada `push` a `main` y también a mano desde la pestaña **Actions**.

## Setup en GitHub (una sola vez)

Settings → Pages → **Source: GitHub Actions**.

Sin ese paso el workflow falla con un error de permisos.

## URL final

`https://<usuario>.github.io/gh-pages-practica/`

## Si migras a un proyecto con build (Vite, React)

En el job `build`, antes de `upload-pages-artifact`:

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: 20
    cache: npm
- run: npm ci
- run: npm run build
```

y cambia `path: '.'` por `path: './dist'`.

Además, en `vite.config.js` pon `base: '/gh-pages-practica/'` — si no, los
assets se piden desde la raíz del dominio y la página sale en blanco.
