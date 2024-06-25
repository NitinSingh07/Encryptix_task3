import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebase.config";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        navigate("/"); // Redirect to the homepage
      })
      .catch((error) => {
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(errorMessage, email, credential);
      });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <button className="bg-blue px-8 py-2 text-white" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
