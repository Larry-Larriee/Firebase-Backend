## Setup (Firebase Console)

1. Create a new project in the [Firebase Console](https://console.firebase.google.com/).
2. Add an App (Create Web App) 

<img style="width: 500px" src="https://cdn.discordapp.com/attachments/952426595279331358/1121200521261363200/Screenshot_20230621_025145.png">

3. In the **project settings** of the web app, there will be an option for `SDK Setup`. Copy the following code snippet and paste it into the `index.html` file found in the `public` folder.

<img style="width: 600px" src="https://cdn.discordapp.com/attachments/952426595279331358/1121201685554024479/image.png">


## Setup (VSC Terminal)

1. Install the Firebase CLI: `npm install -g firebase-tools`
2. Login to Firebase: `firebase login`
3. Initialize Firebase: `firebase init`
4. Move the arrow keys down to `Functions` and press space to select it. Press enter to continue.

## Deploy

1. Test your project locally: `firebase emulators:start`
2. Deploy the functions (when you feel ready): `firebase deploy --only functions`

## Modification

The `index.js` file is where you will be writing most your backend code. The `package.json` file is where you will be adding your dependencies. Your REST Api endpoints are formatted like the example below:

```js
exports.helloWorld = onRequest((request, response) => {
      
  // Do something here based on the request.

  response.send("Hello from Firebase!");
});
```

## Last Words

For more information, visit the [Firebase Documentation](https://firebase.google.com/docs/functions/get-started) or [learn about Firebase REST API](https://firebase.google.com/docs/reference/rest/database).

- The Net Ninja also provides a video version of this tutorial [here](https://www.youtube.com/watch?v=gYF32BrHVlA).
