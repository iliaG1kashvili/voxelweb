const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "https://voxelweb-1.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


// MySQL Connection
const db = mysql.createConnection({
  host: "mysql-voxelweb.alwaysdata.net",
  user: "voxelweb", // Change to your MySQL user
  password: "Iliko321!", // Change to your MySQL password
  database: "voxelweb_voxelweb",
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ Connected to the database!");
});

// 🔹 **User Login Endpoint**
app.post("/login", (req, res) => {
  const { username, userpassword } = req.body;
  const query = "SELECT * FROM users WHERE accountuser = ? AND accountpassword = ?";

  db.query(query, [username, userpassword], (err, result) => {
    if (err) return res.status(500).json({ error: "Server error" });
    if (result.length > 0) return res.json({ message: "Login successful", user: result[0] });
    res.status(401).json({ error: "Incorrect credentials" });
  });
});

// 🔹 **User Registration Endpoint**
app.post("/register", (req, res) => {
  const { username, userpassword } = req.body;

  if (!username || !userpassword) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const query = "INSERT INTO users (username, userpassword) VALUES (?, ?)";

  db.query(query, [username, userpassword], (err, result) => {
    if (err) return res.status(500).json({ error: "Server error" });
    res.status(201).json({ message: "User registered successfully", userId: result.insertId });
  });
});

// 🔹 **Get All Users**
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).json({ error: "Server error" });
    res.json(result);
  });
});

// 🔹 **Add New Product**
app.post("/add-product", (req, res) => {
  const { producttipe, url, productsname, toursimageurl } = req.body;

  if (!producttipe || !url || !productsname) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const query = "INSERT INTO products (producttipe, url, productsname, toursimageurl) VALUES (?, ?, ?, ?)";

  db.query(query, [producttipe, url, productsname, toursimageurl], (err, result) => {
    if (err) return res.status(500).json({ error: "Server error" });
    res.status(201).json({ message: "Product added successfully", productId: result.insertId });
  });
});

// 🔹 **Get All Products**
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) return res.status(500).json({ error: "Server error" });
    res.json(result);
  });
});

// Endpoint to get products
// app.get("/products", (req, res) => {
//   db.query("SELECT * FROM products", (err, results) => {
//     if (err) {
//       res.status(500).send("Database error");
//     } else {
//       res.json(results);
//     }
//   });
// });

// 🔹 **Get Product by ID**
app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM products WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Server error" });
    if (result.length === 0) return res.status(404  ).json({ error: "Product not found" });
    res.json(result[0]);
  });
});

// 🔹 **Update Product**
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { producttipe, url, productsname, toursimageurl } = req.body;

  if (!producttipe || !url || !productsname) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const query = "UPDATE products SET producttipe = ?, url = ?, productsname = ?, toursimageurl = ? WHERE id = ?";

  db.query(query, [producttipe, url, productsname, toursimageurl, id], (err, result) => {
    if (err) return res.status(500).json({ error: "Server error" });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product updated successfully" });
  });
});

// 🔹 **Delete Product**
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Server error" });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  });
});

// 🔹 **Delete User**
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Server error" });
    if (result.affectedRows === 0) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted successfully" });
  });
});


app.get("/", (req, res) => {
  res.json({ message: "Backend is working and CORS is active!" });
});



// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);

});
