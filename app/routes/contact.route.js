const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

// định nghĩa route liên quan cho phép ứng dụng xử lý các yêu cầu HTTP
router
  .route("/")
  .get(contacts.findAll)
  .post(contacts.create)
  .delete(contacts.deleteAll);

router.route("/favorite").get(contacts.findAllFavorite);

router
  .route("/:id")
  .get(contacts.findOne)
  .put(contacts.update)
  .delete(contacts.delete);

module.exports = router;
