import * as React from "react"
import { ThemeProvider } from "emotion-theming"

import "./globalStyles"
import styled from "./styled"

export const theme = {
  primary: "rgba(255,255,255,.65)",
  reversedPrimary: "#2A2A2A",
  cellBG: "#FAFAFA",
  bgColor: "#fff",
  columnWidth: "150px",
  rowHeight: "30px",
  border: "2px solid #E7E7E7",
}

interface Props {
  children: React.ReactNode
}

const MainLayout = styled.div`
  background: ${theme.bgColor};
`

const MainTemplate: React.SFC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MainLayout>{children}</MainLayout>
  </ThemeProvider>
)

export default MainTemplate
