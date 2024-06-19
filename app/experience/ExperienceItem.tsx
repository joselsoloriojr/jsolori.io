import _ from 'lodash'

interface ExperienceItemProps {
  timePeriod: string;
  jobTitle: string;
  companyName: string;
  responsibilities: string[];
  technologiesUsed: string[];
}

const ExperienceItem = ({ timePeriod, jobTitle, companyName, responsibilities, technologiesUsed }: ExperienceItemProps) => (
  <li className="mb-10 ms-4">
    <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{timePeriod}</time>
    <h3 className="text-lg font-semibold text-white">{jobTitle}</h3>
    <h4 className="text-space-light-blue">{companyName}</h4>
    <ul className="list-disc pl-4 text-base font-normal text-gray-500 dark:text-gray-400">
      {responsibilities.map((responsibility, index) => (
        <li key={index}>{responsibility}</li>
      ))}
    </ul>
    <span key={0} className="font-rem text-cyan-200">
      {_.join(technologiesUsed, ' | ')}
    </span>
  </li>
)

export default ExperienceItem