import '../Assets/footer.css'

const Footer = () => {
    return (
        <footer id='Contact'>
            <div>
                <img src="logo .svg" alt="logo"/>
            </div>
            <div>
                <ul>Doormat Navigation</ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Specials">Specials</a></li>
                    <li><a href="#Reserve">Reserve a Table</a></li>
            </div>
            <div>
                <ul>Contact</ul>
                    <li>Calle. 14 14 x 45 y 45 Yucatán</li>
                    <li>+52 9999 99 99 99</li>
                    <li>example@hotmail.com</li>
            </div>
        </footer>
    );
}

export default Footer