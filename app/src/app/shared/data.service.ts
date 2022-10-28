import { Injectable } from '@angular/core';

import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
  doc,
  getDoc,
  query,
  where,
} from 'firebase/firestore/lite';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  app: FirebaseApp;
  db: Firestore;

  constructor() {
    this.app = initializeApp(environment.firebase);
    this.db = getFirestore(this.app);
  }

  async getCollection(collectionName: string) {
    const col = collection(this.db, collectionName);
    const snapshot = await getDocs(col);
    const list = snapshot.docs.map((doc: any) => doc.data());

    return list;
  }

  async getPage(id: string) {
    const docRef = doc(this.db, 'pages', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  }

  async getNavItems() {
    const q = query(collection(this.db, 'pages'), where('nav', '==', true));
    const snapshot = await getDocs(q);
    const list = snapshot.docs.map((doc: any) => doc.data());

    return list;
  }

  async getElements() {
    const q = query(collection(this.db, 'elements'), where('type', '==', 1));
    const snapshot = await getDocs(q);
    const list = snapshot.docs.map((doc: any) => doc.data());

    return list;
  }

}
