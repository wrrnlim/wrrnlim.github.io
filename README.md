# Portfolio Website

This site is created with [Vite](https://vitejs.dev/), [React](https://reactjs.org/), and [MDBootstrap](https://mdbootstrap.com/docs/react/).

## Setup

This project was created with [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite), using:

```bash
npm create vite@latest my-react-app --template react
```

## Build and Deploy

Pushing changes to the `main` branch will trigger a GitHub Action to build and deploy the site to GitHub Pages. The build files are stored in the `gh-pages` branch, where GitHub pages builds from. The GitHub Action workflow can be found at [`./.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).

## Caveats

### Routing

GitHub Pages does not support `react-router`'s `BrowserRouter` component. This is because GitHub Pages looks for a route on the server side first, then returns the GitHub 404 page when it is not found. `react-router` performs routing on the client side, and the 404 page is loaded before routing can be done on client side. We can work around this by using `react-router`'s `HashRouter` component. This causes the root URL to have a `/#/` (eg `http://wrrnlim.github.io/#/projects` instead of `http://wrrnlim.github.io/projects`), but correctly routes to the desired page. [This](https://stackoverflow.com/a/46060999/17225509) StackOverflow answer explains the problem and provides solutions, while [this answer](https://stackoverflow.com/a/74149347/17225509) describes the workaround in greater detail.
