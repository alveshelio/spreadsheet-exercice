import { connect } from "react-redux"

import CellDisplay from "./CellsDisplay"
import { StoreState } from "../../types/spreadsheet"

const mapStateToProps = (state: StoreState) => ({
  numberOfColumns: state.spreadsheet.numberOfColumns,
  numberOfRows: state.spreadsheet.numberOfRows,
  rows: state.spreadsheet.rows,
})

const CellsContainer = connect(mapStateToProps)(CellDisplay)

export default CellsContainer
