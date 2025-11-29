# Proxy Server

A simple Express-based proxy server that forwards requests to external APIs.

## Features

- Request forwarding to external servers
- CORS support
- Error handling
- Health check endpoint
- Environment configuration

## Installation

```bash
npm install
```

## Usage

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

The server will start on `http://localhost:3000`

## Endpoints

- `GET /` - Information about available endpoints
- `GET /health` - Health check
- `GET /api/users` - Proxy to JSONPlaceholder users API
- `GET /api/posts` - Proxy to JSONPlaceholder posts API

## Configuration

Edit `.env` file to change:

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (default: development)

## Example Requests

```bash
curl http://localhost:3000/health

curl http://localhost:3000/api/users/1

curl http://localhost:3000/api/posts
```

## Adding More Routes

To add more proxy routes, add them to `server.js`:

```javascript
app.use("/api/your-route", (req, res) => {
  proxy.web(req, res, {
    target: "https://your-target-api.com",
  });
});
```
