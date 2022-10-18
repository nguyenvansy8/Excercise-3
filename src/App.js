import "./App.css";
import Layout from "./components/Layout";
import CreateWallet from "./pages/CreateWallet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfirmSeed from "./pages/createWallet/ConfirmSeed";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Layout />} />
            <Route path="create" element={<CreateWallet />} />
            <Route path="confirm" element={<ConfirmSeed />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
