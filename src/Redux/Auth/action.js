// Import 
import { auth, googleProvider, storeDB, facebookProvider } from '../../Services/firebaseConfig'
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, setDoc, doc, getDocs, getDoc } from 'firebase/firestore'
import { FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from './actionType'
import axios from 'axios'

// Login Action Methods
const loginRequest = () => {
     return { type: LOGIN_REQUEST }

}
const loginSuccess = (payload) => {
     return { type: LOGIN_SUCCESS, payload }
}
const loginFailure = (payload) => {
     return { type: LOGIN_FAILURE, payload }
}

// SignUp Action Methods
const signUpRequest = () => {
     return { type: SIGN_UP_REQUEST }

}
const signUpSuccess = (payload) => {
     return { type: SIGN_UP_SUCCESS, payload }
}
const signUpFailure = (payload) => {
     return { type: SIGN_UP_FAILURE, payload }
}

// Methods that tolk to Firebase

// login with email and password 
const loginWithEmailAndPassword = (email, password) => async (dispatch) => {
     try {
          dispatch(loginRequest())
          await signInWithEmailAndPassword(auth, email, password);
          dispatch(loginSuccess("Login successful."))
     } catch (error) {
          let errorMessage = "Login failed. Please check your credentials and try again.";

          if (error.code === "auth/user-not-found") {
               errorMessage = "User not found. Please register to create an account.";
          } else if (error.code === "auth/wrong-password") {
               errorMessage = "Incorrect password. Please try again.";
          }
          dispatch(loginFailure(errorMessage))
     }
}

// login with Google
// const loginWithGoogle = () => async (dispatch) => {
//      try {
//           dispatch(loginRequest());
//           const result = await signInWithPopup(auth, googleProvider)

//           dispatch(loginSuccess(`Welcome, ${result.user.displayName}!`))

//      } catch (error) {
//           dispatch(loginFailure(`Sign-In Error: ${error.message}`))
//      }
// }
const loginWithGoogle = () => async (dispatch) => {
     try {
          dispatch(signUpRequest());

          const result = await signInWithPopup(auth, googleProvider);

          // Assuming you have a 'users' collection in Firestore
          const usersCollection = collection(storeDB, 'users');
          const userId = result.user.uid;

          const userDocRef = doc(usersCollection, userId);

          // Check if the user exists in Firestore
          const userDocSnapshot = await getDoc(userDocRef);

          if (!userDocSnapshot.exists()) {
               // If the user doesn't exist, add their data
               await setDoc(userDocRef, {
                    name: result.user.displayName,
                    email: result.user.email,
                    cart: [],
                    wishlist: [],
                    order: [],
               });
          }
          dispatch(signUpSuccess(`Welcome, ${result.user.displayName}!`));
     } catch (error) {
          let errorMessage = "Sign-up failed. Please check your information and try again";
          if (error.code === "auth/email-already-in-use") {
               errorMessage = "The email address is already in use by another account. Please use a different email";
          }
          dispatch(signUpFailure(errorMessage));
     }
};

// login with Facebook
const loginWithFacebook = () => async () => {
     try {
          dispatch(loginRequest());
          const result = await signInWithPopup(auth, facebookProvider)

          dispatch(loginSuccess(`Welcome, ${result.user.displayName}!`))

     } catch (error) {
          dispatch(loginFailure(`Sign-In Error: ${error.message}`))
     }
}

// SignUp new user 
const signUpNewUser = (email, password, name) => async (dispatch) => {
     try {
          dispatch(signUpRequest());
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const userId = userCredential.user.uid;

          const userDocRef = doc(storeDB, 'users', userId);



          await setDoc(userDocRef, {
               name,
               email,
               password,
               cart: [],
               wishlist: [],
               order: [],
          });



          const data = collection(storeDB, "users");
          const querySnapshot = await getDoc(data);

          console.log(querySnapshot)

          dispatch(signUpSuccess(`Welcome, ${name}!`));
     } catch (error) {
          let errorMessage = "Sign-up failed. Please check your information and try again";
          if (error.code === "auth/email-already-in-use") {
               errorMessage = "The email address is already in use by another account. Please use a different email";
          }
          dispatch(signUpFailure(errorMessage));
     }
}

// Forgot Password
const forgotPassword = (email) => async (dispatch) => {
     try {
          // Send a password reset email
          await sendPasswordResetEmail(auth, email);

          // Dispatch a success action
          dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: 'Password reset email sent. Check your inbox.' });
     } catch (error) {
          // Dispatch a failure action
          dispatch({ type: FORGOT_PASSWORD_FAILURE, payload: `Password reset failed: ${error.message}` });
     }
};



// Export functions
export {
     loginWithEmailAndPassword,
     loginWithFacebook,
     loginWithGoogle,
     signUpNewUser
}