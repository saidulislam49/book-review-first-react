import { Link } from "react-router-dom";


const ListSingleBook = ({readBook}) => {
    return (
        <div className="my-4 border rounded-lg p-4">
            <div className="flex gap-12">
                    <div className="bg-[#F3F3F3] rounded-2xl p-16">
                        <img src={readBook.image} alt="book thumbnail"  />
                    </div>
                    <div className="basis-1/2">
                        <h3 className='text-3xl'>{readBook.bookName}</h3>
                        <p className='text-[20px] my-5'>By: {readBook.author}</p>
                        <hr />
                        <p className='text-[20px] my-5'>{readBook.category}</p>
                        <hr /> 
                        <div className='flex gap-4 items-center mb-5'>
                            <h3 >Tags:</h3>
                            <ul className="flex gap-3">
                                {
                                    readBook.tags.map((tag, index) => <li className="bg-[#f4fcf3] text-[#23BE0A] rounded-3xl py-2 px-4 font-semibold" key={index}>#{tag}</li>)
                                }
                            </ul>
                        </div>
                        <hr />
                        <div className='my-5'>
                            <div className='flex gap-14 my-2'>
                                <p className='basis-1/4'>Number of Pages:</p><p className='font-semibold'>{readBook.totalPages}</p>
                            </div>
                            <div className='flex gap-14 my-2'>
                                <p className='basis-1/4'>Publisher:</p><p className='font-semibold'>{readBook.publisher}</p>
                            </div>
                            <div className='flex gap-14 my-2'>
                                <p className='basis-1/4'>Year of Publishing:</p><p className='font-semibold'>{readBook.yearOfPublishing}</p>
                            </div>
                            <div className='flex gap-14 my-2'>
                                <p className='basis-1/4'>Rating:</p><p className='font-semibold'>{readBook.rating}</p>
                            </div>
                            <Link to={`/book-details/${readBook.bookId}`}><button className="px-4 py-2 text-white bg-[#23BE0A] rounded-[30px]">View Details</button></Link>
                        </div> 
                    </div>
                </div>
        </div>
    );
};

export default ListSingleBook;