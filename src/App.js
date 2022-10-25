import "./App.css";
import OrderDashboard from "./components/orderDashboard/container/OrderDashboard";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      
      <Routes>
        <Route
          path="/"
          element={<OrderDashboard />}
        />
      </Routes>
      
    </div>
  );
}

export default App;
