import Footer from "components/Footer";
import Header from "components/Header";
import User from "components/user/User";
import Users from "components/users/Users";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/user/:id" element={<User />}></Route>
          <Route path="/" element={<Users />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
