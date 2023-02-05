const functions = require('firebase-functions');
const admin = require('firebase-admin');

const create = functions.https.onCall(async (data, context) => {
  try {
    const { uid } = context.auth || {};
    if (!uid) throw new Error('Bad credential');

    const { password } = data;
    const user = await admin.firestore().collection('users').doc(uid).get();
    const { username, avatar } = user;

    const newGame = {};
    await admin.firestore().collection('games').add(newGame);

    return true;
  } catch (err) {
    functions.logger.error('Error in create game', err.message, data);
    throw new functions.https.HttpsError('Something is wrong', err.message);
  }
});

module.exports = {
  create,
};
