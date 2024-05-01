import { ReactNode } from "react"

const Row = ({ children, className = "" }: Readonly<{ children: ReactNode, className?: string }>) => (
  <div className={`flex flex-col space-y-2 ${className}`}>
    {children}
  </div>
)

export default Row
