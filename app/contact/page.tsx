import Card from "@/components/Card"
import PageContainer from "@/components/PageContainer"

import contactInfo from "./contactInfo.json"

const Contact = () => (
  <PageContainer>
    <Card>
      <h2>Contact</h2>
      <table>
        <tbody>
          {contactInfo.map((info, index) => (
            <tr key={index}>
              <td className="text-space-blue">{info.label}</td>
              <td>
                {info.isLink ? <a href={info.link}>{info.value}</a> : info.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </PageContainer>
)

export default Contact