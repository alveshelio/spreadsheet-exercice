import { StoreState } from "../types/spreadsheet"

const storeInitialState: StoreState = {
  spreadsheet: {
    columnNames: [],
    numberOfColumns: 50,
    numberOfRows: 50,
    selectedCells: [],
    rows: null,
  },
}

export default storeInitialState
