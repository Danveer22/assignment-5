import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

import InfoSection from "./components/InfoSection";
import Gallary from "./components/Gallary";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <InfoSection />
        <Testimonial />
        <Gallary />
        <Footer />
      </main>
    </>
  );
}
