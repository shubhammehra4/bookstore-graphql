import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetail from "./BookDetail";

function BookList() {
    const { loading, data, error } = useQuery(getBooksQuery);
    const [id, setId] = useState();

    if (loading)
        return (
            <div>
                <h1>Loading....</h1>
                <ul id="book-list"></ul>
            </div>
        );
    if (error)
        return (
            <div>
                <h1>Oops! something went wrong....</h1>
                <ul id="book-list"></ul>
            </div>
        );

    const getDetails = (e) => {
        setId(e.target.getAttribute("book-id"));
    };

    return (
        <div>
            <ul id="book-list">
                {data.books.map((b) => (
                    <li
                        tabIndex="0"
                        key={b.id}
                        book-id={b.id}
                        onClick={getDetails}>
                        {b.name}
                    </li>
                ))}
            </ul>
            <BookDetail id={id} />
        </div>
    );
}

export default BookList;
