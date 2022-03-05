import {
  PayloadAction,
} from "@reduxjs/toolkit";
import { AppMiddleware } from "../types/store";

type Action = PayloadAction<unknown, string>;

const loggerMiddleware: AppMiddleware = () => (next) => async (action: Action) => {
  console.log(action);

  return next(action);
}

export default loggerMiddleware;