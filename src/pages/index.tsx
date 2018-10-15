import _ from 'lodash'
import React from 'react'

import { ISection, Paper, Section } from '../components'
import { IContact, resumeData } from '../data'
import { PageLayout } from '../layouts'

class IndexPage extends React.PureComponent {
  public renderSections = (
    sections: { [key: string]: ISection },
    options: { right?: boolean }
  ) =>
    _.map(
      sections,
      (section: ISection, key: string) =>
        !!section.right === options.right ? (
          <Section key={key} section={section} />
        ) : null
    )

  public renderHeader = () => (
    <React.Fragment>
      <h1>{resumeData.firstName}</h1>
      <h2>{resumeData.lastName}</h2>
      {_.map(
        resumeData.contacts,
        ({ IconComponent, text }: IContact, key: string) => (
          <h5 key={key}>
            {/* letter-spacing: 10px */}
            <IconComponent /> {text}
          </h5>
        )
      )}
    </React.Fragment>
  )

  public render() {
    return (
      <PageLayout>
        <Paper
          header={this.renderHeader()}
          leftColumn={this.renderSections(resumeData.sections, {
            right: false
          })}
          rightColumn={this.renderSections(resumeData.sections, {
            right: true
          })}
        />
      </PageLayout>
    )
  }
}

export default IndexPage
