import React, { useState } from 'react';
import './products.css';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import Nav from '../../Layouts/NavbarMain/ResponsiveNav';
import Footer from '../../Layouts/footer/Footer';
import CategoryBar from '../../components/CategoryBar';

const Products = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarToggled((prevValue) => !prevValue);
  };

  return (
    <div className='product-page-wrapper'>
      <Nav />
      <CategoryBar />
      <div className='parental-row_product'>
        <AnimatePresence>
          {/* Wrap the sidebar with the motion.div */}
          <motion.div
            className={`sidebar_product ${isSidebarToggled ? 'toggled' : ''}`}
            initial={{ width: '25%' }}
            animate={{ width: isSidebarToggled ? '2%' : '25%' }}
            exit={{ width: '25%' }}
            transition={{ duration: 0.3 }} // Adjust the duration as needed
          >
            <button onClick={handleSidebarToggle}>Toggle</button>
          </motion.div>
        </AnimatePresence>
        <div className='product_container_cards'>2</div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
