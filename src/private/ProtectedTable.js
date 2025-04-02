import React, { useState } from "react";
import axios from "axios";
import "./ProtectedTable.css";

const ProtectedTable = () => {
    const [username, setUsername] = useState("");
    const [userpassword, setUserPassword] = useState("");
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [activeButton, setActiveButton] = useState(null);
    const [newProduct, setNewProduct] = useState({
        producttipe: "",
        url: "",
        productsname: "",
        toursimageurl: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:5000/login", { 
                username, 
                userpassword 
            }, {
                headers: { "Content-Type": "application/json" }
            });

            console.log("Server Response:", response.data);
            setData([response.data]);
        } catch (err) {
            console.error("Login Error:", err.response?.data || err.message);
            setError("Incorrect credentials or server error");
            setData([]);
        }
    };

    const handleButtonClick = (index, label) => {
        setActiveButton((prev) => (prev === index ? null : index));
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            producttipe: label.toLowerCase(),
        }));
    };

    const handleProductInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleAddProduct = async () => {
        try {
            const response = await axios.post("http://localhost:5000/add-product", newProduct, {
                headers: { "Content-Type": "application/json" },
            });

            console.log("Product Added:", response.data);
            // Reset the form or show a success message
            setNewProduct({
                producttipe: "",
                url: "",
                productsname: "",
                toursimageurl: "",
            });
        } catch (err) {
            console.error("Error adding product:", err.response?.data || err.message);
        }
    };

    return (
        <div className="protected-table-container">
            {!data.length ? (
                <form onSubmit={handleSubmit} className="password-form">
                    <div className="password-form-pad">
                        <input
                            className="password-form-pad-input1"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter Username"
                            required
                        />
                        <input
                            className="password-form-pad-input2"
                            type="password"
                            value={userpassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                            placeholder="Enter Password"
                            required
                        />
                        <button className="submitbutton" type="submit">Submit</button>
                    </div>
                    {error && <p className="error">{error}</p>}
                </form>
            ) : (
                <table className="data-table">
                    <thead>
                        <tr>
                            <div className="add-product">
                                <div className="add-new-product">
                                    <div className="add-new-product-tipe">
                                        {["render", "architecture", "360 tour", "animation"].map((label, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleButtonClick(index, label)}
                                                className={`add-new-product-tipe${index + 1} ${activeButton === index ? "active" : ""}`}
                                            >
                                                {label}
                                            </button>
                                        ))}
                                    </div>
                                    <input
                                        className="add-new-product-link"
                                        name="url"
                                        value={newProduct.url}
                                        onChange={handleProductInputChange}
                                        placeholder="Enter link"
                                        type="text"
                                    />
                                    <input
                                        className="add-image-for-360-tour"
                                        name="toursimageurl"
                                        value={newProduct.toursimageurl}
                                        onChange={handleProductInputChange}
                                        placeholder="Enter image link for 360 tours front image"
                                        type="text"
                                    />
                                    <input
                                        className="add-new-product-name"
                                        name="productsname"
                                        value={newProduct.productsname}
                                        onChange={handleProductInputChange}
                                        placeholder="Enter name"
                                        type="text"
                                    />
                                    <button
                                        className="add-new-product-add-product-button"
                                        onClick={handleAddProduct}
                                    >
                                        Add Product
                                    </button>
                                </div>
                            </div>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.id}</td>
                                <td>{row.username}</td>
                                <td>{row.userpassword}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ProtectedTable;
