import { connect } from "react-redux"

import InputDisplay from "./InputDisplay"
import { StoreState } from "../../types/spreadsheet"
import { getColumnNames, getNumberOfRows } from "../../selectors/spreadsheet"

const mapStateToProps = (state: StoreState, { col, row }: { col: string; row: number }) => ({
  columnNames: getColumnNames(state),
  numberOfRows: getNumberOfRows(state),
  col,
  row,
})

const InputContainer = connect(mapStateToProps)(InputDisplay)

export default InputContainer
