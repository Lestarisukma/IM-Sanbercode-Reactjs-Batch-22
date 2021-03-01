import './App.css';
import DaftarBuah from './Tugas-10/DaftarBuah';
import FormPembelian from './Tugas-9/formBuah'
import Timer from './Tugas-11/Timer'

function App() {
  return (
    <>
      <FormPembelian />
      <DaftarBuah />
      <Timer start={100}/>
    </>
    
  );
}

export default App;
