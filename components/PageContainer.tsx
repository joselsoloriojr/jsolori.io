import { ReactNode } from "react"

import Container from "./Container"

const PageContainer = ({ children, className = "" }: Readonly<{ children: ReactNode, className?: string }>) => (
  <Container className={`flex min-h-screen animate-fadeIn-1s flex-col ${className}`}>
    {children}
  </Container>
)

export default PageContainer