import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [forgetEmail, setForgetEmail] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // useEffect function is calling because I am doing some mutations here.
  useEffect(() => {
    // Start listening to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Update the user state when auth state changes
      setUser(currentUser);
      // Update the loading state
      setLoading(false);
    });

    // Cleanup function to stop listening when the component unmount
    return () => {
      // Stop the listener when the component unmount
      unsubscribe();
    };
  }, []);

  // Reset password
  const resetPasswordEmail = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createNewUser,
    signInUser,
    updateUserProfile,
    signInWithGoogle,
    logOut,
    setForgetEmail,
    forgetEmail,
    resetPasswordEmail,
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
