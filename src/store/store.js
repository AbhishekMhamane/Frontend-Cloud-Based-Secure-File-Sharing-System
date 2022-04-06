import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from './userSlice';
import filesSlice from './filesSlice';

const rootReducer = combineReducers({
    user : userSlice.reducer,
    files : filesSlice.reducer,
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage ,
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

const persistor = persistStore(store)

export {store,persistor};