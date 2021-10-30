import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/pages/Header/Header";
import Home from "./components/pages/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import MyOrders from "./components/pages/MyOrders/MyOrders";
import ManageOrder from "./components/pages/ManageOrder/ManageOrder";
import AddService from "./components/pages/AddService/AddService";
import PlaceOrder from "./components/pages/PlaceOrder/PlaceOrder";
import AuthProvider from "./components/Contexts/AuthProvider";
import Login from "./components/pages/Login/Login";
import PrivateRoute from "./components/pages/PrivateRoute/PrivateRoute";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>
          <PrivateRoute exact path="/orders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/allorders">
            <ManageOrder></ManageOrder>
          </PrivateRoute>
          <PrivateRoute exact path="/addservice">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute exact path="/placeorder/:id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
