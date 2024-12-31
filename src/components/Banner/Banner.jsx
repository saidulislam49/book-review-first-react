import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="container xl:max-w-[1170px] mt-12">
            <div className="grid grid-cols-6 bg-gray-300 p-20 rounded-2xl items-center">
                <div className="col-span-4">
                    <h1 className="text-[56px] text-[#131313] font-bold">Books to freshen up <br />your bookshelf</h1>
                    <Link to={'/listed-books'}><button className="btn bg-[#23BE0A] hover:bg-[#22be0abd] text-white mt-12">View The List</button></Link>
                </div>
                <div className="col-span-2">
                    <img src="hero.png" alt="Book Photo" />
                </div>
            </div>
        </div>
    );
};

export default Banner;