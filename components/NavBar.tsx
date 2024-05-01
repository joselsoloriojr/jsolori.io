"use client"

import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { MdClose, MdOutlineMenu } from "react-icons/md"

import Container from "./Container"

const NavBar = () => {
  const router = useRouter()
  const pathName = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  if (pathName === "/") {
    return null
  }
  return (
    <nav>
      <Container className="flex-col justify-between font-rem text-space-blue sm:flex-row">
        <div className="flex min-w-full justify-between sm:min-w-0">
          <span className="animate-pulse cursor-pointer text-2xl font-bold hover:animate-none hover:text-space-light-blue" onClick={() => router.push("/")}>
            jsolorio
          </span>
          {
            isOpen ?
              <MdClose className="cursor-pointer text-2xl sm:hidden" onClick={() => setIsOpen(!isOpen)} /> :
              <MdOutlineMenu className="cursor-pointer text-2xl sm:hidden" onClick={() => setIsOpen(!isOpen)} />
          }
        </div>
        <ul className={`flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 ${isOpen ? "" : "hidden sm:flex"}`}>
          <li className="cursor-pointer transition-colors duration-500 hover:text-space-light-blue" onClick={() => router.push("/about")}>
            About
          </li>
          <li className="cursor-pointer transition-colors duration-500 hover:text-space-light-blue" onClick={() => router.push("/experience")}>
            Experience
          </li>
          <li className="cursor-pointer transition-colors duration-500 hover:text-space-light-blue" onClick={() => router.push("/contact")}>
            Contact
          </li>
        </ul>

      </Container>
    </nav>
  )
}

export default NavBar