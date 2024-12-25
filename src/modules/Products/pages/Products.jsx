import { useEffect, useState } from "react"
import "../components/Product.css"
import { fetchingData } from "../../../api-Services/fetchingdata"
import SearchResults from "../components/SearchResults";
import ProductCards from "../components/ProductCard";
  
let count = 0 
  const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
  
    useEffect(() => {
      if(count==0)fetchProducts();
      count+=1
    }, []);
    const fetchProducts = async () => {
        const data = await fetchingData();
        setProducts(data);
      };
  
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