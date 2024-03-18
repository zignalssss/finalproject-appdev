import { getStorage, getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { app } from "../lib/firebaseconfig.mjs";
import { v4 as uuidv4 } from "uuid";

const metadata = {
    contentType: "image/jpeg",
  };

export const uploadImageUser = async (file) => {
    const storage = getStorage(app);
    const storageRef = ref(storage, `imagesUser/${uuidv4()}`);
    const snapshot = await uploadBytes(storageRef, file, metadata);
    const url = await getDownloadURL(snapshot.ref);
    return url;
};