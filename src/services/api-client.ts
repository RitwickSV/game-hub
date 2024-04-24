import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: 'f1dba5ebd6f24768bdd775ab5a90a8b9'
    }
})