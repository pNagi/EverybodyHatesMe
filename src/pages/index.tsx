import _ from 'lodash'
import React from 'react'

import { ISection, Paper, Section } from '../components'
import { IContact, resumeData } from '../data'
import { PageLayout } from '../layouts'

class IndexPage extends React.PureComponent {
  public renderSections = (sections: { [key: string]: ISection }) =>
    _.map(sections, (section: ISection, key: string) => (
      <Section key={key} section={section} />
    ))

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
          primarySections={this.renderSections(resumeData.primarySections)}
          secondarySections={this.renderSections(resumeData.secondarySections)}
          otherSections={this.renderSections(resumeData.sections)}
        />
      </PageLayout>
    )
  }
}

export default IndexPage
