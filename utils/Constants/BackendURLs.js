const URLs = {
    dev:{
        api_rafi: "http://192.168.19.100:8080/backend",
        api_michael: "http://192.168.19.100:8080/backend",
        socketio_rafi: "http://192.168.19.100:8080",
        socketio_michael: "http://192.168.19.100:8080",
        zencon_event:"http://192.168.19.100:9003/api/v1/zencon"
    },
    // prod:{
    //     idbackend: "https://idbackend.zeniq.id",
    //     launchpadbackend: "https://staging.qinez.com/backend",
    //     socketio_launchpadbackend: "https://staging.qinez.com/",
    //     zencon_event:"https://staging.qinez.com/api/v1/zencon"
    // }
     prod:{
        idbackend: "https://idbackend.zeniq.id",
        launchpadbackend: "http://192.168.19.100:8080/backend",
        socketio_launchpadbackend: "http://192.168.19.100:8080",
        zencon_event:"http://192.168.19.100:9003/api/v1/zencon"
    }
}

export const confirmation_page_endpoints = ["upload_project", "edit_project"];

export const api_backend = URLs.prod.launchpadbackend;
export const socketio_backend = URLs.prod.socketio_launchpadbackend;
export const zencon_event_api_url = URLs.prod.zencon_event;