import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Home from "./Components/Home/Home";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import firebase from "firebase/compat/app";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from "redux-firestore";
import rootReducer from "./Components/store/Reducer/rootReducer";
import firebaseConfig from "./Config/fbconfig";
import Favorites from "./Components/Home/Favorites";
import NoteDetails from "./Components/Home/NoteDetails";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebaseConfig)
  )
);

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function App() {
  return (
    <div>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/note/:id" component={NoteDetails} />
            </Switch>
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    </div>
  );
}

export default App;
