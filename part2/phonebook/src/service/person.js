import axios from 'axios'

const baseUrl = "http://localhost:3001/persons"

const getAll = ()=>{
    return axios
            .get(baseUrl)
            .then(response=>response.data)
}

const create = (noteObject) =>{
    return axios
            .post(baseUrl,noteObject)
            .then(response=>response.data)
}

const update = (id,newObject)=>{
    return axios
            .put(`${baseUrl}/${id}`,newObject)
            .then(response=>response.data)
}

const deletion = (id)=>{
    return axios
            .delete(`${baseUrl}/${id}`)
            .then(response=>response.data)
}

export default{getAll,create,update,deletion}