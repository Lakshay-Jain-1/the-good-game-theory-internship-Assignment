
import MediaCard from "../components/Product"
const ProductCards = ({ products }) => {
    if (!products?.length) return null;

    return (
        <div id="cards">
            {products.map(({ image, price, name, rating }) => {
                if (!rating) return null;
                const { average, reviews } = rating;
                return <MediaCard key={name + price} img={image} price={price} name={name} average={average} reviews={reviews} />;
            })}
        </div>
    );
};


export default ProductCards