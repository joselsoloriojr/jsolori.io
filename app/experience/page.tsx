import Card from "@/components/Card"
import PageContainer from "@/components/PageContainer"

const Experience = () => (
  <PageContainer>
    <Card>
      <h2>Experience</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2023 - Present</time>
          <h3 className="text-lg font-semibold text-white">Senior Tools & Automation Engineer</h3>
          <h4 className="text-space-light-blue">Light & Wonder</h4>
          <ul className="list-disc pl-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <li>Lead the development of a new suite of tools and automation scripts to streamline the development process</li>
            <li>Collaborate with cross-functional teams to identify opportunities for process improvement</li>
            <li>Implement best practices for code quality, testing, and deployment</li>
          </ul>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
          <h3 className="text-lg font-semibold text-white">Tools & Automation Engineer</h3>
          <h4 className="text-space-light-blue">Light & Wonder</h4>
          <ul className="list-disc pl-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <li>Lead the development of a new suite of tools and automation scripts to streamline the development process</li>
            <li>Collaborate with cross-functional teams to identify opportunities for process improvement</li>
            <li>Implement best practices for code quality, testing, and deployment</li>
          </ul>
        </li>
        <li className="ms-4">
          <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
          <h3 className="text-lg font-semibold text-white">Associate SQA Engineer</h3>
          <h4 className="text-space-light-blue">Light & Wonder</h4>
          <ul className="list-disc pl-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <li>Lead the development of a new suite of tools and automation scripts to streamline the development process</li>
            <li>Collaborate with cross-functional teams to identify opportunities for process improvement</li>
            <li>Implement best practices for code quality, testing, and deployment</li>
          </ul>
        </li>
      </ol>
    </Card>
  </PageContainer>
)

export default Experience