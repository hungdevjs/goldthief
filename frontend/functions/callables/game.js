const functions = require("firebase-functions");
const admin = require("firebase-admin");

const { nanoid } = require("nanoid");

admin.firestore().settings({ ignoreUndefinedProperties: true });

const create = functions.https.onCall(async (data, context) => {
  try {
    const { uid } = context.auth || {};
    if (!uid) throw new Error("Bad credential");

    const { password } = data;
    const user = await admin.firestore().collection("users").doc(uid).get();
    const { username, avatar } = user.data();

    const newGame = {
      code: nanoid(4),
      password,
      statius: "waiting",
      host: {
        id: uid,
        username,
        avatar,
        missingTurnCount: 0,
      },
      createdAt: admin.firestore.Timestamp.now(),
    };
    const gameDoc = await admin.firestore().collection("games").add(newGame);

    await admin
      .firestore()
      .collection("users")
      .doc(uid)
      .update({ activeGameId: gameDoc.id });

    const game = await admin
      .firestore()
      .collection("games")
      .doc(gameDoc.id)
      .get();

    const gameData = game.data();

    return { id: gameDoc.id, ...gameData };
  } catch (err) {
    functions.logger.error("Error in create game", err.message, data);
    throw new functions.https.HttpsError("Something is wrong", err.message);
  }
});

module.exports = {
  create,
};
