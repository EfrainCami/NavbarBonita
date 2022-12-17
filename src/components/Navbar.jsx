import React, {useState} from 'react';
import "../style/Navbar.css";
import BurguerButton from './BurguerButton';

function Navbar() {

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y viceversa
    setClicked(!clicked)
  }

  return (
    <>
    <nav>
        <h2>Efraín Arenas</h2>
        <div className={`links ${clicked ? "active" : ""}`}>
            <a onClick={handleClick} href='#h'>Home</a>
            <a onClick={handleClick} href='#h'>Shop</a>
            <a onClick={handleClick} href='#h'>About</a>
            <a onClick={handleClick} href='#h'>Contact</a>
            <a onClick={handleClick} href='#h'>Blog</a>
        </div>
        <div className='burger'>
            <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`initial ${clicked ? " active" : ""}`}></div>
    </nav>
    
        
    </>
  )
}

export default Navbar;