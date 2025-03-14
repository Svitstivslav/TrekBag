import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidbar from "./components/Sidebar";

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
          <Header />
          <ItemList />
          <Sidbar />
      </main>

      <Footer />
    </>
  );
}

export default App;
