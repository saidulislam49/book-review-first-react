import { Helmet } from "react-helmet-async";


const ErrorPage = () => {
    return (
        <div>

            <h1 className="text-4xl">404</h1>
            <Helmet>
                <title>Book Review | Error!</title>
            </Helmet>
        </div>
    );
};

export default ErrorPage;