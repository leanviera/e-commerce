import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Hola. Bienvenidos a la mejor tienda de ropa de Argentina!" />
    </>
  );
}

export default App;
