For this task I chose open source starter kit [starbase](https://github.com/bstaruk/starbase) with modern front-end tools:  

- [Node.js](https://github.com/nodejs/node), [webpack 5](https://github.com/webpack/webpack) & [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- [Babel 7](https://github.com/babel/babel) w/ [ESLint](https://github.com/eslint/eslint) & [Prettier](https://github.com/prettier/prettier)
- [Sass](https://github.com/sass) w/ [stylelint](https://github.com/stylelint/stylelint)

Below are instructions for project buiding

### Local Development

starbase uses [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to serve up your project at [http://localhost:8080](http://localhost:8080) for streamlined and convenient development.

After running `npm run start` in the project root, your `/src` code will be served at the url above and watched for changes. As you modify code in `/src`, the project will be recompiled and your browser will refresh to show the latest changes.

```
npm run start
```

### Building for Production

Use `npm run build` in your project root to run a production build.

Production builds compile & minify your assets into `/dist` for distribution and/or integration into whatever codebase you'll be using these assets in.

```
npm run build
```