# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  Context allows parent components to proivde data to the entire component tree below it.

- What values can be stored in context?
  I think it can store anything you want to.

- How do you create context and make it available to the components?
  Create a context file and export it and pass it to the useContext hook to read it in children components,

- How do you access the context values?
  Wrap children components in a contect provider with the value passed to it.

- When would you use context? (in addition to the best answer: "rarely")
  To check if a user is logged in, a dark more on a site, routing.

## Notes

All student notes should be written here.

## Feature Notes

### User can sign-up

When the user signs up, their username and password are stored in the database through `onSignUpOrSignIn()` in api.js. That funciton sends a POST request to the auth endpoint in server.js if the action is sign-up. The react front end then changes the route from the sign-up form to the sign-in form.

### User can sign in

When the user signs in, the `onSignUpOrSignIn()` function sends their credentials to the server at the '/api/auth/sign-in' end point and that endpoint checks the log in info with the database and logs them in if the credentials match a user in the database. At this point the react front end change the route to the index page and updates the nav bar to show a sign-out button. React knows if the user is logged in by using the AppContext which can feed data from to the components that need it.

### User can stay signed in

To me it looks like a token is being stored in localstorage to check if the user is logged in. If they are, then we are using Context to pass the user through the app to make sure the correct route is shown.

### User can sign-out

When the user signs out we are removing the localstorage token and setting the user and token to undefined. These values are then used by AppContext to show the correct route for when no user is signed in.

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
