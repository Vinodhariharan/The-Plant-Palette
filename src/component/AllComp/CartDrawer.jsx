import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Sheet from '@mui/joy/Sheet';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import ModalClose from '@mui/joy/ModalClose';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import ProductCard from './CardComponent'; // Assume you have a ProductCard component
import { Badge } from '@mui/material';
import useCart, { CartContext } from './useCart'; // Import the useCart custom hook
import { useContext } from 'react';
import { CartCard } from './CartCard';

export default function CartDrawer() {
  const [open, setOpen] = React.useState(false);
  const { cartItems, addToCart } = useContext(CartContext);
  

  const handleRemoveItem = (item) => {
    addToCart(item); // Reuse addToCart for removing items by adding them back with quantity - 1
  };
  // React.useEffect(() => {}, cartItems);

  console.log(cartItems)


  return (
    <div>
      <Button
        sx={{ borderRadius: '20px' }}
        variant="soft"
        color="neutral"
        endDecorator={<Badge badgeContent={cartItems.length} color="primary" >
          <ShoppingCartIcon color='white'/>
        </Badge>}
        onClick={() => setOpen(true)}
      >
        View Cart
      </Button>
      <Drawer
        size="md"
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          // ... (add any additional configurations you need)
        }}
      >
        <Sheet
          sx={{
            borderRadius: 'md',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <DialogTitle>Your Cart</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: 'auto' }} />
          <DialogContent sx={{ gap: 2 }}>
            {cartItems.length === 0 ? (
              <Typography level="body-lg" textAlign="center">
                Your cart is empty.
              </Typography>
            ) : (
              <List>
                {cartItems.map((item) => (
                  <ListItem key={item.link}>
                    {/* <ProductCard product={item} /> 
                    <Stack direction="row" alignItems="center" sx={{ ml: 2 }}>
                      <Typography variant="body2">{item.price} INR</Typography>
                      <Button
                        variant="outlined"
                        color="neutral"
                        size="small"
                        onClick={() => handleRemoveItem(item)}
                      >
                        Remove
                      </Button>
                    </Stack> */}
                    <CartCard product={item}></CartCard>
                  </ListItem>
                ))}
              </List>
            )}
          </DialogContent>
          <Divider sx={{ mt: 'auto' }} />
          <Stack
            direction="row"
            justifyContent="space-between"
            useFlexGap
            spacing={1}
          >
            <Button sx={{ borderRadius: '20px', backgroundColor:'#0A4938', color:"#fff"}}
        variant="soft">
              Checkout
            </Button>
            <Button sx={{ borderRadius: '20px', backgroundColor:'red', color:"#fff" }}
        variant="soft"
       onClick={() => setOpen(false)}>Close</Button>
          </Stack>
        </Sheet>
      </Drawer>
    </div>
  );
}
