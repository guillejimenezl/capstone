import '../Assets/header.css'

const Header = () => {
  return (
    <header className='header-component bg-black'>
     <nav>
      <img className='logo' src="logo .svg" alt="logo"/>
            <ul>
              <li><a href="#Home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#booking">Reserve a Table</a></li>
            </ul>
      </nav>
  </header>
    );
}

export default Header

