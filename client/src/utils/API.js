import axios from "axios";

export default {
  // Gets all services
  getService: function() {
    return axios.get("/api/service");
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ace21229e943f3d41534946ce8eaf06b85f79400
  // GEts all groups
  getgroups: function() {
    return axios.get("/api/groups");
  },
  // Gets the book with the given id
<<<<<<< HEAD
=======
  // Gets the service with the given id
>>>>>>> f10a1d83efe16078d9beea3da745f7fb0a2c2d02
=======

  // Gets the service with the given id

>>>>>>> ace21229e943f3d41534946ce8eaf06b85f79400
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