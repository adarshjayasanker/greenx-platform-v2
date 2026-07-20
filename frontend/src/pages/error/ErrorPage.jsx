import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    let title = "Something went wrong";
    let message = "An unexpected error occurred while loading this page";

    if(isRouteErrorResponse(error)){
        title = `${error.status} ${error.statusText}`;
        if(error.status === 404){
            message = `The page you're looking for doesn't exist.`;
        }
    }

    return(
        <main className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-lg text-center">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="mt-4 text-gray-600">{message}</p>
            </div>
        </main>
    )
}

export default ErrorPage;