import axios from "axios";

export default axios.create({
    baseURL: "https://presentacion-alumnos.herokuapp.com",
    headers:{
        "Content-type":"application/json"
    }
});
