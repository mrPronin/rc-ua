# TIME-SHEET RULES

We agreed to record time spent on a project according to the following rules:

- we provide information on the time spent on the project every week
- we provide the information in CSV format
- format of the CSV file on the time spent on the project is as follows: Date;Start;End;Description
- **Date** field must be in the format ddMMYYY (for example, 18.06.2023)
- **Start** and **End** fields indicate the start and end time of the work, respectively (for example, 09:24; 09:35, or 18:42; 19:09)
- **Description** field has the following format: [type]:[description of the work done]
- in the **Description** field, the **[type]** can take the following values:
  - docs - documentation creation
  - r&d - learning, experiments
  - build - working with the component infrastructure (for example, adding a library, linter setup, formatting)
  - feat - working on a feature
  - review - PR (pull request) review
  - devops - project infrastructure, CI/CD
  - meeting - participation in calls
