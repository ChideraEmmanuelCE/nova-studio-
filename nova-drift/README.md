# NOVA DRIFT — 3D Hovercraft Simulator

A playable Three.js hovercraft experience. Drive an endless procedurally recycled neon highway, dodge red sentries, collect glowing energy cores, boost, brake, and switch camera and atmosphere modes.

## Launch

Open `index.html` using any static web server. There is no build process, package installation, API key, or backend. Three.js 0.160.1 is loaded from jsDelivr, so the browser needs internet access.

```bash
cd nova-drift
python3 -m http.server 8080
# Visit http://localhost:8080
```

## Controls

| Action | Keyboard | Mobile |
|--|--|--|
| Steer | A/D or Left/Right | Arrow buttons |
| Accelerate | W or Up | GO |
| Brake | S or Down | BRAKE |
| Boost | Shift or Space | BOOST |
| Camera | C | CAM |
| Sky | N | SKY |
| Pause | P or Esc | PAUSE |

The score persists locally in the browser. Everything is rendered with primitive geometry — no external 3D assets. This directory is self-contained and intentionally isolated from the repository's existing main-branch application.

## GitHub Pages

To publish a separate live GitHub Pages site, choose a publication branch and root directory in repository Settings → Pages. GitHub Pages does not support selecting a nested folder directly (other than `/docs`), so either put this folder's files at the root of a dedicated project repository or use a root Pages build workflow.

## License

MIT.