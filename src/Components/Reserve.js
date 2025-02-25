import { Grid } from "@chakra-ui/react"
import { useState } from "react"

const Reserve = () => {
    const [state, setState] = useState({ hour: '', date: ''})
    console.log(state)
    const handleOnChange = async (e) => {
        console.log(e.target.name, e.target.value)
        switch (e.target.name) {
            case 'date':
                setState({...state, date: e.target.value });
            case 'hour':
                setState({...state, hour: e.target.value })
            break;
        }
    }

    const sendInformation = (e) => {
        // const options= {
        //     url: 'https://example.com',
        //     method: 'POST',
        //     data: state
        // }
        // fetch(options)
        e.preventDefault()
        console.log(state)
    }

    return (
        <div>
            <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
   <label htmlFor="res-date">Reserve a table</label>
   <input name='date' onChange={(e) => handleOnChange(e)} type="date" id="res-date"></input>
   <label htmlFor="res-time">Choose time</label>
   <select name='hour' id="res-time" onChange={(e) => handleOnChange(e)}>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests"></input>
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation"></input>
   <button onClick={(e) => sendInformation(e)}>Enviar</button>
            </form>
        </div>
    );
}

export default Reserve