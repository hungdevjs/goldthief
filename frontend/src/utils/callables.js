import { httpsCallable } from "firebase/functions";

import { functions } from "../configs/firebase.config";

export const create = httpsCallable(functions, "create");

export const join = httpsCallable(functions, "join");

export const prepareGame = httpsCallable(functions, "prepareGame");

export const prepareTools = httpsCallable(functions, "prepareTools");
