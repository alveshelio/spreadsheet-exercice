import { connect } from "react-redux"

import ColumnNamesDisplay from "./ColumnNamesDisplay"
import { StoreState } from "../../types/spreadsheet"

const mapStateToProps = (state: StoreState) => ({
  columnNames: state.spreadsheet.columnNames,
})

const ColumnNamesContainer = connect(mapStateToProps)(ColumnNamesDisplay)

export default ColumnNamesContainer
