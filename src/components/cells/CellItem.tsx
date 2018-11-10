import * as React from "react"

import styled from "../../templages/styled"
import Input from "../input/InputContainer"

const StyledCellItem = styled.div`
  background: ${({ theme }) => theme.cellBG};
  padding: 0 5px;
  display: flex;
  align-items: center;
`

interface OwnProps {
  col: string
  row: number
  value: string
}

const CellItem: React.SFC<OwnProps> = ({ col, row }) => (
  <StyledCellItem>
    <Input col={col} row={row} />
  </StyledCellItem>
)
export default CellItem
