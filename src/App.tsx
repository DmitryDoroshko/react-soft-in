import { Header } from "./components/Header/Header.tsx";
import { Main } from "./components/Main/Main.tsx";
import { Footer } from "./components/Footer/Footer.tsx";

function App() {
  return (
    <>
      <Header title={"Countries of the World"} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
