import { gql } from '@apollo/client';

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      _id, 
      name,
      description
    }
  }
`

const CREATE_PROJECT = gql`
  mutation ($name: String!, $description: String!) {
    createProject(name: $name, description: $description) {
      _id
      name
      description
    }
  }
`

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      _id
      name
      description
      createdAt
      updatedAt
      tasks {
        _id
        title
      }
    }
  }
`

export  {
  GET_PROJECTS,
  CREATE_PROJECT,
  GET_PROJECT
}