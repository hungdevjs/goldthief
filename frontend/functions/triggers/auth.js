const functions = require('firebase-functions');
const admin = require('firebase-admin');

const onAuthCreate = functions.auth.user().onCreate(async (user) => {
  const { uid } = user;

  await admin.firestore().collection('users').doc(uid).set({
    username: '',
    avatar: '',
  });
});

module.exports = {
  onAuthCreate,
};
