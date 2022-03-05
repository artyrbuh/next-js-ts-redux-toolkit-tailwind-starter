import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from './counter';
import { kanyeReducer } from './kanye';

export * from './kanye';
export * from './counter';

export const rootReducer = combineReducers({
  counter: counterReducer,
  kanyeQuote: kanyeReducer,
});
