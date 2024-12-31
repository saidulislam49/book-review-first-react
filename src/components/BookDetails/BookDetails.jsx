
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getStoredReadBook, getStoredWishlist, saveReadBook, saveWishlist } from '../../utility/localstorage';
import { Helmet } from 'react-helmet-async';


const BookDetails = () => {
    const all_books = useLoaderData();
    const { id } = useParams();
    const book = all_books.find(book => book.bookId === id);

    const handleReadBook = () => {
        const storedReadBooks = getStoredReadBook();
        const exists = storedReadBooks.find(bookId => bookId === id);
        
        if (!exists) {
            saveReadBook(id);
            toast('You can read this book now.🥰');
        } else {
            toast('Already added this book.😎');
        }

    }

    const handleBookWishlist = () => {
        const storedWishlists = getStoredWishlist();        
        const existsInWishlist = storedWishlists.find(wishlist => wishlist === id); 

        const storedReadBooks = getStoredReadBook();
        const existsInReadList = storedReadBooks.find(readBook => readBook === id);

        if(!existsInReadList){
            if(!existsInWishlist){
                saveWishlist(id);
                toast('You added this book to wishlist.🥰'); 
            }else{
                toast('Already added this book to wishlist.🥰'); 
            }
        }else{
            toast('Already added this book to read list.😎');
        }
        
        
    }


    return (
        <div>
            <Helmet>
                <title>Book Review | Book Details</title>
            </Helmet>
            <div className='container xl:max-w-[1170px] py-12'>
                <div className="flex gap-12">
                    <div className="bg-[#F3F3F3] rounded-2xl p-16 basis-1/2">
                        <img src={book.image} alt="book thumbnail" className='w-9/12 mx-auto' />
                    </div>
                    <div className="basis-1/2">
                        <h3 className='text-3xl'>{book.bookName}</h3>
                        <p className='text-[20px] my-5'>By: {book.author}</p>
                        <hr />
                        <p className='text-[20px] my-5'>{book.category}</p>
                        <hr />
                        <p className='my-5'><strong>Review :</strong> {book.review}</p>
                        <div className='flex gap-4 items-center mb-5'>
                            <h3 >Tags:</h3>
                            <ul className="flex gap-3">
                                {
                                    book.tags.map((tag, index) => <li className="bg-[#f4fcf3] text-[#23BE0A] rounded-3xl py-2 px-4 font-semibold" key={index}>#{tag}</li>)
                                }
                            </ul>
                        </div>
                        <hr />
                        <div className='my-5'>
                            <div className='flex gap-14 my-2'>
                                <p className='basis-1/4'>Number of Pages:</p><p className='font-semibold'>{book.totalPages}</p>
                            </div>
                            <div className='flex gap-14 my-2'>
                                <p className='basis-1/4'>Publisher:</p><p className='font-semibold'>{book.publisher}</p>
                            </div>
                            <div className='flex gap-14 my-2'>
                                <p className='basis-1/4'>Year of Publishing:</p><p className='font-semibold'>{book.yearOfPublishing}</p>
                            </div>
                            <div className='flex gap-14 my-2'>
                                <p className='basis-1/4'>Rating:</p><p className='font-semibold'>{book.rating}</p>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <button onClick={handleReadBook} className='btn btn-outline mr-4'>Read</button>
                            <button onClick={handleBookWishlist} className='btn btn-outline'>Wishlist</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;