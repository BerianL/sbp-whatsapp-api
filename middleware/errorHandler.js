export const errorHandler = (err, req, res, next) => {
    // Log the error for debugging purposes
    console.error("Error:", err);

    // Default error response
    const errorResponse = {
        error: "Internal server error",
        details: "An unexpected error occurred.",
    };

    // Check if the error has a user-friendly message
    if (err.message) {
        errorResponse.details = err.message;
    }

    // Handle specific error status codes
    if (err.status === 404) {
        errorResponse.error = "Not found";
        errorResponse.details = "The requested resource was not found.";
    } else if (err.status === 400) {
        errorResponse.error = "Bad request";
    } else if (err.status === 401) {
        errorResponse.error = "Unauthorized";
        errorResponse.details = "You are not authorized to access this resource.";
    }

    // Send the error response to the client
    res.status(err.status || 500).json(errorResponse);
};