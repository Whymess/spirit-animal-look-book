import firebase from 'firebase';

const config = {
   apiKey: 'AIzaSyCH3LQRAc1pxUFSH4n2W2LUC3nO6AumztA',
    authDomain: 'spirit-animal-look-book-c92ea.firebaseapp.com',
    databaseURL: 'https://spirit-animal-look-book-c92ea.firebaseio.com',
    projectId: 'spirit-animal-look-book-c92ea',
    storageBucket: '',
    messagingSenderId: '446258458595'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
