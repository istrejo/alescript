import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA7DDGR-8dmwZhcqagSCJsYc_JmCC5MPeE',
	authDomain: 'alescript-a17dd.firebaseapp.com',
	projectId: 'alescript-a17dd',
	storageBucket: 'alescript-a17dd.appspot.com',
	messagingSenderId: '1048793300006',
	appId: '1:1048793300006:web:6354284e05bfdc5e3cfae7',
	measurementId: 'G-CM0GWX8HER',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
