import { configureStore } from "@reduxjs/toolkit";
import { contactSliceReducers } from "./contactsSlice/contactsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

export const persisConfig = {
  key: "contacts",
  storage,
};

export const persistContactsReducer = persistReducer(
  persisConfig,
  contactSliceReducers
);

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
