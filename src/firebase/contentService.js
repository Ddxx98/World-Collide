import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    orderBy
} from "firebase/firestore";
import { db } from "./config";

// Generic CRUD service for any collection
export const contentService = {
    // Subscribe to updates
    subscribe: (collectionName, callback) => {
        const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));
        return onSnapshot(q, (snapshot) => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            callback(items);
        });
    },

    // Create
    add: async (collectionName, data) => {
        return await addDoc(collection(db, collectionName), {
            ...data,
            createdAt: new Date()
        });
    },

    // Update
    update: async (collectionName, id, data) => {
        const docRef = doc(db, collectionName, id);
        return await updateDoc(docRef, {
            ...data,
            updatedAt: new Date()
        });
    },

    // Delete
    delete: async (collectionName, id) => {
        const docRef = doc(db, collectionName, id);
        return await deleteDoc(docRef);
    }
};
