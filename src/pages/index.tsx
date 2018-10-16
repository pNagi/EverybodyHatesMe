import _ from 'lodash'
import React from 'react'

import { Header, ISection, Paper, Section } from '../components'
import { resumeData } from '../data'
import { PageLayout } from '../layouts'

class IndexPage extends React.PureComponent {
  public renderSections = (sections: { [key: string]: ISection }) =>
    _.map(sections, (section: ISection, key: string) => (
      <Section key={key} section={section} />
    ))

  public renderHeader = () => (
    <Header
      firstName={resumeData.firstName}
      lastName={resumeData.lastName}
      contacts={resumeData.contacts}
    />
  )

  public render() {
    return (
      <PageLayout>
        <Paper
          header={this.renderHeader()}
          primarySections={this.renderSections(resumeData.primarySections)}
          secondarySections={this.renderSections(resumeData.secondarySections)}
          otherSections={this.renderSections(resumeData.otherSections)}
        />
      </PageLayout>
    )
  }
}

export default IndexPage
