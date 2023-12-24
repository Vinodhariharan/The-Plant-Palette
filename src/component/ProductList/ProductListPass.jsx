import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import products_tools from '../Datas/essentialGardenTools.js';
import products_flowers from '../Datas/flowers.js';
import products_shrubs from '../Datas/shrubs.js';
import products_fertilizers from '../Datas/fertilizers.js';
import products_containers from '../Datas/containers.js';
import products_trendingPlants from '../Datas/trendingPlant.js';
import ProductList from "./ProductList.jsx";
function getProductsById(productSlug) {

    const productsMap = {
        "flowers": products_flowers,
        "tools": products_tools,
        "shrubs": products_shrubs,
        "fertilizers":products_fertilizers,
        "containers":products_containers,
        "plants":products_trendingPlants,
    };
    const p = productsMap[productSlug];
    return p;
}


function ProductDetails() {
    const { slug } = useParams();
    const products = getProductsById(slug)
    if (products) {
        return (
            <ProductList products={products} />
        );
    }
    else if (slug) {
        return (
            <h1 style={{ textAlign: 'center', marginTop: '30vh' }}>Webpage under development</h1>
        );
    }
    else {
        return (
            <h1 style={{ textAlign: 'center', marginTop: '30vh' }}>Webpage under development</h1>
        );
    }
}

export default ProductDetails;