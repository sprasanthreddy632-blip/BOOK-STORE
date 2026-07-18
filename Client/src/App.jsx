import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./Components/Home";

// User
import Login from "./User/Login";
import Signup from "./User/Signup";
import Uhome from "./User/Uhome";
import Products from "./User/Products";
import Uitem from "./User/Uitem";
import MyOrders from "./User/MyOrders";
import OrderItem from "./User/OrderItem";

// Seller
import Slogin from "./Seller/Slogin";
import Ssignup from "./Seller/Ssignup";
import Shome from "./Seller/Shome";
import Addbook from "./Seller/Addbook";
import MyProducts from "./Seller/MyProducts";
import Orders from "./Seller/Orders";

// Admin
import Alogin from "./Admin/Alogin";
import Asignup from "./Admin/Asignup";
import Ahome from "./Admin/Ahome";
import Users from "./Admin/Users";
import Seller from "./Admin/Seller";
import Items from "./Admin/Items";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* User */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/uhome" element={<Uhome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/book/:id" element={<Uitem />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderItem />} />

        {/* Seller */}
        <Route path="/seller/login" element={<Slogin />} />
        <Route path="/seller/signup" element={<Ssignup />} />
        <Route path="/seller/home" element={<Shome />} />
        <Route path="/seller/addbook" element={<Addbook />} />
        <Route path="/seller/products" element={<MyProducts />} />
        <Route path="/seller/orders" element={<Orders />} />

        {/* Admin */}
        <Route path="/admin/login" element={<Alogin />} />
        <Route path="/admin/signup" element={<Asignup />} />
        <Route path="/admin/home" element={<Ahome />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/sellers" element={<Seller />} />
        <Route path="/admin/items" element={<Items />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;