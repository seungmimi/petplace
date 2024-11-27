import { appFireStore } from "../firebase/config";
import { addDoc, doc, deleteDoc, collection } from "firebase/firestore";
import { firebaseState } from "../recoil/FirebaseAtom";
import { useSetRecoilState } from "recoil";

export const useFirestore = (transaction) => {
  const setDataStatus = useSetRecoilState(firebaseState);
  const colRef = collection(appFireStore, transaction);

  // 컬렉션에 즐겨찾기를 추가.
  const addDocument = async (doc) => {
    try {
      const docRef = await addDoc(colRef, doc);
    } catch (err) {
      console.log(err);
    }
  };

  // 컬렉션에서 즐겨찾기 제거
  const deleteDocument = async ({ id }) => {
    try {
      if (typeof id === "string") {
        const docRef = doc(colRef, id);
        await deleteDoc(docRef);
      } else {
        console.error("Invalid document ID:", id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { addDocument, deleteDocument };
};
