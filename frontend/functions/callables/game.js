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
    const { username, avatar, activeGameId } = user.data();

    if (activeGameId) throw new Error("User already in a game");

    const newGame = {
      code: nanoid(4),
      password: password || "",
      status: "waiting",
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

    return { ...game.data(), id: gameDoc.id };
  } catch (err) {
    functions.logger.error("Error in create game", err.message, data);
    throw new functions.https.HttpsError("Something is wrong", err.message);
  }
});

const join = functions.https.onCall(async (data, context) => {
  try {
    const { uid } = context.auth || {};
    if (!uid) throw new Error("Bad credential");

    const user = await admin.firestore().collection("users").doc(uid).get();
    const { username, avatar, activeGameId } = user.data();

    if (activeGameId) throw new Error("User already in a game");

    const { code, password } = data;
    if (!code.trim()) throw new Error("Invalid room code");

    const gameDoc = (
      await admin
        .firestore()
        .collection("games")
        .where("code", "==", `${code}`)
        .get()
    ).docs[0];

    const gameData = gameDoc.data();

    if (gameData.joiner) throw new Error("Game is already begin");

    if (gameData.password !== password)
      throw new Error("Invalid room password");

    await admin
      .firestore()
      .collection("games")
      .doc(gameDoc.id)
      .update({
        joiner: { id: uid, username, avatar, missingTurnCount: 0 },
        status: "preparing",
      });

    const game = await admin
      .firestore()
      .collection("games")
      .doc(gameDoc.id)
      .get();

    await admin
      .firestore()
      .collection("users")
      .doc(uid)
      .update({ activeGameId: gameDoc.id });

    return { ...game.data(), id: gameDoc.id };
  } catch (err) {
    functions.logger.error("Error in join game", err.message, data);
    throw new functions.https.HttpsError("Something is wrong", err.message);
  }
});

const prepareGame = functions.https.onCall(async (data, context) => {
  try {
    const { uid } = context.auth || {};
    if (!uid) throw new Error("Bad credential");

    const user = await admin.firestore().collection("users").doc(uid).get();
    const { activeGameId } = user.data();

    const { id, coordinates } = data;
    if (activeGameId !== id) throw new Error("Invalid game");

    const gameDoc = await admin.firestore().collection("games").doc(id).get();

    const gameData = gameDoc.data();

    if (gameData.host.id === uid) {
      await admin
        .firestore()
        .collection("games")
        .doc(gameDoc.id)
        .update({
          host: { ...gameData.host, map: coordinates },
        });
    }

    if (gameData.joiner.id === uid) {
      await admin
        .firestore()
        .collection("games")
        .doc(gameDoc.id)
        .update({
          joiner: { ...gameData.joiner, map: coordinates },
        });
    }

    const game = await admin
      .firestore()
      .collection("games")
      .doc(gameDoc.id)
      .get();

    return { ...game.data(), id: gameDoc.id };
  } catch (err) {
    functions.logger.error("Error in create game", err.message, data);
    throw new functions.https.HttpsError("Something is wrong", err.message);
  }
});

const prepareTools = functions.https.onCall(async (data, context) => {
  try {
    const { uid } = context.auth || {};
    if (!uid) throw new Error("Bad credential");

    const user = await admin.firestore().collection("users").doc(uid).get();
    const { activeGameId } = user.data();

    const { id, tools } = data;
    if (activeGameId !== id) throw new Error("Invalid game");

    const gameDoc = await admin.firestore().collection("games").doc(id).get();

    const gameData = gameDoc.data();

    if (gameData.host.id === uid) {
      const status = gameData.joiner.tools ? "in progress" : "preparing";

      await admin
        .firestore()
        .collection("games")
        .doc(gameDoc.id)
        .update({
          host: { ...gameData.host, tools },
          status,
        });
    }

    if (gameData.joiner.id === uid) {
      const status = gameData.host.tools ? "in progress" : "preparing";

      await admin
        .firestore()
        .collection("games")
        .doc(gameDoc.id)
        .update({
          joiner: { ...gameData.joiner, tools },
          status,
        });
    }

    const game = await admin
      .firestore()
      .collection("games")
      .doc(gameDoc.id)
      .get();

    return { ...game.data(), id: gameDoc.id };
  } catch (err) {
    functions.logger.error("Error in create game", err.message, data);
    throw new functions.https.HttpsError("Something is wrong", err.message);
  }
});

module.exports = {
  create,
  join,
  prepareGame,
  prepareTools,
};
