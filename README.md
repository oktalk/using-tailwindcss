# Instructions

This project walks through the features of TailwindCSS through branches that incrementally build on top of each other. Pull this repo down locally and checkout each branch one-by-one. I.e.: `git checkout step/1-***`, `git checkout step/2-***`, `git checkout step/3-***`, and so on.

Eventually you will run NPM to build you bundle and run the project. So the latest Node and NPM are required.

## Step 1 Hello World -- TailwindCSS via CDN

The simplest way to get going with Tailwind is through the CDN. However, this is not for production use mostly because of the large file size. Though, it works for out demo.

First, create an HTML page with a boilerplate HTML5 structure. Then add the following:
`<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">`

You can start playing around with the styles, but you won't get far without referring to the [documentation](https://tailwindcss.com/docs). If you are using Visual Studio Code, there is an easier way. Install the [TailwindCSS intellisense tool](https://tailwindcss.com/docs/intellisense) for autocomplete, syntax highlighting, and linting.

## Step 2 TailwindCSS PostCSS plugin in your build process

TailwindCSS will drop in easily to most modern project stacks. If you're using [Laravel](https://tailwindcss.com/docs/guides/laravel), React, Vue, or [Ruby on Rails](https://github.com/rails/tailwindcss-rails) you can find step-by-step [installation guides](https://tailwindcss.com/docs/installation). Using Tailwind with PostCSS and a preprocessor like SASS is possible, but not strongly recommended.

Start by installing the dependencies:

`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

Add a configuration file for PostCSS:
```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

Along with the `tailwindcss@latest` package you installed there is also a CLI tool. We can use that to generate a Tailwind config file now:

`npx tailwindcss init -p`

Next, you'll need to include Tailwind in a CSS file:

```css
/* ./your-css-folder/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now build your styles:
`npx tailwindcss-cli build styles/app.css -o build/app.css`

## Step 3 Mockup time

For this simple demo we will use ViteJS, but you could use Parcel, or WebPack.

`npm init @vitejs/app`

Then add a new script command to your package json:
```json
  "scripts": {
    ...
    "dev": "vite",
    ...
  },

```

Now start up the local server with:
`npm run dev`

## Step 3 Using media queries

