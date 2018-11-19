import { SpreadSheetTypes } from "../constants/spreadsheet"

export interface Cell {
  cellIndex: number
  rowIndex: number
  value: string
  selected: boolean
}

export interface Row {
  rowIndex: string
  cells: Cell[]
}

export interface SpreadSheet {
  numberOfColumns: number
  numberOfRows: number
  selectedCells: Cell[]
  rows: Row | null
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
}

export interface SetRows {
  type: SpreadSheetTypes.SET_ROWS
  rows: Row[]
}

export interface SelectMultipleCells {
  type: SpreadSheetTypes.SELECT_MULTIPLE_CELLS
  firstRowIndex: number
  firstCellIndex: number
  lastRowIndex: number
  lastCellIndex: number
}

export interface SetSelectedCells {
  type: SpreadSheetTypes.SET_SELECTED_CELLS
  selectedCells: Cell[]
}

export interface SetCellValue {
  type: SpreadSheetTypes.SET_CELL_VALUE
  cell: Cell
}

export interface SetMultipleCellsValue {
  type: SpreadSheetTypes.SET_MULTIPLE_CELLS
  cells: Cell[]
}

export interface DeleteMultipleCellsValue {
  type: SpreadSheetTypes.DELETE_MULTIPLE_CELLS_VALUE
  selectedCells: Cell[]
}

export interface FetchWeather {
  type: SpreadSheetTypes.FETCH_WEATHER
  city: string
}

export type SpreadsheetAllowedActions =
  | BuildColumns
  | SetColumns
  | BuildCells
  | SetRows
  | SetMultipleCellsValue
  | SelectMultipleCells
  | SetSelectedCells
  | SetCellValue
