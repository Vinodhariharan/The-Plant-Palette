// import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import CardOverflow from '@mui/joy/CardOverflow';
// import Chip from '@mui/joy/Chip';
// import Link from '@mui/joy/Link';
// import Typography from '@mui/joy/Typography';
// import ArrowOutward from '@mui/icons-material/ArrowOutward';
// import theme from '../../theme'; // Import your Material-UI theme
// import { ThemeProvider } from '@mui/joy/styles';
// import '../../assets/css/button.css';
// import { CartContext } from "./useCart.js";

// export const CartCard = (key, product) => {

//     console.log(product);

// const handleRemoveItem = (item) => {
//     //addToCart(item); // Reuse addToCart for removing items by adding them back with quantity - 1
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Card  sx={{ width: '100%',  boxShadow: 'lg', margin: '0 5px', borderRadius: '0px' }}>
//         <CardOverflow>
//           <AspectRatio sx={{ }}>
//             <img
//               src={product.imageSrc}
//               srcSet={`${product.imageSrc} 2x`}
//               loading="lazy"
//               alt={product.title}
//               key={product.key}  
//             />
//           </AspectRatio>
//         </CardOverflow>
//         <CardContent>
//           <Typography level="body-xs">Type: {product.Type}</Typography>
//           <Link
//             href={`/products/${product.link}`}
//             fontWeight="md"
//             color="neutral"
//             textColor="text.primary"
//             overlay
//             endDecorator={<ArrowOutward />}
//           >
//             {product.title} 
//           </Link>
//           <Typography
//             level="title-lg"
//             sx={{ mt: 1, fontWeight: 'xl' }}
//             endDecorator={
//               product.bloomTime && (
//                 <Chip component="span" size="sm" variant="soft" color="info">
//                   Blooms in {product.bloomTime}
//                 </Chip>
//               )
//             }
//           >
//             {product.price} INR
//           </Typography>
//           {product.stock && ( // Only show stock if available
//             <Typography level="body-xs">Only {product.stock} left!</Typography>
//           )}
//           <button
//                         variant="outlined"
//                         color="neutral"
//                         size="small"
//                         onClick={() => handleRemoveItem(product)}
//                       >
//                         Remove
//                       </button>

//         </CardContent>
//       </Card>
//     </ThemeProvider>
//   );
// }


import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutward from '@mui/icons-material/ArrowOutward';
import theme from '../../theme'; // Import your Material-UI theme
import { ThemeProvider } from '@mui/joy/styles';
import '../../assets/css/button.css';
import { CartContext } from "./useCart.js";
import Autocomplete from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import Input from '@mui/joy/Input';


export function CartCard({
    product
}) {

    const { cartItems, addToCart } = React.useContext(CartContext);
    const handleAddToCart = () => {
        addToCart(product);
    }
    


    return (
        <ThemeProvider theme={theme}>
            <Card orientation="horizontal" sx={{ width: '100%', boxShadow: 'lg', margin: '0 5px', borderRadius: '0px' }}>
                <CardOverflow>
                    <AspectRatio sx={{ minWidth: 200 }}>
                        <img
                            src={product.imageSrc}
                            srcSet={`${product.imageSrc} 2x`}
                            loading="lazy"
                            alt={product.title}
                            key={product.key}
                        />
                    </AspectRatio>
                </CardOverflow>
                <CardContent>
                    <Typography level="body-xs">Quantity: </Typography>
                    <Autocomplete
                        variant="soft"
                        placeholder="Soft variant"
                        defaultValue={product.quantity}
                        options={[1,2,3,4,5,6,7,8,9,10]}
                        sx={{ width:100 }}
                    />
                    <Link
                        href={`/products/${product.link}`}
                        fontWeight="md"
                        color="neutral"
                        textColor="text.primary"
                        overlay
                        endDecorator={<ArrowOutward />}
                    >
                        {product.title}
                    </Link>
                    <Typography level="body-xs">1-Quantity Price: {product.price}</Typography>
                    <Typography
                        level="title-lg"
                        sx={{ mt: 1, fontWeight: 'xl' }}
                    >
                        {product.price * product.quantity} INR
                    </Typography>
                    {/* {product.stock && ( // Only show stock if available */}
                    <Typography level="body-xs">{product.stock ? `Only ${product.stock} left!` : 'Available'}</Typography>
                    {/* )} */}
                    <Button style={{backgroundColor:'red',width:'50%',marginLeft:'50%',borderRadius:'20px'}} onClick={handleAddToCart}>
                        Remove
                    </Button>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}
