## ab-scaffold

Proof of concept for improving ab-testing workflow with local preview and improved tooling.

Uses [Puppeteer](https://pptr.dev/) for local development and [Rollup](https://rollupjs.org/) for bundling.

### Installation

```
nvm install
npm install
```

### Usage

Experiments are stored in `experiments`, with one directory per experiment, like so:

```
.
└── experiments/
    ├── ab-1/
    │   ├── config.json
    │   ├── variant.js
    │   └── ...
    └── ab-2/
        └── ...
```

Given that directory structure, you can now run:

```
npm run launch ab-1 variant.js
```

This will start a Puppeteer instance and load the URL defined in `config.json`, with `variant.js` injected into the page. The page will automatically update when you save changes to `variant.js`.

To build for production, run:

```
npm run build ab-1 variant.js
```

This will output a bundle into `dist` inside the experiment folder.

### TODO

- ~~Proper HMR (or at least live reload)~~
- ~~Don't rebuild bundle when reloading page in browser~~
- ~~Find another way to trigger script injection that doesnt rely on DOMContentLoaded (so that tests can use this event themselves? Not sure how useful this is as I think Target tests will always be added after DOMContentLoaded anyway)~~
- Preview multiple tests simultaneously on the same page
- Test harness (stick with Puppeteer or use Playwright? Should CLI syntax use same positionals as launch/build?)
