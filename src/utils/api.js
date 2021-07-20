import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";
import apiUrl from "./apiUrl";

const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: "no-cors",
  },
});

const CATEGORIES = gql`
  query {
    categories {
      id
      name
      description
      iconWeb
      questionSet {
        id
        content
      }
    }
  }
`;

const CATEGORY = gql`
  query GetCat($id: Int!) {
    categoryById(id: $id) {
      name
      description
      iconMobile
      iconPackageNameMobile
      questionSet {
        content
      }
    }
  }
`;

export { client, CATEGORIES, CATEGORY };
