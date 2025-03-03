import Itemmenu from "./itemmenu";
import "../Assets/specials.css";
import { SiKaggle } from "react-icons/si";

const Specials = () => {
  return (
   <specials id="Specials">
        <div className="titulo">
            <h5>Today's Specials</h5>
            <button id="menu">Online Menu</button>
        </div>
        <div className="food1">
          <Itemmenu imgSrc="greek salad.jpg" title="Greek" precio="$49.99" description="Lorem ipsum dolor sit amet consectetur. Imperdiet et in egestas mi mauris neque. Vestibulum nulla odio ac lectus semper." />
          <Itemmenu imgSrc="greek salad.jpg" title="Greek" precio="$10.00" description="Lorem ipsum dolor sit amet consectetur. Imperdiet et in egestas mi mauris neque. Vestibulum nulla odio ac lectus semper." />
          <Itemmenu imgSrc="greek salad.jpg" title="Greek" precio="$29.99" description="Lorem ipsum dolor sit amet consectetur. Imperdiet et in egestas mi mauris neque. Vestibulum nulla odio ac lectus semper." />
        </div>
    </specials>
  );
}


export default Specials;
