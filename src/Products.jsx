import { useEffect, useState } from "react"
import { fetchingData } from "./api-Services/fetchingdata"
import MediaCard from "./Product"
import "./Product.css"
const Products = () => {
    const [product, setProduct] = useState([])
    const [searchProduct, setSearchProduct] = useState([])
    useEffect(() => {
        callingData()
    }, [])
    async function callingData() {
        let data = await fetchingData()
        setProduct(data)
    }
    function searching(event) {
        let searchTerm = event.target.value.toLowerCase();
        if (searchTerm.length > 0) {
            let data = product.filter(({ name }) => name.toLowerCase().includes(searchTerm));
            setSearchProduct(data);
        } else {
            setSearchProduct([]);
        }
    }
    return (
        <>
            <input type="text" placeholder="Search" onChange={(event) => searching(event)} />
            <div className="search-results">
                <div className="search-title">{searchProduct.length > 0 ? "SEARCHED PRODUCTS ARE":""}</div>
                {searchProduct.length > 0 ?
                    searchProduct.map(({ image, price, name, rating }) => {
                        const { average, reviews } = rating
                        return <MediaCard key={name} img={image} price={price} name={name} average={average} reviews={reviews} />
                    })
                    : ""}
            </div>

            <div id="cards">


                {product.map(({ image, price, name, rating }) => {
                    const { average, reviews } = rating
                    return (<MediaCard key={name + price} img={image} price={price} name={name} average={average} reviews={reviews} />)
                })}



            </div>
        </>
    )

}

export default Products