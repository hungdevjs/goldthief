const functions = require("firebase-functions");
const admin = require("firebase-admin");

const { faker } = require("@faker-js/faker");

const onAuthCreate = functions.auth.user().onCreate(async (user) => {
  const { uid } = user;

  await admin.firestore().collection("users").doc(uid).set({
    username: faker.name.fullName(),
    avatar: faker.image.avatar(),
  });
});

module.exports = {
  onAuthCreate,
};
