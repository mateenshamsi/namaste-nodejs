# Understanding Client-Server Architecture

## Client
- A client is a user's computer/device that makes requests for resources
- Examples: Web browsers, mobile apps, desktop applications
- Sends requests to servers for data, services, or resources
- Handles user interface and interaction

## Server
- A server is a computer program/machine that provides resources to clients
- Examples: Web servers, database servers, file servers
- Listens for client requests and sends appropriate responses
- Manages data, business logic, and resource distribution

## Basic Flow
1. Client sends request to server
2. Server processes the request
3. Server sends response back to client
4. Client displays/uses the received data

## Common Protocols
- HTTP/HTTPS (Web)
- FTP (File Transfer)
- SMTP (Email)
- WebSocket (Real-time communication)

## Sockets and WebSockets

### Sockets
- Low-level networking interface for TCP/IP communication
- Enables bidirectional data flow between client and server
- Maintains persistent connection until explicitly closed
- Used for real-time applications and gaming servers

### WebSocket Protocol
- Built on top of TCP protocol
- Provides full-duplex communication
- Starts as HTTP connection, then upgrades to WebSocket
- Reduces overhead compared to HTTP polling

### Key Differences
- Sockets work at transport layer (TCP/IP)
- WebSockets operate at application layer
- WebSockets are specifically designed for web browsers
- Standard sockets require custom client implementation

### Common Uses
- Chat applications
- Live streaming
- Online gaming
- Real-time dashboards
- Collaborative editing