## Notes

- Created with CodeSandbox;
- I am using `create-react-app`, in real life I would either go with Vite if we want to stick with a SPA or Next.js if we need SSR;
- We could use Storybook to vizualize each component independently;
- i18n is not handled at the moment, could be done with `react-intl` or something equivalent;
- We could update meta tags such as `<title>` with `react-helmet`;
- There is no favicon, no manifest.json, no social media preview yet;
- There must be a more performant way to import / cache Google Fonts;
- Dark / Light mode could be stored in a Context plus Local Storage so user could change it without changing its OS settings;
- `Heading`: we could have a global context to detect the right heading level;
- `Text`: we could support more semantic tags sucgh as `strong` or `em`;
- We could explore new viewport units to avoif the `-webkit-fill-available` trick;
