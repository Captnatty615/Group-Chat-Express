# **Online Group Chat Application**

## **Overview**

The **Online Group Chat Application** is a real-time messaging platform built using **Node.js** and **Express.js**, allowing multiple users to communicate seamlessly in a group chat environment. The application leverages **WebSockets (Socket.io)** to establish real-time bidirectional communication between users and the server. Messages are streamed live to all connected users but are not stored in a database at the moment.

## **Key Features**

✅ **Real-Time Messaging** – Messages are instantly delivered to all users via WebSockets.\
✅ **User Connection Management** – Users can join and leave chat rooms dynamically.\
✅ **No Database Storage** – Messages are displayed in real-time but are not stored for later retrieval.\
✅ **Scalable Backend** – Built with Node.js and Express.js to handle multiple concurrent connections.\
✅ **Broadcasting System** – Messages sent by any user are broadcasted to all connected clients.

## **Tech Stack**

- **Backend**: Node.js, Express.js, Socket.io
- **Frontend**: HTML, CSS, JavaScript (or React/Vue if applicable)
- **Real-Time Communication**: WebSockets (Socket.io)
- **Deployment**: Docker, AWS, or Heroku (optional)

## **Setup & Installation**

1. **Clone the repository**

   ```sh
   git clone https://github.com/Captnatty615/Group-Chat-Express.git
   cd Group-Chat-Express
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Start the server**

   ```sh
   node server.js
   ```

4. **Access the application** Open your browser and navigate to:

   ```
   http://localhost:4000
   ```

## **Future Enhancements**

- Implement database storage for message history.
- Add user authentication and profiles.
- Enhance the UI with a modern frontend framework.
- Implement private messaging and direct user-to-user chats.

## **Contributing**

Contributions are welcome! Feel free to fork the repo, create a new branch, and submit a pull request.

## **License**

This project is licensed under the MIT License.

