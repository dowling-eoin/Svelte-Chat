import gql from "graphql-tag";

export const GET_COMMENTS = gql`
  {
  allComments {
    id
    name
    text
    avatar
    date
  }
  }
`;