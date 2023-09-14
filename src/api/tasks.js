import { gql } from '@apollo/client';


export const CREATE_TASK = gql`
  mutation ($projectId: ID!, $title: String!) {
    createTask(projectId: $projectId, title: $title) {
      _id
      title
    }
  }
`

export const DELETE_TASK = gql`
  mutation ($id: ID!) {
    deleteTask(id: $id) {
      _id
      title
      createdAt
      updatedAt
    }
  }
`