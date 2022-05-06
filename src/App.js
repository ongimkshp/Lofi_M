import Menu from "./component/menu/Menu";
import Navbar from "./component/Navbar";
import Audio from './component/Audio';
import Background from "./component/Background";
import ItemModal from "./component/modal/ItemModal";

function App() {


  return (
    <div className="relative min-h-screen bg-transparent-b-80">
      <Navbar/>
      <div className="absolute inset-0">
        <Background/>
      </div>
      <Audio/>
      <Menu/>
      <ItemModal/>
    </div>
  );
}

export default App;
