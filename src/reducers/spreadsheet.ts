import { SpreadSheetTypes } from "../constants/spreadsheet"

import storeInitialState from "./storeInitialState"
import { Cell, Row, SpreadSheet, SpreadsheetAllowedActions } from "../types/spreadsheet"

export default (
  state: SpreadSheet = storeInitialState.spreadsheet,
  action: SpreadsheetAllowedActions
) => {
  switch (action.type) {
    case SpreadSheetTypes.SET_COLUMNS:
      return { ...state, columnNames: action.columnNames }
    case SpreadSheetTypes.SET_ROWS:
      return { ...state, rows: action.rows }
    case SpreadSheetTypes.SET_CELL_VALUE:
      // @ts-ignore
      const rowToUpdate: Row[] = state.rows[action.cell.rowIndex]

      const rowUpdated = [
        ...rowToUpdate.slice(0, action.cell.cellIndex),
        action.cell,
        ...rowToUpdate.slice(action.cell.cellIndex + 1),
      ]

      return {
        ...state,
        rows: {
          ...state.rows,
          [action.cell.rowIndex]: rowUpdated,
        },
      }
    case SpreadSheetTypes.SET_SELECTED_CELLS:
      return { ...state, selectedCells: action.selectedCells }
    default:
      return state
  }
}
