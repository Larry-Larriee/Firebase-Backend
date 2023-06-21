/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// https request 1
exports.helloWorld = onRequest((request, response) => {
  
  // Console logging on firebase only for development purposes
  logger.info("Hello logs!", {structuredData: true});
    
  // Do something here based on the request.

  response.send("Hello from Firebase!");
});
