import { connect } from "react-redux"

import ColumnNamesDisplay from "./ColumnNamesDisplay"
import { StoreState } from "../../types/spreadsheet"
import { getColumnNames } from "../../selectors/spreadsheet"

const mapStateToProps = (state: StoreState) => ({
  columnNames: getColumnNames(state),
})

const ColumnNamesContainer = connect(mapStateToProps)(ColumnNamesDisplay)

export default ColumnNamesContainer
