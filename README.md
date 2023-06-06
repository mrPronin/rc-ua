# Red-Cross Ukraine blood donation

Red-Cross blood donation platform for Ukraine

## ABOUT PROJECT

TODO

## ARCHITECTURE

![RC-UI-ARCHITECTURE](docs/rc-ua-architecture.drawio.svg)

<a href="http://jgraph.github.io/drawio-github/edit-diagram.html?repo=drawio-github&path=docs/rc-ua-architecture.drawio.svg" target="_blank">Edit</a> | <a href="https://app.diagrams.net/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fjgraph%2Fdrawio-github%2Fmaster%2Fdocs/rc-ua-architecture.drawio.svg" target="_blank">Edit As New</a> | <a href="https://app.diagrams.net/#Hjgraph%2Fdrawio-github%2Fmaster%2Fdocs/rc-ua-architecture.drawio.svg" target="_blank">Edit with draw.io</a>

## ASSUMPTIONS

- Repository. We will use the monorepo approach to organize the code base.
- Repository. We will use GitHub as a cloud-based Git repository hosting service. Please check [RC-UA](git@github.com:mrPronin/rc-ua.git) repository for details.
- Back-end. We will use Python as the programming language.
- Back-end. We will use [FastAPI](https://github.com/tiangolo/fastapi) as a web framework.
- Back-end. We will use [Prisma](https://www.prisma.io) as a database abstraction.
- Back-end. We will use GraphQL as an API interface and [Strawberry GraphQL](https://github.com/strawberry-graphql/strawberry).
- DB. We will use PostgreSQL as a database server.
- Content management. We will use [Strapi](https://docs.strapi.io) for content management - an open-source, Node.js based, Headless CMS.
- Front-end. We will use React as a framework to build user web-interface.
- Front-end. We will use TypeScript as the programming language.
- DevOps. We will use [CapRover](https://caprover.com) to deploy and manage platform.

## DOCUMENTATION

- [PROJECT SCOPE AND USER STORIES](docs/001-project-scope-user-stories.md)
- [USER ROLES](docs/002-user-roles.md)

## QUESTIONS

TODO

## TODO

- [x] Define platform architecture
- [x] Describe team
- [ ] Describe techstack
  - [ ] Back-end | API Server
  - [ ] Front-end | User web-app
  - [ ] Font-end | Strapi web-app
  - [ ] CMS
  - [ ] DevOps | Platform, hosting, CI&CD
- [ ] Define project scope
- [x] Define user stories
- [ ] Provide raw estimation
