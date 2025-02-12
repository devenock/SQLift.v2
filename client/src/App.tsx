import "./App.css";
import Hero from "./components/Hero.tsx";
import Playground from "./components/common/Playground.tsx";
import Features from "./components/Features.tsx";
import { AboutAuthor } from "./components/AboutAuthor.tsx";
import CallToAction from "./components/common/CallToAction.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import ScrollToTop from "./components/common/ScrollToTop.tsx";
import Toast from "./components/common/Toast.tsx";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="mx-auto px-4 py-12">
        {/*hero*/}
        <Hero />
        {/*playground*/}
        <Playground />

        {/*features*/}
        <Features />

        {/*  about author */}
        <AboutAuthor />
        {/*  Call to action*/}
        <CallToAction />
      </main>
      {/* footer*/}
      <Footer />
      <ScrollToTop />
      <Toast />
    </div>
  );
}

export default App;
