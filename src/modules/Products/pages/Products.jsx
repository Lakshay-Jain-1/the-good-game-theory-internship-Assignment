import { useEffect, useState } from "react"
import "../components/Product.css"
import { fetchingData } from "../../../api-Services/fetchingdata"
import SearchResults from "../components/SearchResults";
import ProductCards from "../components/ProductCard";


 

  const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        const data = await fetchingData();
        setProducts(data);
      };
      fetchProducts();
    }, []);
  
    const handleSearch = (event) => {
      const searchTerm = event.target.value.toLowerCase();
      if (!searchTerm) {
        setSearchResults([]);
        return;
      }
      const filtered = products.filter(({ name }) => 
        name.toLowerCase().includes(searchTerm)
      );
      setSearchResults(filtered);
    };
  
    return (
      <>
        <input type="text" placeholder="Search" onChange={handleSearch} />
        <SearchResults searchProducts={searchResults} />
        <ProductCards products={products} />
      </>
    );
  };
  
  export default Products;