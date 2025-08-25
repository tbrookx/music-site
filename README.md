# Music Site Starter

This is a minimal DIY playlist site you can host on GitHub Pages (or Netlify/Cloudflare Pages).

## Files
- `index.html` — the page and player container
- `style.css` — basic styling (customize as you like)
- `player.js` — loads `playlist.json` and wires up the player
- `playlist.json` — list your tracks here
- `/music` — put your MP3 files here

## How to add songs
1. Upload your MP3 files into the `music/` folder.
2. Edit `playlist.json` and add entries like:
```json
[
  { "title": "Valentine", "artist": "Your Name", "file": "music/valentine.mp3" },
  { "title": "Another Track", "artist": "", "file": "music/another.mp3" }
]
```
3. Commit/push. The page will show your songs automatically.

## Replace a file
Upload a new MP3 with the **same filename** to overwrite the existing one. The player will serve the new version.

## Embed in Google Sites
Use your GitHub Pages URL (once deployed) via **Insert → Embed → By URL**.
