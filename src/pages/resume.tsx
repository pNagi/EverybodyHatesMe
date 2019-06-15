import _ from "lodash"
import React from "react"

import { data, Header, ISection, Paper, Section } from "../xn-resume"
import { PageLayout } from "../layouts"

class ResumePage extends React.PureComponent {
  public renderSections = (sections: { [key: string]: ISection }) =>
    _.map(sections, (section: ISection, key: string) => (
      <Section key={key} section={section} />
    ))

  public renderHeader = () => (
    <Header
      firstName={data.firstName}
      lastName={data.lastName}
      contacts={data.contacts}
    />
  )

  public render() {
    return (
      <PageLayout>
        <Paper
          header={this.renderHeader()}
          primarySections={this.renderSections(data.primarySections)}
          secondarySections={this.renderSections(data.secondarySections)}
          otherSections={this.renderSections(data.otherSections)}
        />
      </PageLayout>
    )
  }
}

export default ResumePage
