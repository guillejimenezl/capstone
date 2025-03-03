import '../Assets/header.css'

const Header = () => {
  return (
    <header className='header-component bg-black'>
     <nav id='Home'>
      <img className='logo' src="logo .svg" alt="logo"/>
            <ul>
              <li><a href="#Home">Home</a></li>
              <li><a href="#Specials">Specials</a></li>
              <li><a href="#Reserve">Reserve a Table</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul>
      </nav>
  </header>
    );
}

export default Header

