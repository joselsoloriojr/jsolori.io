import { ReactNode } from "react"

const Row = ({ children, className = "" }: Readonly<{ children: ReactNode, className?: string }>) => (
  <div className={`flex ${className}`}>
    {children}
  </div>
)

export default Row
