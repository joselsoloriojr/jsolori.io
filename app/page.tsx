"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

import profilePic from "@/assets/profile.jpg"
import Button from "@/components/Button"
import Container from "@/components/Container"

const Home = () => {
  const router = useRouter()
  return (
    <Container className="flex min-h-screen animate-fadeIn-1s flex-col-reverse items-center justify-center sm:flex-row sm:space-x-4">
      <div className="animate-fadeIn-2s">
        <h2 className="m-0 border-none text-2xl font-bold text-space-white"> Hello, I am</h2>
        <h1 className="m-0 animate-pulse">Jose Solorio</h1>
        <span className="animate-fadeIn-3s text-2xl text-space-light-gray">Full-Stack Software Engineer</span>
        <div className="mt-4 flex space-x-4">
          <Button onClick={() => router.push("/about")}>About</Button>
          <Button onClick={() => router.push("/experience")}>Experience</Button>
          <Button onClick={() => router.push("/contact")}>Contact</Button>
        </div>
      </div>
      <Image src={profilePic} alt="Jose Solorio" width={150} height={150} className="mx-auto my-8 animate-fadeIn-2s rounded-full sm:my-auto" />
    </Container>
  )
}

export default Home