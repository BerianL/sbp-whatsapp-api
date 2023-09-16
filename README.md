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
- [License](#license)

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

To use the WhatsApp API Server, you can make HTTP requests to the provided endpoints using a tool like `curl`, Postman, or integrate it into your own application.

Example API endpoints:

- GET `/sessions`: Get a list of all sessions.
- POST `/sessions/start/:name`: Start a new session with the specified name.

See the [Routes](#routes) section for more details on available endpoints.

Please refer to the [Routes](#routes) section for more details on available routes.

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

Please refer to the code and documentation for the `sessionController.js` for more details on route handling.

## Error Handling

The application includes error handling middleware (`errorHandler.js`) to handle various error scenarios and provide informative error responses. Error messages are categorized and returned as JSON responses.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
