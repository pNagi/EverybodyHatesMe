import _ from "lodash"
import React from "react"

import { data, Styles, Header, ISection, Paper, Section } from "../xn-resume"
import { PageLayout } from "../layouts"

class ResumePage extends React.PureComponent {
  public renderSections = (sections: { [key: string]: ISection }) =>
    _.map(sections, (section: ISection, key: string) => (
      <Section key={key} section={section} />
    ))

  public render() {
    return (
      <PageLayout>
        <Styles />
        <Paper
          header={
            <Header
              firstName={data.firstName}
              lastName={data.lastName}
              contacts={data.contacts}
            />
          }
          primarySections={this.renderSections(data.primarySections)}
          secondarySections={this.renderSections(data.secondarySections)}
          otherSections={this.renderSections(data.otherSections)}
        />
      </PageLayout>
    )
  }
}

export default ResumePage
