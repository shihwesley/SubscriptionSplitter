import axios from "axios";

export default {
  // Gets all books
  getService: function() {
    return axios.get("/api/service");
  },
  // GEts all groups
  getgroups: function() {
    return axios.get("/api/groups");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/service/" + id);
  },

  saveUser: function(UserData) {
    console.log("saveUser");
    console.log(UserData);
    return axios.post("/api/users", UserData);
  },

  saveGroup: function(GroupData) {
    console.log("saving group" + GroupData);
    return axios.post("/api/groups", GroupData)
  }
};