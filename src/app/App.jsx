import Header from "./header/Header";
import Hero from "./hero/Hero";
import MainContent from "./main-content/MainContent";
import Footer from "./footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MainContent />
      </main>
      <Footer />
    </>
  );
}
