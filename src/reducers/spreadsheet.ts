import { SpreadSheetTypes } from "../constants/spreadsheet"

import storeInitialState from "./storeInitialState"
import { SpreadSheet, SpreadsheetAllowedActions } from "../types/spreadsheet"

export default (
  state: SpreadSheet = storeInitialState.spreadsheet,
  action: SpreadsheetAllowedActions
) => {
  switch (action.type) {
    case SpreadSheetTypes.SET_COLUMNS:
      return { ...state, columnNames: action.columnNames }
    case SpreadSheetTypes.SET_CELLS:
      return { ...state, cells: action.cells }
    case SpreadSheetTypes.SELECT_CELL:
      return { ...state }
    default:
      return state
  }
}
