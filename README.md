# Yilin's portfolio

Static personal portfolio for GitHub Pages.

## Publish

1. Create a public GitHub repository named `Yilin-1001.github.io`.
2. Push these files to its `main` branch.
3. In **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/(root)`.

The site will be available at `https://Yilin-1001.github.io`.

## Before publishing

- In `index.html`, replace `your.email@example.com` with your own email address.
- Add each new project by duplicating the `article` with class `project-card` in the Work section.
- Update the year in the footer as needed.

The site uses a small dependency-free script (`script.js`) for scroll-in reveals — it respects reduced-motion settings and degrades gracefully without JavaScript. There is no build step, so it can be published directly on GitHub Pages.

## Project media

Each project visual uses the `project-media` class and is ready for an image, GIF, or video. Replace the current visual markup with an `<img>` or a `<video>` element; the media will fill the card automatically.

```html
<div class="project-media">
  <video src="assets/robot-demo.mp4" controls muted playsinline></video>
</div>
```

The design follows the visitor's system light or dark appearance automatically.
