import { SpreadSheetTypes } from "../constants/spreadsheet"

export interface Cell {
  col: string
  row: number
  value: string
}

export interface SpreadSheet {
  numberOfColumns: number
  numberOfRows: number
  selectedCells: Cell[]
  cells: Cell[]
  columnNames: string[]
}

export interface StoreState {
  spreadsheet: SpreadSheet
}

export interface BuildColumns {
  type: SpreadSheetTypes.BUILD_COLUMNS
  numberOfColumns: number
}

export interface SetColumns {
  type: SpreadSheetTypes.SET_COLUMNS
  columnNames: string[]
}

export interface BuildCells {
  type: SpreadSheetTypes.BUILD_CELLS
  numberOfColumns: number
  numberOfRows: number
  columnNames: string[]
}

export interface SetCells {
  type: SpreadSheetTypes.SET_CELLS
  cells: Cell[]
}

export interface SelectCell {
  type: SpreadSheetTypes.SELECT_CELL
}

export interface SetCellValue {
  type: SpreadSheetTypes.SET_CELL_VALUE
  col: string
  row: number
  value: string
}

export interface HandleCellUpdate {
  type: SpreadSheetTypes.HANDLE_CELL_UPDATE
  col: string
  row: number
}

export type SpreadsheetAllowedActions =
  | BuildColumns
  | SetColumns
  | BuildCells
  | SetCells
  | SelectCell
  | SetCellValue
  | HandleCellUpdate
