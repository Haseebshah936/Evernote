import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducer/rootReducer";
import firebase from "firebase/compat/app";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from "redux-firestore";
import { firebaseConfig } from "../../Config/fbconfig";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  ),
  reduxFirestore(firebaseConfig)
);

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
