import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
apiKey: "AIzaSyBGmwteWIAIySasqsc_3eISDqjh-9kqnKk",
authDomain: "proyecto-final.firebaseapp.com",
projectId: "proyecto-final",
storageBucket: "proyecto-final.appspot.com"

};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
