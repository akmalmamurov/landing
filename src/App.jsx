// import pages
import { Header } from "@/components/header";
import { Container } from "@/components/container";
import { Home } from "@/components/home";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

function App() {
  return (
    <div className="w-full h-full">
      <Header />
      <Container>
        <Home />
        <About />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
