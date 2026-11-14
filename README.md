# bobneeb.com

Personal site for Bobby Neeb: hikes, wellness, bucket list, and trip planning.
Plain static HTML/CSS with a little vanilla JavaScript. No build step, no frameworks,
no trackers, no external fonts or scripts.

## Structure

```
bobneeb-site/
├── index.html          Home (about-me intro, quick stats, links)
├── wellness.html       Wellness journey (text lives in this file)
├── hikes.html          Hike log (cards / table toggle), reads data/hikes.json
├── bucket-list.html    Bucket list, reads data/bucket-list.json
├── journal.html        Planning journal, reads data/journal.json
├── 404.html            "Off trail" not-found page
├── css/style.css       All styling (colors are CSS variables at the top)
├── js/site.js          Shared header/nav + footer, small helpers
├── data/
│   ├── hikes.json        ← edit to add a hike
│   ├── bucket-list.json  ← edit to add a bucket-list goal
│   └── journal.json      ← edit to add a journal entry
├── images/             favicon + put photos here
├── screenshots/        preview screenshots (not needed for hosting)
└── .nojekyll           tells GitHub Pages to serve files as-is
```

## Preview locally

The data pages load JSON with `fetch`, so open them through a web server rather than
by double-clicking the file:

```
cd bobneeb-site
python3 -m http.server 8000
# then open http://localhost:8000
```

## Add a hike

Open `data/hikes.json` and add an object at the **top** of the `hikes` list (newest first):

```json
{
  "name": "Trail name",
  "location": "Park, State",
  "dates": "Mar 14, 2027",
  "type": "Day hike",
  "summary": "One or two sentences about the trip.",
  "highlights": ["Short bullet", "Another bullet"],
  "distance": "12 mi",
  "photo": "images/my-photo.jpg"
}
```

Remember the comma between entries. `photo` can be `""` (shows a placeholder) and
`distance` can be `"TBD"` (shows a yellow TBD tag).

## Add a bucket-list goal

In `data/bucket-list.json` add to `items`:

```json
{ "title": "Goal", "region": "Where", "target": "2028", "status": "idea",
  "notes": "Notes", "link": "", "example": false }
```

`status` is one of `idea`, `planning`, `booked`, `done`. Entries with `"example": true`
are sample placeholders. Delete them whenever you like.

## Add a journal entry

In `data/journal.json` add to `entries` (newest first):

```json
{
  "id": "trip-name-2028",
  "title": "Trip Name 2028 Prep",
  "status": "Planning",
  "updated": "Jan 2028",
  "intro": "Short description.",
  "sections": [
    { "heading": "Dates", "text": "TBD" },
    { "heading": "Gear checklist", "items": ["Item one", "Item two"] }
  ]
}
```

Each section uses either `text` (paragraph) or `items` (bullet list). Any `TBD` gets
highlighted automatically. Link to an entry with `journal.html#<id>`.

## Placeholders to fill in

- Hero photo areas on every page (currently an illustrated gradient). To use a photo, add a
  `background-image` to `.hero` in `css/style.css` (use your own photos).
- Home: extra "about me" paragraph (dashed yellow box).
- Wellness: "Where it started", "What changed", "What's next", and extra milestones.
  Private health numbers are intentionally not on the site.
- Hike photos and distances (`TBD`).
- Bucket list: two "Example idea" entries.
- BWCAW 2027 Prep: dates, route/entry point, permits, gear, food, training are `TBD`.

## Hosting

Upload the folder contents to GitHub Pages or Cloudflare Pages (no build command;
output directory is the repo root). Then point the bobneeb.com DNS at the host.
