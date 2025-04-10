import axios from 'axios'
import './App.css'
import { useEffect } from 'react';

const BASE_URL = "http://localhost:4000"
function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data)
  }
  //GET:VERİYİ ÇEKMEK İÇİN
  /*const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId)
    console.log(response.data)
  }*/
  //POST:VERİYİ EKeLMEK İÇİN
  const createUser = async (newUser) => {
    const response = await axios.post(BASE_URL + "/users", newUser)
    console.log("response", response.data);
  }
  //PUT:VERİYİ GÜNCELLEMEK İÇİN
  const updateUser = async (userId, updatedUser) => {
    const response = await axios.put(BASE_URL + "/users/" + userId, updatedUser)
    console.log("response", response.data);

  }
  //DELETE:VERİ SİLMKE İÇİN
  const deleteUserById = async (userId) => {
    const response = await axios.delete(BASE_URL + "/users/" + userId)
    console.log("response", response.data)
  }

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId)
    return response.data.postId;

  }
  const getPostById = async (postId) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId)
    return response.data;
  }









  const getPost = async () => {
    const postId = await getUserById(2);
    const postData = await getPostById(postId);
    console.log(postData)
  }


  useEffect(() => {
    getPost()
    //getAllUsers
    //getUserById(2)
    /*const newUser = {
      "username": "bilal",
      "password": "3636"
    }
    createUser(newUser)
    updateUser("5a92", {
      "username": "yakup",
      "password": "5555",
    })
    deleteUserById("5a92")*/
  }, [])

}

export default App
