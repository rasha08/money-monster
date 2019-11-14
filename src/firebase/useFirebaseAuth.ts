import { firebaseAuth, FirebaseUser } from "./firebaseApp";
import { usePopupContext } from "../context/popup";
import {useEffect, useState} from "react";
import {PopupTypes} from "../shared/constants";

interface UseFirebaseAuth {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  currentUser: FirebaseUser;
}

export const useFirebaseAuth = (): UseFirebaseAuth => {
  const { setPopupData } = usePopupContext();
  const [currentUser, setUser] = useState(firebaseAuth.currentUser)

  const signIn = async (email: string, password: string): Promise<void> => {
    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      setPopupData(e, PopupTypes.Error);
    }
  };

  const signUp = async (email: string, password: string): Promise<void> => {
    try {
      await firebaseAuth.createUserWithEmailAndPassword(email, password);
    } catch (e) {
      setPopupData(e, PopupTypes.Error);
    }
  };

  const signOut = async () => {
    await firebaseAuth.signOut();
  };

  firebaseAuth.onAuthStateChanged(user => setUser(user) )

  return { signIn, signUp, signOut, currentUser };
};
