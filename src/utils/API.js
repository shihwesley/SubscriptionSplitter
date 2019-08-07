import axios from "axios";

export default {
  // Gets all books
  getService: function() {
    return axios.get("/api/service");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
};