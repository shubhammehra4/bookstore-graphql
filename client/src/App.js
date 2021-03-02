import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

// Apollo Setup
const client = new ApolloClient({
    uri: "http://localhost:4000/graphql?",
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <BookList />
                <AddBook />
            </div>
        </ApolloProvider>
    );
}

export default App;
