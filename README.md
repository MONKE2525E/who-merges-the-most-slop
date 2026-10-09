# T3 Code slopbase growth

Interactive codebase growth chart for upstream [pingdotgg/t3code](https://github.com/pingdotgg/t3code).

[Live website](https://who-merges-the-most-slop.lakebed.app/)

Blue diamonds mark major milestones. White diamonds mark other merged PRs with more than 20,000 changed lines, counting additions and deletions across all files. A major milestone with a PR uses one blue marker and includes its PR details. The contributor chart shows the ten largest contributors by added source-file lines.

The bundled data is a snapshot through October 8, 2026. Source totals include tests, comments, and blank lines, excluding vendored and generated paths, documentation, lockfiles, and data/config files. Contributor totals count rewrites again and do not measure code ownership or effort. Full methods and source links are on the page. There is no automatic updater.

## Run locally

Open `chart.html` in a browser, or serve the directory with any static server. D3 7.9.0 loads from jsDelivr.

To run the Lakebed version, use Node.js and npm:

```sh
npm ci
npm run dev -- --port 3000
```

Edit `chart.html`. The sync script regenerates `lakebed/client/chart.ts` before dev, build, and deploy.

## Deploy

```sh
npm run build
npm run deploy
```

The Lakebed CLI creates local deployment configuration for your own deployment. Deployment credentials and local state are excluded from this repository.
