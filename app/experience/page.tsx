import Card from '@/components/Card'
import PageContainer from '@/components/PageContainer'

import experienceData from './experienceData.json'
import ExperienceItem from './ExperienceItem'

const Experience = () => (
  <PageContainer>
    <Card>
      <h2>Experience</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experienceData.map((job, index) => <ExperienceItem key={index} {...job} />)}
      </ol>
    </Card>
  </PageContainer>
)

export default Experience