/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };

    const handleUpdateProfile = (name, photo) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    };

      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        //   const userEmail = currentUser?.email || user?.email;
        //   const loggedUser = { email: userEmail };
          setUser(currentUser);
          setLoading(false);
          // if user exists then issue a token
        //   if (currentUser) {
        //     axios
        //       .post(
        //         "https://online-group-study-server-beta.vercel.app/jwt",
        //         loggedUser,
        //         {
        //           withCredentials: true,
        //         }
        //       )
        //       .then((res) => {
        //         console.log("token response", res.data);
        //       });
        //   } else {
        //     axios
        //       .post(
        //         "https://online-group-study-server-beta.vercel.app/logout",
        //         loggedUser,
        //         {
        //           withCredentials: true,
        //         }
        //       )
        //       .then((res) => {
        //         console.log(res.data);
        //       });
        //   }
        });

        return () => {
          unSubscribe();
        };
      }, []);

    const authInfo = {
      user,
      loading,
      createUser,
      signInUser,
      signInWithGoogle,
      logOut,
      handleUpdateProfile,
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;