import React from 'react'
import { FaGithub, FaRegEnvelope } from 'react-icons/fa'
import { GoBrowser } from 'react-icons/go'
import { IContact, ISection } from '../components'

interface IResumeData {
  firstName: string
  lastName: string
  contacts: { [key: string]: IContact }
  primarySections: { [key: string]: ISection }
  secondarySections: { [key: string]: ISection }
  otherSections: { [key: string]: ISection }
}

export const resumeData: IResumeData = {
  firstName: 'Chonnipa',
  lastName: 'Kittisiriprasert',
  contacts: {
    email: { IconComponent: FaRegEnvelope, text: 'chonnipa.kit@gmail.com' },
    github: { IconComponent: FaGithub, text: 'github.com/pnagi' },
    website: { IconComponent: GoBrowser, text: 'pnagi.github.io' }
  },
  primarySections: {
    aboutMe: {
      title: 'About Me',
      description:
        'Creative software engineer passionate in developing functional and beautiful inside out software. Eager to lean new things and love listening to music.'
    },
    education: {
      title: 'Education',
      description: (
        <React.Fragment>
          <div>2013 - 2017</div>
          <strong>Kasetsart University</strong>
          <div>B.Eng. Software & Knowledge Engineering</div>
        </React.Fragment>
      ),
      projects: {
        final: {
          title: 'Senior Project: "Interact"',
          description:
            "Developed an UX analytic system, where user can track, experiment and visualize the usage of user's website real-time.",
          github: 'https://github.com/TheInteract',
          tags: [
            'javascript',
            'react',
            'stylus',
            'd3',
            'node.js',
            'graphql',
            'apollo',
            'mongodb',
            'docker',
            'kubernetes',
            'google cloud platform'
          ]
        }
      }
    }
  },
  secondarySections: {
    experiences: {
      title: 'Experiences',
      jobs: {
        twFullTime: {
          position: 'Software Engineer',
          at: 'Taskworld',
          from: 'June 2017',
          to: 'Present',
          link: 'https://taskworld.com',
          description:
            'Maintained a task management software, improved existed features, added features, and reduced technical debt.',
          projects: {
            search: {
              title: 'Dedicate search page & New design of global search',
              description: '',
              tags: ['+', 'elasticsearch', 'mustache']
            },
            elasticsearch: {
              title: 'Migrated Elasticsearch v2.4 to v6.2 (Breaking changes)',
              description: '',
              tags: ['+', 'elasticsearch', 'mustache']
            },
            kubernetes: {
              title: 'Kubernetes POC',
              description: '',
              tags: [
                '+',
                'docker',
                'kubernetes',
                'kops',
                'helm',
                'aws',
                'circleci'
              ]
            }
          },
          tags: ['typescript', 'react', 'redux', 'node.js', 'mongodb']
        },
        twPartTime: {
          position: 'Part-time Software Engineer',
          at: 'Taskworld',
          from: 'January 2017',
          to: 'May 2017',
          link: 'https://taskworld.com',
          description:
            'Maintained a task management software and participated in features development.',
          tags: ['javascript', 'react', 'redux', 'node.js', 'mongodb']
        },
        twIntern: {
          position: 'Software Engineer Intern',
          at: 'Taskworld',
          from: 'August 2016',
          to: 'December 2016',
          link: 'https://taskworld.com',
          description:
            'Maintained a task management software and added features.',
          projects: {
            background: {
              title: 'Background Selection',
              link:
                'https://medium.com/taskworld-blog/feast-your-eyes-on-taskworlds-stunning-new-look-66138eb208e'
            },
            chatHeads: {
              title: 'Chat Heads (Frontend)',
              link:
                'https://medium.com/taskworld-blog/message-without-switching-tabs-with-chat-heads-d4b30051b2b4'
            },
            navBars: {
              title: 'New Design Navigation Bars',
              link:
                'https://medium.com/taskworld-blog/feast-your-eyes-on-taskworlds-stunning-new-look-66138eb208e'
            }
          },
          tags: ['javascript', 'react', 'redux', 'node.js', 'mongodb']
        },
        kitLabIntern: {
          position: 'Software Engineer Lab Intern',
          at: 'Kyoto Institute of Technology',
          from: 'June 2016',
          to: 'August 2016',
          link: 'https://www.kit.ac.jp/en/',
          description:
            'Joined `Software Engineer` lab and developed GitQuest, a gamify git visualization website.',
          projects: {
            gitQuest: {
              title: 'GitQuest',
              github: 'https://github.com/pnagi/GitQuest',
              tags: ['javascript', 'react', 'create.js']
            }
          }
        },
        wnIntern: {
          position: 'Software Engineer Intern',
          at: 'Wongnai Media',
          from: 'June 2015',
          to: 'July 2015',
          link: 'https://www.wongnai.com/',
          description:
            'Developed internal tools, joined core team and maintained core product.',
          tags: [
            'shell script',
            'imagemagick',
            'backbone',
            'google maps api',
            'less',
            'java',
            'spring mvc'
          ]
        }
      }
    }
  },
  otherSections: {
    contribution: {
      title: 'Contribution',
      projects: {
        reactBkk: {
          title: 'React Bangkok 3.0.0',
          description:
            'Volunteered to design and cooperated in frontend site development.',
          github: 'https://github.com/reactbkk/3.0.0',
          tags: ['javascript', 'react', 'emotion']
        }
      }
    },
    activities: {
      title: 'Activities',
      projects: {
        pizza: {
          title: 'Pizza Hackathon 2018',
          description: 'Joined and won 1st prize as part of Gitthereum team.',
          link:
            'https://medium.com/@peawyoyoyin/gitthereum-transforming-git-into-a-working-blockchain-538df6617ac6',
          github: 'https://github.com/gitthereum',
          tags: ['git', 'javascript', 'blockchain']
        },
        barcamp: {
          title: 'Barcamp Bangkhen 2015',
          description:
            'Volunteered to lead the event, set up design concept, done design stuff and cooperated in website development.',
          link: 'http://2015.barcampbangkhen.org',
          github: 'https://github.com/chinclubi/bcbk-frontend',
          tags: ['javascript', 'angular', 'css']
        }
      }
    }
  }
}
