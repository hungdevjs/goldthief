const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp();
}

const { create } = require("./callables/game");
const { onAuthCreate } = require("./triggers/auth");

exports.create = create;
exports.onAuthCreate = onAuthCreate;
