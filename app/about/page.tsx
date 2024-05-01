import Link from "next/link"

import Button from "@/components/Button"
import Card from "@/components/Card"
import PageContainer from "@/components/PageContainer"

const About = () => (
  <PageContainer>
    <Card>
      <h2>About Me</h2>
      <p>
        As a Full Stack Software Engineer with over 4 years of experience, I&apos;ve had the opportunity to work on a variety of web development projects, honing my skills in both front-end and back-end technologies.
      </p>
      <p>
        One of my greatest strengths is my ability to rapidly learn and master new concepts. This, coupled with my talent for creative problem-solving, allows me to adapt to new technologies and frameworks with ease.
      </p>
      <p>
        I am deeply passionate about crafting high-quality software solutions. I strive to follow best practices in all my work, ensuring that the code I write is clean, efficient, and maintainable.
      </p>
      <p>
        Beyond my technical skills, I believe in the importance of empathy and community in the tech industry. I strive to foster a positive and inclusive team environment, and I am committed to continuous personal and professional growth.
      </p>
      <Link href="/experience" className="mt-2 animate-pulse">
        <Button>Go to my experience</Button>
      </Link>
    </Card>
  </PageContainer>
)

export default About