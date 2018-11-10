import * as React from "react"

import styled from "../../templages/styled"
import CellItem from "./CellItem"
import { Cell } from "../../types/spreadsheet"

interface StateToProps {
  numberOfColumns: number
  numberOfRows: number
  cells: Cell[]
}

interface DispatchToProps {
  selectCell: () => React.MouseEvent<HTMLInputElement>
}

type CellsContainerProps = StateToProps & DispatchToProps

const CellsWrapper = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 100px);
  grid-auto-rows: 30px;
  grid-gap: 2px;
  border-right: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
  border-left: ${({ theme }) => theme.border};
  max-height: calc(100vh - 60px);
`

class CellsContainer extends React.PureComponent<CellsContainerProps> {
  render() {
    const { numberOfColumns, cells } = this.props
    return (
      <CellsWrapper columns={numberOfColumns}>
        {cells.map(({ col, row, value }: Cell) => (
          <CellItem key={`${row}-${col}`} col={col} row={row} value={value}>
            {value}
          </CellItem>
        ))}
      </CellsWrapper>
    )
  }
}

export default CellsContainer
