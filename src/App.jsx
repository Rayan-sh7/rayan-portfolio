import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
export default function App() {
  return (
    <Layout>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}
