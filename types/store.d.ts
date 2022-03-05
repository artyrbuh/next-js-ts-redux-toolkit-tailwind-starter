import {
  Action,
  Dispatch,
  Middleware,
  ThunkAction,
} from '@reduxjs/toolkit';

import rootReducer from '../features';

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

export type AppMiddleware = Middleware<unknown, RootState, Dispatch<Action<string>>>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
