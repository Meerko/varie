# Nettuno demo

Lightweight static client-approval demo inspired by the public Nettuno website.

## Run locally

```bash
python3 -m http.server 4173 --directory nettuno-demo
```

Open `http://127.0.0.1:4173/`. The top-level demo pages use `?page=` routes, so no server rewrite is required.

## Scope

- Homepage
- Azienda
- Prodotti (category overview only)
- Settori
- Sostenibilità
- Contatti
- Nettuno AI assistant widget

No build step or package dependencies are required.
