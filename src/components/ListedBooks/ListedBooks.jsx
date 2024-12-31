import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook, getStoredWishlist } from "../../utility/localstorage";
import ListSingleBook from "../listSingleBook/listSingleBook";
import { Helmet } from "react-helmet-async";


const ListedBooks = () => {
    const books = useLoaderData();
    const [readListBooks, setReadListBook] = useState([]);
    const [wishListBooks, setWishListBook] = useState([]);

    const handleJobFilter = (filterType) => {
        let sortedReadList = [...readListBooks];
        let sortedWishList = [...wishListBooks];

        switch (filterType) {
            case 'rating':
                sortedReadList.sort((a, b) =>b.rating - a.rating );
                sortedWishList.sort((a, b) => b.rating - a.rating );
                break;

            case 'nop':
                sortedReadList.sort((a, b) => b.totalPages - a.totalPages);
                sortedWishList.sort((a, b) => b.totalPages - a.totalPages);
                break;

            case 'py':
                sortedReadList.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
                sortedWishList.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
                break;

            default:
                sortedReadList = [...readListBooks];
                sortedWishList = [...wishListBooks];
        }

        setReadListBook(sortedReadList);
        setWishListBook(sortedWishList);

    }
    useEffect(() => {
        const storedReadList = getStoredReadBook();
        const storedWishListBook = getStoredWishlist();

        const bookReadLists = books.filter((book) => storedReadList.includes(book.bookId));
        const bookWishlist = books.filter((book) => storedWishListBook.includes(book.bookId));

        setReadListBook(bookReadLists);
        setWishListBook(bookWishlist);
    }, [books]);
    return (
        <div>
            <Helmet>
                <title>Book Review | Listed Books</title>
            </Helmet>
            <div className='container xl:max-w-[1170px] py-12'>
                <h1 className="py-8 bg-[#f3f3f3] rounded-xl text-3xl font-bold text-center">Books</h1>
                <div className="my-10 text-center">
                    <select className="select select-bordered w-40 mx-auto bg-[#23BE0A] text-white" onChange={(e) => handleJobFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="rating">Rating</option>
                        <option value="nop">Number of pages</option>
                        <option value="py">Published year</option>
                    </select>
                </div>

                <div className="py-5">

                    <div role="tablist" className="tabs tabs-lifted">
                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            {
                                readListBooks.map(readBook => <ListSingleBook key={readBook.bookId} readBook={readBook}></ListSingleBook>)
                            }
                        </div>

                        <input
                            type="radio"
                            name="my_tabs_2"
                            role="tab"
                            className="tab"
                            aria-label="Wishlist Books"
                            defaultChecked />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            {
                                wishListBooks.map(wishlistBook => <ListSingleBook key={wishlistBook.bookId} readBook={wishlistBook}></ListSingleBook>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;