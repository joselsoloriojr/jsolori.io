import { ReactNode } from "react"

const Card = ({ children }: Readonly<{ children: ReactNode }>) => (
  <div className="flex flex-col space-y-4 rounded-md border border-space-blue p-4 shadow-md">
    {children}
  </div>
)

export default Card