# expensify
Expense manager application with React, Redux, Jest tests, Firebase integration, and Google authetication

Most of the source code is part of the [The Complete React Web Developer Course (with Redux)](https://www.udemy.com/react-2nd-edition) by [Andrew Mead](https://github.com/andrewjmead)

## Getting started

The app expects the following environment variables from `.env.dev` and `.env.test` from the root of the project:

```
FIREBASE_API_KEY
FIREBASE_AUTH_DOMAIN
FIREBASE_DATABASE_URL
FIREBASE_PROJECT_ID
FIREBASE_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID
```

The app can be started with the following script:

```
$ npm install && npm run build:prod && npm start
```

You can visit the app from your browser at: [localhost:3000](http://localhost:3000)