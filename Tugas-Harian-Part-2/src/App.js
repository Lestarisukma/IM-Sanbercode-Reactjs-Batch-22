import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="kotak">
        <form>
        <h1>Form Pembelian Buah</h1>
          <label for="name"><b>Nama Pelanggan</b></label>
          <input type="text" id="nama" style={{"margin-left":"40px"}}></input>
        </form>
        <form style={{"margin-top":"10px"}}>
          <input type="checkbox" name="listbuah" style={{"margin-left":"170px"}}></input>
          <label for="buah1"> Semangka</label><br></br>
          <input type="checkbox" name="listbuah" style={{"margin-left":"170px"}}></input>
          <label for="buah2"> Jeruk</label><br></br>
          <input type="checkbox" name="listbuah" style={{"margin-left":"170px"}}></input>
          <label for="buah3"> Nanas</label><br></br>
          <input type="checkbox" name="listbuah" style={{"margin-left":"170px"}}></input>
          <label for="buah4"> Salak</label><br></br>
          <label for="item"><b>Daftar Item</b></label>
          <input type="checkbox" style={{"margin-left":"83px"}}></input>
          <label for="buah5"> Anggur</label>
        </form>
        <input type="submit" id="send" value="Kirim" 
        style={{"margin-left":"40px", "margin-top":"20px", "border-radius":"20px"}}></input>
      </div>
      
    </div>
  );
}

export default App;
