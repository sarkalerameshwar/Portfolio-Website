# Portfolio Website

This is a full-stack portfolio website project consisting of a React frontend and a Node.js backend.

## Project Structure

- `frontend/`: React frontend built with Vite, Tailwind CSS, and other modern libraries.
- `backend/`: Node.js backend with Express and MongoDB for handling API requests and data storage.

## Technologies Used

- Frontend:
  - React 19
  - Vite
  - Tailwind CSS
  - Framer Motion
  - Lucide React icons

- Backend:
  - Node.js
  - Express
  - MongoDB (Mongoose)

## Installation

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

### Development

- To run the frontend development server:
  ```bash
  cd frontend
  npm run dev
  ```

- To run the backend server:
  ```bash
  cd backend
  npm start
  ```

### Build

- To build the frontend for production:
  ```bash
  cd frontend
  npm run build
  ```

- The build output will be in the `frontend/dist` directory.

## Deployment

The root `package.json` includes a build script that installs frontend dependencies before building:

```json
"scripts": {
  "build": "cd frontend && npm install && npm run build",
  "start": "cd backend && npm start"
}
```

This ensures that all frontend dependencies, including Vite, are installed during deployment to avoid build errors.

## Notes

- Make sure to have Node.js installed (version 16 or higher recommended).
- MongoDB should be running and configured properly for the backend to work.
- Environment variables for backend configuration (e.g., database URI) should be set as needed.

## License

This project is licensed under the ISC License.

## Contact

For issues or contributions, please visit the [GitHub repository](https://github.com/sarkalerameshwar/Portfolio-Website).
