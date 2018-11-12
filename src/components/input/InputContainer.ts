import { connect } from "react-redux"

import InputDisplay from "./InputDisplay"
import { Cell, StoreState } from "../../types/spreadsheet"
import { getColumnNames, getNumberOfRows } from "../../selectors/spreadsheet"
import { Dispatch } from "redux"
import { SpreadsheetActions } from "../../actions/spreadsheetActions"

const mapStateToProps = (state: StoreState, ownProps: Cell) => ({
  columnNames: getColumnNames(state),
  numberOfRows: getNumberOfRows(state),
  cellIndex: ownProps.cellIndex,
  value: ownProps.value,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCellValue(cell: Cell) {
    dispatch(SpreadsheetActions.setCellValue(cell))
  },
  fetchWeather(city: string) {
    dispatch(SpreadsheetActions.fetchWeather(city))
  },
})

const InputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputDisplay)

export default InputContainer
