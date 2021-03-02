import React, { useRef } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
    getAuthorsQuery,
    addBookMutation,
    getBooksQuery,
} from "../queries/queries";

function AddBook() {
    const { loading, data, error } = useQuery(getAuthorsQuery);
    const [addBook, { response }] = useMutation(addBookMutation);
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { book, genre, author } = formRef.current;
        addBook({
            variables: {
                name: book.value,
                genre: genre.value,
                authorId: author.value,
            },
            refetchQueries: [{ query: getBooksQuery }],
        });
        formRef.current.reset();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div>
            <form id="add-book" onSubmit={handleSubmit} ref={formRef}>
                <div className="field">
                    <label htmlFor="book">Book</label>
                    <input name="book" type="text" id="book" required />
                </div>
                <div className="field">
                    <label htmlFor="genre">Genre</label>
                    <input name="genre" type="text" id="genre" required />
                </div>
                <div className="field">
                    <label htmlFor="author">Author</label>
                    <select name="author" id="author" required>
                        <option value="" disabled selected hidden>
                            Select Author
                        </option>
                        {data.authors.map((a) => (
                            <option key={a.id} value={a.id}>
                                {a.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button>+</button>
            </form>
        </div>
    );
}

export default AddBook;
