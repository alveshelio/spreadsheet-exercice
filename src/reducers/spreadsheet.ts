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
    case SpreadSheetTypes.SET_CELL_VALUE:
      return {
        ...state,
        cells: [
          ...state.cells.slice(0, action.cell.cellIndex),
          { ...action.cell },
          ...state.cells.slice(action.cell.cellIndex + 1),
        ],
      }
    case SpreadSheetTypes.SET_MULTIPLE_CELLS:
      const firstCellIndex = action.cells[0].cellIndex
      const lastCellIndex = action.cells[action.cells.length - 1].cellIndex
      return {
        ...state,
        cells: [
          ...state.cells.slice(0, firstCellIndex),
          ...action.cells,
          ...state.cells.slice(lastCellIndex + action.cells.length),
        ],
      }
    case SpreadSheetTypes.SET_SELECTED_CELLS:
      return { ...state, selectedCells: action.selectedCells }
    default:
      return state
  }
}
