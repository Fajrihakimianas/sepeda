export default function errorHandler(error){
    if(error){
        let message;
        if(error.response){
            if(error.response.status === 500) message = "Ada yang salah!";
            else message = error.response.message;

            console.log(message);

            return Promise.reject(error);
        }
    }
}