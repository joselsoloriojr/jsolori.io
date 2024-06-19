import Card from "@/components/Card"
import PageContainer from "@/components/PageContainer"

import contactInfo from "./contactInfo"

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
                {info.isLink ? (
                  <a href={info.link}>{info.linkText}</a>
                ) : (
                  info.value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </PageContainer>
)

export default Contact