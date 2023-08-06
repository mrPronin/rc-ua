import { gql } from '@apollo/client';

export const GET_BLOOD_CENTERS = gql`
query GetBloodCenters($first: Int, $after: String, $last: Int, $before: String) {
  bloodDonationCenters(first: $first, after: $after, last: $last, before: $before) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          name
          category
          notes
  
          address {
            country
            region
            city
            postalCode
            street
            latitude
            longitude
          }
          contacts {
            cellPhone
            landlinePhone
            email
            website
          }
          workSchedule {
            weekDay
            startTimeBeforeLunchBreak
            endTimeBeforeLunchBreak
            startTimeAfterLunchBreak
            endTimeAfterLunchBreak
          }
          
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;