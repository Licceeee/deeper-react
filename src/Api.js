import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://deeper-api.tornode.org/graphql/',
    cache: new InMemoryCache(),
    fetchOptions: {
    mode: 'no-cors',
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


export { client, CATEGORIES };
