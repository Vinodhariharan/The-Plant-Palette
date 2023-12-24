import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import products_tools from '../Datas/essentialGardenTools.js';
import products_flowers from '../Datas/flowers.js';
import products_trending from '../Datas/trendingPlant.js';
import products_fertilizers from '../Datas/fertilizers.js';
import products_containers from '../Datas/containers.js';
import products_shrubs from '../Datas/shrubs.js';
import ProductPage from "./ProductPage.jsx";
function getProductById(productSlug) {
   
  
  var p = products_tools.find((product) => product.link === productSlug);
  if(!p){
    p = products_flowers.find((product) => product.link === productSlug);
  }
  if(!p){
    p = products_trending.find((product) => product.link === productSlug);
  }
  if(!p){
    p = products_fertilizers.find((product) => product.link === productSlug);
  }
  if(!p){
    p = products_containers.find((product) => product.link === productSlug);
  }
  if(!p){
    p = products_shrubs.find((product) => product.link === productSlug);
  }
  return p; 
  }

function ProductDetails() {
    const { slug } = useParams();
    const product = getProductById(slug)
    console.log(slug)
  
    return (
        <ProductPage product={product}/>
    );
  }

  export default ProductDetails;