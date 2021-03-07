function About(props) {
    return(
      <>
         <div className="about-section">
            <div className="about-table"> 
                <h3 style={{textAlign:"center"}}>Daftar Peserta Bootcamp Reactjs</h3>
                <ol>
                    <li><b>Nama:</b> {props.name} </li>
                    <li><b>Email:</b> {props.email} </li>
                    <li><b>Sistem Operasi yang digunakan:</b> {props.sistem} </li>
                    <li><b>Akun Github:</b> {props.github} </li>
                    <li><b>Akun Telegram:</b> {props.telegram} </li>
                </ol>

            </div>
                
        </div>
        <footer>
            <h5>copyright &copy; 2020 by Sanbercode</h5>
        </footer>
      </>

    )
}

export default About