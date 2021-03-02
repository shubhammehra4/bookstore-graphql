import { gql } from "@apollo/client";

export const getAuthorsQuery = gql`
    {
        authors {
            id
            name
        }
    }
`;

export const getBooksQuery = gql`
    {
        books {
            id
            name
        }
    }
`;

export const addBookMutation = gql`
    mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            name
            id
        }
    }
`;

export const getBookQuery = gql`
    query getBook($id: ID!) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;
