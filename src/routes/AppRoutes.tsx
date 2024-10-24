import { Routes, Route, Navigate } from "react-router-dom";
import Product from "../pages/Product/Product";
import Seller from "../pages/Seller/Seller";
import Sales from "../pages/Sales/Sales";
import Shipping from "../pages/Shipping/Shipping";
import FinanceFlux from "../pages/FinanceFlux/FinanceFlux";
import StockManagement from "../pages/StockManagement/StockManagement";
import LoginPage from "../pages/Login/LoginPage";
import RoleGuard from "./RoleGuard";
import MyDocument from '../pages/GeneratePDF/GeneratePDF';
import ShowPDF from '../pages/GeneratePDF/ShowPDF';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/product"
        element={
          <RoleGuard allowedRoles={["admin"]}>
            <Product />
          </RoleGuard>
        }
      />
      <Route
        path="/seller"
        element={
          <RoleGuard allowedRoles={["admin"]}>
            <Seller />
          </RoleGuard>
        }
      />
      <Route
        path="/sales"
        element={
          <RoleGuard allowedRoles={["admin"]}>
            <Sales />
          </RoleGuard>
        }
      />
      <Route
        path="/shipping"
        element={
          <RoleGuard allowedRoles={["admin"]}>
            <Shipping />
          </RoleGuard>
        }
      />
      <Route
        path="/financeFlux"
        element={
          <RoleGuard allowedRoles={["admin"]}>
            <FinanceFlux />
          </RoleGuard>
        }
      />
      <Route
        path="/stock"
        element={
          <RoleGuard allowedRoles={["admin"]}>
            <StockManagement />
          </RoleGuard>
      }
      />
      <Route path='/document' element={<ShowPDF/>}/>  
    </Routes>
  );
};

export default AppRoutes;
