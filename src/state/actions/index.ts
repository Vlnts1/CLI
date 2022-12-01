import { ActionType } from '../action-types';
import { CellTypes } from '../cell';

export type Direction = 'up' | 'down';

export type MoveCellAction = {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: Direction;
  };
};

export type DeleteCellAction = {
  type: ActionType.DELETE_CELL;
  payload: string;
};

export type InsertCellBeforeAction = {
  type: ActionType.INSERT_CELL_BEFORE;
  payload: {
    id: string | null;
    type: CellTypes;
  };
};

export type UpdateCellAction = {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
};

export type Action = MoveCellAction | DeleteCellAction | InsertCellBeforeAction | UpdateCellAction;
