import { ReactNode } from "react"

const Container = ({ children, className = "" }: Readonly<{ children: ReactNode, className?: string }>) => (
  <div className={`container mx-auto flex px-10 py-4 ${className}`}>
    {children}
  </div>
)

export default Container