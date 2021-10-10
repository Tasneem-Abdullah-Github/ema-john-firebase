import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
};

export default initializeAuthentication;

/*

Step -1: Initial Setup
1. Create Project in Firebase
2. Create Web App
3. Get Configuration
4. Initialize Firebase
5. Enable Auth Method

Step-2: 
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register

Step-3:
1. Set up sign in method
2. Set up sign out method
3. User State
4. Special Observer
5. Return Necessary methods and states from Firebase

Step-4:
1. Create a auth context
2. Create Context Provider
3. Set Context Provider Context Value
4. Use Auth Provider
5. Create useAuth Hook

*/