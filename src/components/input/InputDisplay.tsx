import * as React from "react"

import styled from "../../templages/styled"
import { SpreadsheetActions } from "../../actions/spreadsheetActions"
import { Cell } from "../../types/spreadsheet"

const StyledInput = styled.input`
  border: none;
  width: 100%;
  background: ${({ theme }) => theme.bgColor};
  line-height: 25px;
  font-size: 20px;
  &:focus {
    outline-width: 0;
  }
`

interface StateToProps {
  columnNames: string[]
  numberOfRows: number
}

interface DispatchToProps {
  setCellValue: (cell: Cell) => void
  fetchWeather: (city: string) => void
}

interface OwnProps {
  cellIndex: number
  value: string
}

interface OwnState {
  value: any
}

type InputProps = StateToProps & DispatchToProps & OwnProps
class Input extends React.Component<InputProps, OwnState> {
  state = {
    value: "",
  }

  componentDidMount() {
    this.setState(() => ({ value: this.props.value }))
  }

  componentWillReceiveProps(nextProps: OwnProps) {
    if (this.props.value !== nextProps.value) {
      this.setState(() => ({ value: nextProps.value }))
    }
  }

  onChangeHandler = (e: any) => {
    const { value } = e.target
    this.setState(() => ({ value }))
  }

  onKeyPressHandler = (e: any) => {
    const { value } = e.target
    if (e.key === "Enter" && value !== "") {
      this.props.setCellValue({ cellIndex: this.props.cellIndex, value })
      if (this.props.cellIndex === 1 && value !== "") {
        this.props.fetchWeather(value)
      }
    }
  }

  render() {
    const { cellIndex } = this.props
    const { value } = this.state

    return (
      <StyledInput
        type="text"
        value={value}
        data-cell-index={cellIndex}
        onChange={this.onChangeHandler}
        onKeyPress={this.onKeyPressHandler}
      />
    )
  }
}

export default Input
