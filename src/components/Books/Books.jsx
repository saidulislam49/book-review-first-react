import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=> {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])

    return (
        <div>
            <div className="py-24 container xl:max-w-[1170px]">
                <h2 className="text-center font-bold text-[40px] mb-5">Books</h2>

                <div className="grid grid-cols-3 gap-6">
                    {
                        books.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;