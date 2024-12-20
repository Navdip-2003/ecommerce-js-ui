import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Login from './layouts/Login.jsx';
import AboutUs from './layouts/AboutUs.jsx';
import ContactUs from './layouts/ContactUs.jsx';
import PrivacyPolicy from './layouts/PrivacyPolicy.jsx';
import TermsAndConditions from './layouts/Terms&Conditions.jsx';
import Register from './layouts/Register.jsx';
import RetailerRegister from './layouts/RetailerSide/RetalerRegister.jsx';
import UserProfile from './layouts/Profile.jsx';
import RetailerDashboard from './layouts/RetailerSide/RetailerHome.jsx';
import Home from './layouts/Home.jsx';
import RetailerOrder from './layouts/RetailerSide/RetailerOrder.jsx';
import RetailerAddProduct from './layouts/RetailerSide/RetailerAddProduct.jsx';
import RetailerProductList from './layouts/RetailerSide/RetailerProductList.jsx';
import RetailerContact from './layouts/RetailerSide/RetailerContact.jsx';
import RetailerProfile from './layouts/RetailerSide/RetailerProfile.jsx';
import OrderDetailsPage from './layouts/RetailerSide/RetailerOrderDetails.jsx';
import RetailerProductDetail from './layouts/RetailerSide/RetailerProductDetails.jsx';
import PastOrders from './layouts/Order.jsx';
import ShopPage from './layouts/Shop.jsx';
import ProductDetails from './layouts/Product/ProductDetails.jsx';
import CartPage from './layouts/Cart.jsx';
import CheckoutPage from './layouts/CheckoutPage.jsx';
import NotFound from './layouts/Common/NotFound.jsx';
import AdminDashboard from './layouts/AdminSide/AdminHome.jsx';
import AdminContacts from './layouts/AdminSide/AdminContacts.jsx';
import AdminUsers from './layouts/AdminSide/AdminUsers.jsx';
import AdminRetailers from './layouts/AdminSide/AdminRetailers.jsx';
import AdminProducts from './layouts/AdminSide/AdminProducts.jsx';
import AdminSettings from './layouts/AdminSide/AdminSettings.jsx';
import AdminProfile from './layouts/AdminSide/AdminProfile.jsx';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './layouts/Common/store.js';  // Import your store


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Separate route for Login (without MainLayout) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* MainLayout routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/orders" element={<PastOrders />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product-detail/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Retailer Routes */}
      <Route path="/retailer" element={<MainLayout />}>
        <Route index element={<RetailerDashboard />} />
        <Route path="dashboard" element={<RetailerDashboard />} />
        <Route path="retailer-register" element={<RetailerRegister />} />
        <Route path="order" element={<RetailerOrder />} />
        <Route path="order-details/:id" element={<OrderDetailsPage />} />
        <Route path="add-product" element={<RetailerAddProduct />} />
        <Route path="product-list" element={<RetailerProductList />} />
        <Route path="product-details/:id" element={<RetailerProductDetail />} />
        <Route path="contact" element={<RetailerContact />} />
        <Route path="profile" element={<RetailerProfile />} />
        <Route path="*" element={<NotFound />} />

      </Route>

      

      {/* Admin Routes */}
      <Route path="/admin" element={<MainLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="retailers" element={<AdminRetailers />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="contact" element={<AdminContacts />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="profile" element={<AdminProfile />} />
      </Route> 
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
