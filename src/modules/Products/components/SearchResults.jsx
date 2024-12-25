
import MediaCard from "../components/Product"
const SearchResults = ({ searchProducts }) => {
    if (!searchProducts?.length) return null;
    
    return (
      <div className="search-results">
        <div className="search-title">SEARCHED PRODUCTS ARE</div>
        {searchProducts.map(({ image, price, name, rating }) => {
          if (!rating) return null;
          const { average, reviews } = rating;
          return <MediaCard key={name} img={image} price={price} name={name} average={average} reviews={reviews} />;
        })}
      </div>
    );
  };
  export default SearchResults