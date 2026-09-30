import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f7fb] text-slate-900 dark:bg-[#070b14] dark:text-slate-100">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
