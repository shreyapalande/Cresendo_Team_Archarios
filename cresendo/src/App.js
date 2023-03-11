import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";

function App() {
  return (
    <div className="">
      {/* <h1>hello world</h1>
      <button class="btn btn-primary">Button</button> */}
      <Header></Header>
      <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route
                exact path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
