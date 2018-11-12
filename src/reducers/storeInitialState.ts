import { StoreState } from "../types/spreadsheet"

const storeInitialState: StoreState = {
  spreadsheet: {
    columnNames: [],
    numberOfColumns: 50,
    numberOfRows: 50,
    selectedCells: [],
    cells: [],
  },
}

export default storeInitialState
