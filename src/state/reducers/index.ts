import { combineReducers } from 'redux';
import { cellsReducer } from './cellsReducer';

export const reducers = combineReducers({
  cells: cellsReducer,
});

export type RootState = ReturnType<typeof reducers>;
