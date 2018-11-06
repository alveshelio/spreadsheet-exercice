import * as React from "react"

import styled from "../../templages/styled"

const CellItem = styled.div`
  background: ${({ theme }) => theme.cellBG};
  padding: 0 5px;
  display: flex;
  align-items: center;
`

export default CellItem
