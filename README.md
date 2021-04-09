# Instructions

This project walks through the features of TailwindCSS through branches that incrementally build on top of each other. Pull this repo down locally and checkout each branch one-by-one. I.e.: `git checkout step/1-***`, `git checkout step/2-***`, `git checkout step/3-***`, and so on.

Eventually you will run NPM to build you bundle and run the project. So the latest Node and NPM are required.

## Step 1 Hello World -- TailwindCSS via CDN

The simplest way to get going with Tailwind is through the CDN. However, this is not for production use mostly because of the large file size. Though, it works for out demo.

First, create an HTML page with a boilerplate HTML5 structure. Then add the following:
`<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">`

You can start playing around with the styles, but you won't get far without referring to the [documentation](https://tailwindcss.com/docs). If you are using Visual Studio Code, there is an easier way. Install the [TailwindCSS intellisense tool](https://tailwindcss.com/docs/intellisense) for autocomplete, syntax highlighting, and linting.
