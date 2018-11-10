import * as React from "react"

import styled from "../../templages/styled"
import { SpreadsheetActions } from "../../actions/spreadsheetActions"

const StyledInput = styled.input`
  border: none;
  width: 100%;
  background: ${({ theme }) => theme.bgColor};
  line-height: 25px;
  font-size: 20px;
`

interface StateToProps {
  columnNames: string[]
  numberOfRows: number
}

interface OwnProps {
  col: string
  row: number
}

interface OwnState {
  value: any
}

type InputProps = StateToProps & OwnProps
class Input extends React.Component<InputProps, OwnState> {
  state = {
    value: "",
  }

  onChangeHandler = (e: any) => {
    const { value } = e.target
    this.setState(() => ({ value }))
  }

  onKeyPressHandler = (e: any) => {
    const { value } = e.target
    const { col, row } = e.target.dataset
    if (e.key === "Enter") {
      SpreadsheetActions.isValidCell(
        this.props.columnNames,
        this.props.numberOfRows,
        value,
        col,
        row
      )
    }
  }

  onClickHandler = (e: any) => {
    console.log("clicked in input col", e.target.dataset.col)
    console.log("clicked in input row", e.target.dataset.row)
  }

  onBlurHandler = (e: any) => {
    console.log("clicked in input col", e.target.dataset.col)
  }

  render() {
    const { col, row } = this.props
    const { value } = this.state

    return (
      <StyledInput
        type="text"
        value={value}
        data-col={col}
        data-row={row}
        onChange={this.onChangeHandler}
        onClick={this.onClickHandler}
        onBlur={this.onBlurHandler}
        onKeyPress={this.onKeyPressHandler}
      />
    )
  }
}

export default Input
