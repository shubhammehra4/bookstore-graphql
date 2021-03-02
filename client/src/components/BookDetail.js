import React from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

function BookDetail({ id }) {
    const { loading, data, error } = useQuery(getBookQuery, {
        variables: { id: id || 0 },
    });
    if (loading) return <div id="book-details"></div>;
    if (error)
        return (
            <div id="book-details">
                <h2>No Book Selected</h2>
            </div>
        );

    return (
        <div id="book-details">
            <div>
                <h2>{data.book.name}</h2>
                <p>Genre: {data.book.genre}</p>
                <p>Author: {data.book.author.name}</p>
                <p>All the books by this author</p>
                <ul className="other-books">
                    {data.book.author.books.map((b) => (
                        <li key={b.id}>{b.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default BookDetail;
