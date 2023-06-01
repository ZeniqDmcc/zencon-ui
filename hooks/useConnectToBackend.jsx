import {io} from "socket.io-client";
import {api_backend, socketio_backend} from "../utils/Constants/BackendURLs";

export async function useConnectToBackend(){
    const socket = await connectToBackEnd();
    if(socket){
        return socket;
    }
}

export async function connectToBackEnd() {

    try {
        /* request sid before socket handshake */
        const response = await fetch(`${api_backend}/session/sid`, {
            credentials: "include"
        });
        const data = await response.json();
        // console.log(data);

        /* after sid make the socket connection */
        const socket = io(`${socketio_backend}`, {
            withCredentials: true
        });

        if (socket) {
            socket.on("connect_error", error => {
                console.log("Socket connection error: " + error);
            });

            socket.on('connect', () => {
                // console.log("socketIo.connected: " + socket.connected);
                console.log("socket connection established with id: " + socket.id);
            });

            socket.on('disconnect', (reason) => {
                console.log("disconnected from the server because: " + reason);
            });
        }

        return socket;

    } catch (e) {
        console.log(e);
    }
}