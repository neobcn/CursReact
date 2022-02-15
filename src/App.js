import Comptador from "./components/Comptador.jsx";
import Events from "./components/Events.jsx";
import Formulari from "./components/Formulari.jsx";
import Llistes from "./components/Llistes.jsx";
import Paragraf from "./components/Paragraf.jsx";
import Variables from "./components/Variables.jsx";


function App() {
  return (
    <div className="container mt-5 mb-50">
      <h1>Benvinguts al hola món de React amb Salvador Mata</h1>
      {/*<Paragraf />*/}
      {/*<Variables />*/}
      {/*<Events />*/}
      {/*<Comptador />*/}
      {/*<Llistes />*/}
      <Formulari />
    </div>
  );
}

export default App;
