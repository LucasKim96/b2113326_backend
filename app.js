// một framework phổ biến của Node.js để xây dựng ứng dụng web và API
const express = require("express");
// một middleware cho phép các request từ domain khác có thẻ truy cập tài nguyên của server
const cors = require("cors");
// import module
const contactsRouter = require("./app/routes/contact.route");
// Khởi tạo một instance của ứng dụng Express và gán nó vào biến app
const app = express();

// cho phép các request từ các origin khác nhau có thể truy cập vào server
app.use(cors());
// parse dữ liệu JSON từ request body
app.use(express.json());

// định nghĩa 1 route GET
app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

app.use("/api/contacts", contactsRouter);
// Export biến app để có thể sử dụng nó ở các module khác
module.exports = app;
