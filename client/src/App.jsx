import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Analysis from "./pages/Analysis";

function App() {
  const path = window.location.pathname;

  if (path === "/login") {
    return <Login />;
  }

  if (path === "/register") {
    return <Register />;
  }

  if (path === "/dashboard") {
    return <Dashboard />;
  }

  if (path === "/analysis") {
    return <Analysis />;
  }

  return <Home />;
}

export default App;