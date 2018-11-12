import { connect } from "react-redux"

import CellDisplay from "./CellsDisplay"
import { StoreState } from "../../types/spreadsheet"
import { getCellsFromState, getNumberOfColumns, getNumberOfRows } from "../../selectors/spreadsheet"

const mapStateToProps = (state: StoreState) => ({
  numberOfColumns: getNumberOfColumns(state),
  numberOfRows: getNumberOfRows(state),
  cells: getCellsFromState(state),
})

const CellsContainer = connect(mapStateToProps)(CellDisplay)

export default CellsContainer
