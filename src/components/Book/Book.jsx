import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {bookId, bookName, image, author, rating, category, tags} = book;
    return (
        <Link to={`book-details/${bookId}`}>
        
        <div className="border border-[#dcdcdc] p-6 rounded-2xl">
            <div className="bg-[#F3F3F3] rounded-2xl p-8">
                <img src={image} alt="book thumbnail" />
            </div>  
            <div>
                <ul className="flex gap-3 py-6">
                    {
                        tags.map( (tag,index) => <li className="bg-[#f4fcf3] text-[#23BE0A] rounded-3xl py-2 px-4 font-semibold" key={index}>{tag}</li>)
                    }
                </ul>
                <h2 className="text-2xl font-semibold">{bookName}</h2>
                <h4 className="text-[16px] mt-3">By: {author}</h4>
                <hr className="my-5 border-dashed" />
                <div className="flex justify-between">
                    <div>
                        <span className="">{category}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">{rating}</span><CiStar></CiStar>
                    </div>
                </div>
            </div>          
        </div>
        </Link>
    );
};

export default Book;