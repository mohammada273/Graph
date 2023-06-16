import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import RootReducer from "../features/shares/shareReducer";
import homeReducer from "../features/home/slice"

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = configureStore({
  reducer: {
    shareReducer: persistedReducer,
     home: homeReducer,
  },
  middleware: [sagaMiddleware],
});

export default function configureAppStore() {
  sagaMiddleware.run(rootSaga);
  return { store };
}


export let persistor = persistStore(store);
