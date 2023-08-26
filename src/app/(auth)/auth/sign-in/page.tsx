"use client";

import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "@/utils/firebase/firebase.config";

import { useState } from "react";

interface FormData {
  email: string;
  password: string;
}
function SignIn() {
  const [formFields, setFormFields] = useState<FormData>({
    email: "",
    password: "",
  });

  const { email, password } = formFields;
  const router = useRouter();
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  // Sign in with Google

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      router.push("/");
    } catch (error) {
      alert("Could not sign in with Google");
    }
  };

  const resetFormFields = () => {
    setFormFields({
      email: "",
      password: "",
    });
  };

  const onSignInUser = async () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      if ((error as any).code === "auth/user-not-found") {
        alert("User not found! Please sign up");
      } else {
        console.log("There was an error signing in the user", error);
      }
    }
  };

  return (
    <section>
      <div className="container mx-auto px-4">
        <h2>Sign in to start shopping!</h2>
        <div className="sign-in__btn">
          <Link href="">
            <Button
              onClick={signInWithGoogle}
              className="w-full"
              variant="outlined"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                role="img"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.64 9.20419C17.64 8.56601 17.5827 7.95237 17.4764 7.36328H9V10.8446H13.8436C13.635 11.9696 13.0009 12.9228 12.0477 13.561V15.8192H14.9564C16.6582 14.2524 17.64 11.9451 17.64 9.20419Z"
                  fill="#4285F4"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z"
                  fill="#34A853"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40664 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z"
                  fill="#FBBC05"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z"
                  fill="#EA4335"
                ></path>
              </svg>
              <span className="normal-case">Sign in with Google</span>
            </Button>
          </Link>
        </div>
        <hr className="divider sign-in"></hr>
        <form>
          <div className="input-group">
            <TextField
              id="email"
              type="email"
              name="email"
              value={formFields.email}
              label="Email"
              variant="outlined"
              className="w-full"
              onChange={handleFormChange}
            />
          </div>
          <div className="input-group">
            <div className="flex justify-end">
              <span>Forgot password?</span>
            </div>
            <TextField
              id="password"
              name="password"
              value={formFields.password}
              label="Password"
              type="password"
              className="w-full"
              onChange={handleFormChange}
            />
          </div>

          <Link href="">
            <Button
              onClick={onSignInUser}
              className="w-full bg-blue-600"
              variant="contained"
            >
              Sign in
            </Button>
          </Link>
        </form>
        <div className="sign-up">
          <p>
            Don&apos;t have an account?
            <Link href="/auth/register">Sign up</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
