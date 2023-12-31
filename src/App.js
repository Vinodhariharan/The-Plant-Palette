import React, {useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Navbar from './component/AllComp/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About.jsx';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Footer from './component/Footer/Footer.jsx';  // Import the Footer component
import ProductCategories from './component/Home/MegaMenu';
import ProductDetails from './component/ProductPage/ProductDetails.jsx';
import ProductListPass from './component/ProductList/ProductListPass.jsx';
import TermsAndConditions from './component/Footer/TermsAndConditions.jsx';
import FAQSection from './component/Footer/Faq.jsx';
import PrivacyPolicy from './component/Footer/PrivacyPolicy.jsx';
import ContactInformation from './component/Footer/Contact.jsx';
import { CartProvider } from "./component/AllComp/useCart.js";
import ImageSlider from './component/AllComp/ImageCarosel.jsx';
import images from './component/Datas/images.js';
import { MyContextProvider } from './component/Datas/DataContext.jsx'; // Assuming this is the correct path

const App = () => {

  // Ensure that BrowserRouter wraps the entire application
  return (
    // <ThemeProvider>
    <CartProvider>
      <MyContextProvider>
        <Router>
          <AppContent />
        </Router>
      </MyContextProvider>
    </CartProvider>
    // </ThemeProvider>
  );
};

const AppContent = () => {
  const location = useLocation();

  // Check if the current route is Login or Register
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const isAuthHome = location.pathname === '/';

  useEffect(() => {
    // Directly set background color on body element
    document.body.style.backgroundColor = isAuthPage ? '#0A4938' : '#fff'; // Adjust default color if needed
  }, [isAuthPage]);

  return (
    <div>
      {!isAuthPage && <Navbar />}
      {/* <Divider variant="middle" /> */}
      {!isAuthPage && <ProductCategories />}

      <Container sx={{ marginTop: 2, minHeight: '100vh' }}>
        {isAuthHome && <ImageSlider images={images} />}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/productList/:slug' component={ProductListPass} />
          <Route path='/productList/' component={ProductListPass} />
          <Route path="/products/:slug" component={ProductDetails} />
          <Route path="/terms" component={TermsAndConditions} />
          <Route path="/faq" component={FAQSection} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route path="/contact" component={ContactInformation} />
        </Switch>

      </Container>
      {!isAuthPage && <Footer />}
    </div>
  );
};


export default App;