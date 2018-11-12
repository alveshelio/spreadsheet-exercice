import * as React from "react"

import styled from "../../templages/styled"
import Input from "../input/InputContainer"

const StyledCellItem = styled.div<{ selected: boolean }>`
  background: ${({ theme }) => theme.cellBG};
  padding: 0 5px;
  display: flex;
  align-items: center;
  border: ${props => (props.selected ? "1px dashed blue" : "none")};
`

interface OwnProps {
  cellIndex: number
  value: string
}

interface StateToProps {
  selectedCells: number[]
}

interface DispatchToProps {
  setSelectedCells: (selectedCells: number[]) => void
  selectMultipleCells: (firstCellIndex: number, lastCellIndex: number) => void
}

type CellItemProps = OwnProps & DispatchToProps & StateToProps

class CellItem extends React.Component<CellItemProps> {
  handleSelectCell = (e: any) => {
    if (e.shiftKey) {
      this.props.selectMultipleCells(
        this.props.selectedCells[0],
        parseInt(e.target.dataset.cellIndex, 10)
      )
    } else {
      this.props.setSelectedCells([parseInt(e.target.dataset.cellIndex, 10)])
    }
  }

  render() {
    const { cellIndex, value, selectedCells } = this.props

    return (
      <StyledCellItem onClick={this.handleSelectCell} selected={selectedCells.includes(cellIndex)}>
        <Input cellIndex={cellIndex} value={value} />
      </StyledCellItem>
    )
  }
}
export default CellItem
