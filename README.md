- Demo: https://sandpack.netlify.app/
- Edit on CodeSandbox: https://codesandbox.io/s/github/sylvhama/code-challenge

## Notes

- Created with CodeSandbox;
- I am using `create-react-app`, in real life I would either go with Vite if we want to stick with a SPA or Next.js if we need SSR;
- If we keep a SPA we would have to implement some a11y / performance improvements (focus on page change, remember scroll on previous/next, code splitting for each route...)
- We could use Storybook to visualize and develop each component independently;
- i18n is not handled at the moment, could be done with `react-intl` or something equivalent;
- We could update meta tags such as `<title>` with `react-helmet`;
- There is no favicon, no manifest.json, no social media preview yet;
- There must be a more performant way to import / cache Google Fonts;
- Dark / Light mode could be stored in a Context plus Local Storage so user could change it without changing its OS settings;
- `Heading`: we could have a global context to detect the right heading level;
- We could explore new viewport units to avoid the `-webkit-fill-available` trick;
- The app is not mobile / small screen friendly, it would require some CSS media queries to fix that;
- Each page has its own wrapper CSS, we could explore how to leverage `Layout` to handle that or at least have a shared `Page` component;
- Of course we need automatic tests;
- Not sure if using a Context for Octokit is optimum;
- We need a proper loading and error state when directly loading / reloading Kanban page;
- We should have a proper icon system that can import each icon independently;
- When moving a branch to another column we should keep the focus on the button;
- Long branch names create very large buttons, all buttons end up with different heights;
- Stars: we could have a skeleton when they are loading, we should be able to click to star/unstar;
