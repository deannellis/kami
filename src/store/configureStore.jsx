import { createStore, combineReducers } from "redux";

import { saveState, loadState } from "./localStorage";
import themeReducer from "../reducers/themeReducer";

export default () => {
  const persistedState = loadState();
  const store = createStore(
    combineReducers({
      theme: themeReducer,
    }),
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => {
    console.log("updates saved to store");
    saveState(store.getState());
  });

  return store;
};
