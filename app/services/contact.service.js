const { ObjectId } = require("mongodb");

class ContactService {
  constructor(client) {
    this.Contact = client.db().collection("contacts");
  }
  // định nghĩa các phương thức truy xuất CSDL sử dụng mongoDB API
}

module.exports = ContactService;
