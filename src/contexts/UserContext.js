import React, { createContext } from "react";
import app from "./../firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const gooleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, gooleProvider);
  };
  const authInfo = { googleSignIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
