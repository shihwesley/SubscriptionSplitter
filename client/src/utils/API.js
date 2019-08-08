import axios from "axios";

export default {
  // Gets all books
  getService: function() {
    return axios.get("/api/service");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/service/" + id);
  },

  saveUser: function(UserData) {
    console.log("saveUser");
    return axios.post("/api/users", UserData);
  }
};