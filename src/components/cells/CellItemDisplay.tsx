import * as React from "react"

import styled from "../../templages/styled"
import Input from "../input/InputContainer"
import { Cell } from "../../types/spreadsheet"

const StyledCellItem = styled.div<{ selected: boolean }>`
  background: ${({ theme }) => theme.cellBG};
  padding: 0 1px;
  display: flex;
  align-items: center;
  border: ${props => (props.selected ? "1px dashed blue" : "none")};
`

interface OwnProps {
  rowIndex: number
  cellIndex: number
  value: string
  selected: boolean
}

interface StateToProps {
  selectedCells: Cell[]
}

interface DispatchToProps {
  setSelectedCells: (selectedCells: Cell[]) => void
  setCellValue: (cell: Cell) => void
  selectMultipleCells: (
    firstRowIndex: number,
    firstCellIndex: number,
    lastRowIndex: number,
    lastCellIndex: number
  ) => void
}

type CellItemProps = OwnProps & DispatchToProps & StateToProps

class CellItem extends React.Component<CellItemProps> {
  shouldComponentUpdate(nextProps: OwnProps) {
    const { selected, value } = this.props
    return selected !== nextProps.selected || value !== nextProps.value
  }

  handleSelectCell = (e: any) => {
    const { rowIndex, cellIndex, value } = this.props

    const selectedCellRowIndex = this.props.selectedCells.length
      ? this.props.selectedCells[0].rowIndex
      : rowIndex

    const selectedCellCellIndex = this.props.selectedCells.length
      ? this.props.selectedCells[0].cellIndex
      : cellIndex

    if (e.shiftKey) {
      if (this.props.selectedCells.length) {
        this.props.selectMultipleCells(
          this.props.selectedCells[0].rowIndex,
          this.props.selectedCells[0].cellIndex,
          rowIndex,
          cellIndex
        )
      } else {
        this.props.setCellValue({ rowIndex, cellIndex, value, selected: true })
      }
    } else {
      this.props.setCellValue({
        rowIndex: selectedCellRowIndex,
        cellIndex: selectedCellCellIndex,
        value,
        selected: false,
      })

      this.props.setSelectedCells([{ rowIndex, cellIndex, value: "", selected: true }])
      this.props.setCellValue({ rowIndex, cellIndex, value, selected: true })
    }
  }

  onBlurHandler = () => {
    console.log("will set")
  }

  render() {
    const { rowIndex, cellIndex, selected, value } = this.props
    return (
      <StyledCellItem
        onClick={this.handleSelectCell}
        onBlur={this.onBlurHandler}
        selected={selected}
      >
        <Input rowIndex={rowIndex} cellIndex={cellIndex} selected={selected} value={value} />
      </StyledCellItem>
    )
  }
}
export default CellItem
