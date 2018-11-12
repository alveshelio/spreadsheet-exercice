import { SpreadSheetTypes } from "../constants/spreadsheet"

export interface Cell {
  cellIndex: number
  value: string
}

export interface SpreadSheet {
  numberOfColumns: number
  numberOfRows: number
  selectedCells: number[]
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
}

export interface SetCells {
  type: SpreadSheetTypes.SET_CELLS
  cells: Cell[]
}

export interface SelectMultipleCells {
  type: SpreadSheetTypes.SELECT_MULTIPLE_CELLS
  firstCellIndex: number
  lastCellIndex: number
}

export interface SetSelectedCells {
  type: SpreadSheetTypes.SET_SELECTED_CELLS
  selectedCells: number[]
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
  selectedCells: number[]
}

export interface FetchWeather {
  type: SpreadSheetTypes.FETCH_WEATHER
  city: string
}

export type SpreadsheetAllowedActions =
  | BuildColumns
  | SetColumns
  | BuildCells
  | SetCells
  | SetMultipleCellsValue
  | SelectMultipleCells
  | SetSelectedCells
  | SetCellValue
