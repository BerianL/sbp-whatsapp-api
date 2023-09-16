# SBP WhatsApp API Server

The SBP WhatsApp API Server is an Express.js application that provides RESTful API endpoints for managing WhatsApp sessions. It allows you to start, stop, and manage sessions, as well as retrieve QR codes for authentication.

## Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Routes](#routes)
- [Error Handling](#error-handling)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- SBP WhatsApp API keys and necessary credentials.

### Installation

1. Clone this repository:

   ```
   git clone https://github.com/BerianL/sbp-whatsapp-api.git
   ```

2. Navigate to the project directory:

   ```
   cd sbp-whatsapp-api
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the server:

   ```
   npm start
   ```

The server should now be running at `http://localhost:8080`.

## Usage

To use the WhatsApp API Server, you can make HTTP requests to the provided endpoints using a tool like `curl`, Postman, or integrate it into your own application. Below is a summary of the available endpoints and the data they expect:

### Session Endpoints:

- **GET `/sessions`**: Get a list of all sessions.

- **POST `/sessions/start/:name`**: Start a new session with the specified name.
    - Expected Data: No additional data required.

- **POST `/sessions/stop/:name`**: Stop a session by name.
    - Expected Data: No additional data required.

- **POST `/sessions/remove/:name`**: Remove a session by name.
    - Expected Data: No additional data required.

- **GET `/sessions/qrCode/:name`**: Retrieves an image of a QR code for session authentication.
    - Expected Data: No additional data required.

### Message Endpoints:

- **POST `/messages/text`**: Send a text message.
    - Expected Data:
        - `from`: The session name.
        - `phoneNumber`: The recipient's phone number.
        - `message`: The text message to send.

- **POST `/messages/image/url`**: Send an image message with a URL.
    - Expected Data:
        - `from`: The session name.
        - `phoneNumber`: The recipient's phone number.
        - `mimetype`: The MIME type of the image.
        - `url`: The URL of the image.
        - `filename`: The filename of the image.
        - `caption` (optional): A caption for the image.

- **POST `/messages/image/base64`**: Send an image message with base64 data.
    - Expected Data:
        - `from`: The session name.
        - `phoneNumber`: The recipient's phone number.
        - `mimetype`: The MIME type of the image.
        - `data`: The base64-encoded image data.
        - `filename`: The filename of the image.
        - `caption` (optional): A caption for the image.

- **POST `/messages/file/url`**: Send a file message with a URL.
    - Expected Data:
        - `from`: The session name.
        - `phoneNumber`: The recipient's phone number.
        - `mimetype`: The MIME type of the file.
        - `url`: The URL of the file.
        - `filename`: The filename of the file.

- **POST `/messages/file/base64`**: Send a file message with base64 data.
    - Expected Data:
        - `from`: The session name.
        - `phoneNumber`: The recipient's phone number.
        - `mimetype`: The MIME type of the file.
        - `data`: The base64-encoded file data.
        - `filename`: The filename of the file.

See the [Routes](#routes) section for a concise summary of the available endpoints.

## Configuration

The application uses a configuration file (`config.js`) to store API specific variables such as `BASE_URL`.

The application also uses a `.env` file to store sensitive information such as API keys and credentials.

Ensure you configure these files with the appropriate values within the root directory of the project.

## Routes

- `/sessions`
    - `GET /`: Get a list of all sessions.
    - `POST /start/:name`: Start a new session with the specified name.
    - `POST /stop/:name`: Stop a session by name.
    - `POST /remove/:name`: Remove a session by name.
    - `GET /qrCode/:name`: Retrieves an image of a QR code for session authentication.

- `/messages`
    - `POST /text`: Send a text message.
    - `POST /image/url`: Send an image message with a URL.
    - `POST /image/base64`: Send an image message with base64 data.
    - `POST /file/url`: Send a file message with a URL.
    - `POST /file/base64`: Send a file message with base64 data.

See the [Usage](#usage) section for more details on the expected data for each endpoint.

Please refer to the code and documentation for the `sessionController.js` and `messageController.js` for more details on route handling.

## Error Handling

The application includes error handling middleware (`errorHandler.js`) to handle various error scenarios and provide informative error responses. Error messages are categorized and returned as JSON responses.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.
