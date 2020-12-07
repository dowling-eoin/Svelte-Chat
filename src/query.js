import gql from "graphql-tag";

export const GET_COMMENTS = gql`
  {
  allComments {
    name
    text
    avatar
    date
  }
  }
`;