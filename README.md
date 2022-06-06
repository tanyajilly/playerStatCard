# starbase

[![npm version](https://badge.fury.io/js/starbase.svg)](https://badge.fury.io/js/starbase)
[![dependencies status](https://david-dm.org/bstaruk/starbase/status.svg)](https://david-dm.org/bstaruk/starbase)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbstaruk%2Fstarbase.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fbstaruk%2Fstarbase?ref=badge_shield)

starbase is a production-ready website boilerplate built with webpack 5, Babel 7 & Sass that enables developers to get up and running in minutes using some of the most powerful front-end tools available in 2022:

- [Node.js](https://github.com/nodejs/node), [webpack 5](https://github.com/webpack/webpack) & [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- [Babel 7](https://github.com/babel/babel) w/ [ESLint](https://github.com/eslint/eslint) & [Prettier](https://github.com/prettier/prettier)
- [Sass](https://github.com/sass) w/ [stylelint](https://github.com/stylelint/stylelint)

The primary mission is to be small in scope so that it may be easily extended and customized, or used as a learning tool for developers who are trying to become familiar with webpack 5, Sass and/or modern JS.

---

## Getting Started

After completing the steps below, you will be ready to begin using starbase:

1. Install [Node.js](https://nodejs.org) (latest LTS recommended)
2. Clone starbase into your project root directory
3. Install dependencies by running `npm install` in your project root directory

### Local Development

starbase uses [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to serve up your project at [http://localhost:8080](http://localhost:8080) for streamlined and convenient development.

After running `npm run start` in the project root, your `/src` code will be served at the url above and watched for changes. As you modify code in `/src`, the project will be recompiled and your browser will refresh to show the latest changes.

```
cd /path/to/starbase
npm run start
```

### Building for Production

Use `npm run build` in your project root to run a production build.

Production builds compile & minify your assets into `/dist` for distribution and/or integration into whatever codebase you'll be using these assets in.

```
cd /path/to/starbase
npm run build
```

---

## Features & Configurations

### JS & Sass Linting

starbase uses [ESLint](http://eslint.org/) for Javascript (ES6) linting and [stylelint](https://github.com/stylelint/stylelint) for Sass linting to encourage consistent code throughout your project. The configs (`/.eslintrc.js` and `/.stylelintrc` respectively) include a solid foundation to build upon, utilizing the most popular industry-standardized plugins such as [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) and [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines).

### Prettier Formatting

starbase uses [Prettier](https://github.com/prettier/prettier) to enforce and simplify code consistency. If you use VS Code, check out the [Prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). If you'd rather prettify your code via CLI, run `npm run prettify` at your project root.

### Linting & Formatting Pre-Commit Hook

starbase uses [Husky](https://github.com/typicode/husky) & [lint-staged](https://github.com/okonet/lint-staged) to run ESLint, stylelint & Prettier as pre-commit hooks, ensuring only clean code ends up in version control.

### HTML Webpack Plugin

starbase uses [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin), which enables webpack to handle assets that are linked from within our HTML templates, such as images and embedded videos. It also makes sure our generated `.js` & `.css` files are included where they need to be.

Open the webpack configs if you need to add more pages -- and be sure to check out the plugin documentation to learn about the more advanced features such as `.ejs` and environment variable support.

### Asset Hashing (Cache Busting)

The assets generated by starbase are [hashed](https://webpack.js.org/guides/caching/) as a cache-busting mechanism. Hashes are generated via file contents so they will only change when the files themselves have changed.

This feature ships with webpack (and the loaders we use), so removing it is pretty straightforward. Open the webpack configs and remove the hashes from the filenames, which should look something like this: `.[hash:8]`.

Removing hashing for production builds is not recommended.

### Build-Time Cleanup

starbase is setup to clear all contents of `/dist` (where compiled assets are piped into) during each `npm run build`. If you'd like to remove this part of the build process, perform the following steps:

1. remove `CleanWebpackPlugin` from the plugins array in `/webpack/webpack.config.prod.js`
2. remove `CleanWebpackPlugin` as a requirement at the top of `/webpack/webpack.config.prod.js`
3. remove the `CleanWebpackPlugin` dependency from `/package.json`

Removing the cleanup process means that deleted assets in `/src` will not be deleted in `/dist` until you manually do so. I recommend keeping the cleanup process intact unless you have a specific reason not to, such as having un-managed assets in `/dist`.

---

## Notes & Considerations

### Root Path

starbase is setup to run with assets referenced via relative paths so generated `.html` files can be opened without needing a deployment. If you plan on deploying to a web server, it'll be a good idea to set the `publicPath` in `/webpack/webpack.config.base.js`.

This variable should be set to `/` if the app will run at the root of a domain or subdomain, or to `/folderName` (example) if it'll be deployed to a subfolder.

---

## License

starbase is open source and free software, so you may to do whatever you wish with it -- commercially or personally. You can buy me a beer next time you're in Boston, star the project and tell a friend, or you can erase all signs of origin and tell your coworkers that you made it yourself. It's all good!