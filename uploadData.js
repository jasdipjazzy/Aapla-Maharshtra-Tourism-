import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase.js"; // This points to your firebase config file
import data from "../Backend/data.json"; // This points to your local data file

const uploadScript = async () => {
  console.log("Starting data upload...");
  const collectionRef = collection(db, "tourist-places");

  // The 'data' from your JSON file is already an array
  const touristData = data.data;

  for (const item of touristData) {
    try {
      // We don't need to specify an ID, Firestore will auto-generate it.
      // We remove the old 'id' field as it's not needed.
      const { id, ...dataToUpload } = item;
      await addDoc(collectionRef, dataToUpload);
      console.log(`Added: ${item.placename}`);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  console.log("Data upload complete!");
};

// To run the script, we call the function.
uploadScript();