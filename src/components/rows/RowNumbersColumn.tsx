import * as React from "react"

import styled from "../../templages/styled"

const RowNamesColumn = styled.div`
  display: grid;
  padding-top: 32px;
  border-top: ${({ theme }) => theme.border};
  border-left: ${({ theme }) => theme.border};
  grid-row-gap: 2px;
`
export default RowNamesColumn
