import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import ProductCard from "./Product/ProductCard";
import useFetch from "../hooks/useFetch";

const ShopPage = () => {
  // const products = [
  //   {
  //     id: 1,
  //     name: 'Edna Dress',
  //     imageUrl: product1,
  //     discountPrice: 600,
  //     actualPrice: 500,
  //     description:
  //       'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  //     colors: ['#FF0000', '#00FFFF', '#0000FF'],
  //     size: ['xs', 's', 'm', 'x', 'xl', 'xll']
  //   },
  //   {
  //     id: 2,
  //     name: 'Elastic Waist Dress',
  //     imageUrl: product2,
  //     discountPrice: 748,
  //     actualPrice: 948,
  //     description:
  //       'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  //     colors: ['#000000', '#7F00FF', '#DAA520'],
  //     size: ['xs', 's', 'm', 'x', 'xl', 'xll']
  //   },
  //   {
  //     id: 3,
  //     name: '3/4 Sleeve Kimono Dress',
  //     imageUrl: product3,
  //     discountPrice: 550,
  //     actualPrice: 750,
  //     description:
  //       'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  //     colors: ['#FF4500', '#FFD700', '#C0C0C0'],
  //     size: ['xs', 's', 'm', 'x', 'xl', 'xll']
  //   },
  //   {
  //     id: 4,
  //     name: 'Cape Dress',
  //     imageUrl: product1,
  //     discountPrice: 788,
  //     actualPrice: 900,
  //     description:
  //       'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  //     colors: ['#191970', '#8B0000', '#006400'],
  //     size: ['xs', 's', 'm', 'x', 'xl', 'xll']
  //   },
  //   {
  //     id: 5,
  //     name: 'Edna Dress',
  //     imageUrl: product1,
  //     discountPrice: 600,
  //     actualPrice: 500,
  //     description:
  //       'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  //     colors: ['#FF0000', '#00FFFF', '#0000FF'],
  //     size: ['xs', 's', 'm', 'x', 'xl', 'xll']
  //   },
  //   {
  //     id: 6,
  //     name: 'Elastic Waist Dress',
  //     imageUrl: product2,
  //     discountPrice: 748,
  //     actualPrice: 748,
  //     description:
  //       'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  //     colors: ['#000000', '#7F00FF', '#DAA520'],
  //     size: ['xs', 's', 'm', 'x', 'xl', 'xll']
  //   },
  //   {
  //     id: 7,
  //     name: '3/4 Sleeve Kimono Dress',
  //     imageUrl: product3,
  //     discountPrice: 550,
  //     actualPrice: 550,
  //     description:
  //       'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  //     colors: ['#FF4500', '#FFD700', '#C0C0C0'],
  //     size: ['xs', 's', 'm', 'x', 'xl', 'xll']
  //   },
  //   {
  //     id: 8,
  //     name: 'Cape Dress',
  //     imageUrl: product1,
  //     discountPrice: 788,
  //     actualPrice: 900,
  //     description:
  //       'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  //     colors: ['#191970', '#8B0000', '#006400'],
  //     size: ['xs', 's', 'm', 'x', 'xl', 'xll']
  //   },
  // ];

  // States for filters
  const [price, setPrice] = useState([0, 1000]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const [openCategory, setOpenCategory] = useState(null);

  const { data, loading, error } = useFetch("/product");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products: {error.message}</div>;

  // Access the 'products' array from the response data
  const products = data?.data.products || [];
  

  const toggleCategory = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  // Style Object
  const styles = {
    container: { fontFamily: "Arial, sans-serif", padding: "10px" },
    header: { textAlign: "center", padding: "20px", background: "#eee", marginBottom: "20px" },
    shopPage: { display: "flex" },
    sidebar: { flex: 1, padding: "20px", backgroundColor: "#f9f9f9", marginRight: "30px" },
    filterSection: { marginBottom: "30px" },
    productGrid: { flex: 3, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "50px" },
    loadMore: { textAlign: "center", margin: "20px" },
    button2: { padding: "10px 20px", backgroundColor: "#FF0000", color: "white", border: "none", cursor: "pointer" },
    button1: { padding: "10px 20px", backgroundColor: "#333", color: "white", border: "none", cursor: "pointer", marginRight: "50px" },
    boxButton: {
      display: "inline-block",
      padding: "10px",
      margin: "5px",
      border: "1px solid #ddd",
      cursor: "pointer",
      textAlign: "center",
    },
    selected: {
      backgroundColor: "#333",
      color: "#fff",
    },
    colorBox: {
      display: "inline-block",
      width: "30px",
      height: "30px",
      margin: "5px",
      border: "2px solid transparent",
      cursor: "pointer",
    },
    colorSelected: {
      borderColor: "#333",
    },
    priceLabel: { margin: "10px 0" },
    category: {
      textDecoration: "none",
      color: "#333",
      cursor: "pointer",
    },
    searchBar: {
      width: "60%",
      padding: "10px",
      margin: "20px 0",
      border: "1px solid #ddd",
      borderRadius: "5px 0 0 5px",
      fontSize: "16px",
      display: "inline-block",
    },
    searchButton: {
      backgroundColor: "orange",
      border: "1px solid #ddd",
      padding: "10px 15px",
      cursor: "pointer",
      borderRadius: "0 5px 5px 0",
      marginLeft: "-1px",
      height: "47px",
    },
    line: {
      marginBottom: "20px"
    }
  };

  // Toggle Multi-Select Size
  const handleSizeSelect = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  // Toggle Multi-Select Color
  const handleColorSelect = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h2 className="text-2xl font-semibold text-center">Shop</h2>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <input type="text" placeholder="Search for products..." style={styles.searchBar} />
          <button style={styles.searchButton}><FaSearch /></button>
        </div>
      </header>

      {/* Main Shop Page */}
      <div style={styles.shopPage}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.filterSection}>
            <h3 className="font-semibold">CATEGORIES</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {/* Mens Category */}
              <li style={{ marginBottom: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleCategory("Mens")}
                >
                  <span>Mens</span>
                  <span>{openCategory === "Mens" ? "−" : "+"}</span>
                </div>
                {openCategory === "Mens" && (
                  <ul className="list-disc" style={{ paddingLeft: "20px", marginTop: "10px" }}>
                    <li>
                      <a href="#shirts" style={styles.category}>
                        Shirts
                      </a>
                    </li>
                    <li>
                      <a href="#trousers" style={styles.category}>
                        Trousers
                      </a>
                    </li>
                    <li>
                      <a href="#shoes" style={styles.category}>
                        Shoes
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Womens Category */}
              <li style={{ marginBottom: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleCategory("Womens")}
                >
                  <span>Womens</span>
                  <span>{openCategory === "Womens" ? "−" : "+"}</span>
                </div>
                {openCategory === "Womens" && (
                  <ul className="list-disc" style={{ paddingLeft: "20px", marginTop: "10px" }}>
                    <li>
                      <a href="#dresses" style={styles.category}>
                        Dresses
                      </a>
                    </li>
                    <li>
                      <a href="#tops" style={styles.category}>
                        Tops
                      </a>
                    </li>
                    <li>
                      <a href="#skirts" style={styles.category}>
                        Skirts
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Kids Category */}
              <li style={{ marginBottom: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleCategory("Kids")}
                >
                  <span>Kids</span>
                  <span>{openCategory === "Kids" ? "−" : "+"}</span>
                </div>
                {openCategory === "Kids" && (
                  <ul className="list-disc" style={{ paddingLeft: "20px", marginTop: "10px" }}>
                    <li>
                      <a href="#clothing" style={styles.category}>
                        Clothing
                      </a>
                    </li>
                    <li>
                      <a href="#toys" style={styles.category}>
                        Toys
                      </a>
                    </li>
                    <li>
                      <a href="#accessories" style={styles.category}>
                        Accessories
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* View All Clothing */}
              <li style={{ marginTop: "10px" }}>
                <a href="#view-all" style={styles.category}>
                  View All Clothing
                </a>
              </li>
            </ul>
          </div>
          <hr style={styles.line} />
          {/* Price Range Filter */}
          <div style={styles.filterSection}>
            <h3 className="font-semibold">PRICE</h3>
            <input
              type="range"
              min="0"
              max="100000"
              value={price[1]}
              onChange={(e) => setPrice([0, e.target.value])}
              style={{ width: "100%" }}
            />
            <p style={styles.priceLabel}>
              ₹{price[0]} - ₹{price[1]}
            </p>
          </div>
          <hr style={styles.line} />
          {/* Size Filter */}
          <div style={styles.filterSection}>
            <h3 className="font-semibold">SIZE</h3>
            <div>
              {["XS", "S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
                <div
                  key={size}
                  style={{
                    ...styles.boxButton,
                    ...(selectedSizes.includes(size) ? styles.selected : {}),
                  }}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <hr style={styles.line} />
          {/* Color Filter */}
          <div style={styles.filterSection}>
            <h3 className="font-semibold">COLOR</h3>
            <div>
              {["red", "black", "yellow", "white", "green", "blue", "pink", "purple", "brown", "orange", "gray", "magenta"].map((color) => (
                <div
                  key={color}
                  style={{
                    ...styles.colorBox,
                    backgroundColor: color,
                    ...(selectedColors.includes(color) ? styles.colorSelected : {}),
                  }}
                  onClick={() => handleColorSelect(color)}
                ></div>
              ))}
            </div>
          </div>
          <hr style={styles.line} />
          <button style={styles.button1}>FILTER</button>
          <button style={styles.button2}>CLEAR</button>
        </aside>

        {/* Product Grid */}
        <main>
          <div style={styles.productGrid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ShopPage;
