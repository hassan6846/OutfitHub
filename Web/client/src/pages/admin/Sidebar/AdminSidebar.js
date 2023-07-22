import React from 'react';
import { Switch,Link, Routes,Route} from 'react-router-dom';
// css
import './AdminSidebar.css';
import AllUsers from '../Components/AllUsers';
import AddProduct from '../Components/AddProduct';

const AdminSidebar = () => {
  const routes = [
    {
      path: '/admin/products/add',
      component: <AddProduct />,
    },
    {
      path: '/admin/allusers',
      component: <AllUsers />,
    },
  ];

  return (
 
      <div className='Admin_wrapper'>
        <div className='Action-Sidebar'>
          <Link to='/' className='login-logo'>
            <img alt='company' src='./logo.svg' />
          </Link>
          <Link className='Switch_links' to='/admin'>
            Overview
          </Link>
          <Link className='Switch_links' to='/admin/products'>
            Products
          </Link>
          <Link className='Switch_links' to='/admin/products/add'>
            Add New Product
          </Link>
          <Link className='Switch_links' to='/admin/allusers'>
            All Users
          </Link>
          {/* Add other links here */}
          <Link className='Switch_links' to='/admin/orders'>
            Orders
          </Link>
          <Link className='Switch_links' to='/admin/messages'>
            Message
          </Link>
          <Link className='logout-btn' to='/admin/logout'>
            Logout
          </Link>
        </div>
        <div className='admin-content'>
       
      <Routes>
      {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
      </Routes>
        </div>
      </div>
  
  );
};

export default AdminSidebar;
