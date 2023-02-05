import { httpsCallable } from 'firebase/functions';

import { functions } from '../configs/firebase.config';

export const create = httpsCallable(functions, 'create');
