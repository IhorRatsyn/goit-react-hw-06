// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);
const persistedFiltersReducer = persistReducer(persistConfig, filtersReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: persistedFiltersReducer,
  },
});

export const persistor = persistStore(store);
