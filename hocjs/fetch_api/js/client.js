import { config } from "./config.js";
const {SERVER_API} = config;



export const client = {
    send: async function(url,method = "GET", body = null){
        url = `${SERVER_API}${url}`;
        const options = {
            method,
            header: {
                "Content-Type": "apllication/json",
            },
        };

        if(body){
            options.body = JSON.stringify(body);
        }

        const response = await fetch(url,options);
        const data = await response.json();
        // console.log( data);
        
        return {response,data};
    },
    
    get: function(url){
        return this.send(url)
    },

    post: function(url,body){
        return this.send(url,"POST",body);
    },

    put: function(url,body){
        return this.send(url,"PUT",body);
    },

    patch: function(url,body){
        return this.send(url,"PATCH",body);
    },

    delete: function(url){
        return this.send(url,"DELETE");
    },
}