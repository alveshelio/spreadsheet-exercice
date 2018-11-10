import { Cell, StoreState } from "../types/spreadsheet"

export const getNumberOfColumns = (state: StoreState): number => state.spreadsheet.numberOfColumns

export const getNumberOfRows = (state: StoreState): number => state.spreadsheet.numberOfRows

export const getColumnNames = (state: StoreState): string[] => state.spreadsheet.columnNames

export const getCellsFromState = (state: StoreState): Cell[] => state.spreadsheet.cells

export const getCellValue = (state: StoreState, col: string, row: number) => {
  state.spreadsheet.cells.filter(cell => cell.col === col && cell.row === row)
}
