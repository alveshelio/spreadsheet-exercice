import * as React from "react"

import styled from "../../templages/styled"
import CellItemContainer from "./CellItemContainer"
import { Cell } from "../../types/spreadsheet"

interface StateToProps {
  numberOfColumns: number
  numberOfRows: number
  cells: Cell[]
}

interface CellsContainerState {
  selected: boolean
}

type CellsContainerProps = StateToProps

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

class CellsContainer extends React.PureComponent<CellsContainerProps, CellsContainerState> {
  render() {
    const { numberOfColumns, cells } = this.props
    return (
      <CellsWrapper columns={numberOfColumns}>
        {cells.map(({ cellIndex, value }: Cell) => (
          <CellItemContainer key={cellIndex} cellIndex={cellIndex} value={value}>
            {value}
          </CellItemContainer>
        ))}
      </CellsWrapper>
    )
  }
}

export default CellsContainer
