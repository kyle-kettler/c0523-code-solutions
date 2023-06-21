# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  Node Packagem Manager

- What is a package?
  A directory of one or more files in it that also has a file called 'package.json' in it.

- What are some other popular package managers?
  Yarn and PNPM

- How can you create a `package.json` with `npm`?
  npm init --yes

- What is a dependency and how do you add one to a package?
  They are packages that your project relies on. To add one you list them as "dependencies" or "devDependencies" in package.json

- What happens when you add a dependency to a package with `npm`?
  The package and all of it's dependencies get added to your project and they are added to the dependencies list.

- What is a devDependency and how do you add one to a package?
  A dependency that is only needed for local development and testing.
  npm install <package-name> --save-dev

- How do you define and run `npm` scripts? Why are these useful?
  Add the script into package.json and then you can run it with npm run <script-name>. They are used to make command development commands available without the need to remember or type long arguments, and to share them across the team.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
