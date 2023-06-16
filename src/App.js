import './App.css';
import { useState, Dropdown } from 'react';

// import client from 'MySQL.';


function App() {

  // const SQL1 = () =>{
  //   client.connect(dataAccount, dataPassword)
  //   const res = client.writeSQL(INSERT xxxxx)
  //    console.log(res)
  // }



  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [formData, setFormData] = useState({ venue: "", price: "" });
  const [formDataPlayer, setFormDataPlayer] = useState({ teamName: "", playerType: "", playerName: "", jerseyNumber: "", skillPoint: "", salary: "" });



  const handleChange1 = (event) => {
    setInputValue1(event.target.value);
    // sendSQLRequest1(event.target.value)
  };
  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
    // sendSQLRequest1(event.target.value)
  };
  const handleChange3 = (event) => {
    setInputValue3(event.target.value);
    // sendSQLRequest1(event.target.value)
  };

  const handleChange4 = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleChangePlayer = (event) => {
    const { name, value } = event.target;
    setFormDataPlayer((prevFormData) => ({ ...prevFormData, [name]: value }));
  };












  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
  };

  const handleSubmitRead = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.teamName}`
    );
  };

  const handleSubmitUpdate = (event) => {
    event.preventDefault();
    alert(`Venue: ${formData.venue}, Price: ${formData.price}`
    );
  };

  const handleSubmitDeleteT = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.therapistID}`
    );
  };

  const handleSubmitDeleteC = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.coachID}`
    );
  };



  const handlePlayer = (event) => {
    event.preventDefault();
    const playerType = formDataPlayer.playerType;
    alert(formDataPlayer.playerType + formDataPlayer.teamName + formDataPlayer.playerName + formDataPlayer.jerseyNumber + formDataPlayer.skillPoint + formDataPlayer.salary);

    if (playerType === "Goalkeeper") {
      // callSQLCreateForGoalkeeper(formDataPlayer.teamName, formDataPlayer.playerName, formDataPlayer.jerseyNumber, formDataPlayer.skillPoint, formDataPlayer.salary)
      alert("hahaha")
    } else if (playerType === "Defensive") {
      // callSQLCreateForDefensive(formDataPlayer.teamName, formDataPlayer.playerName, formDataPlayer.jerseyNumber, formDataPlayer.skillPoint, formDataPlayer.salary)
    } else if (playerType === "Midfielder") {
      // callSQLCreateForMidfielder(formDataPlayer.teamName, formDataPlayer.playerName, formDataPlayer.jerseyNumber, formDataPlayer.skillPoint, formDataPlayer.salary)
    } else if (playerType === "Forward") {
      // callSQLCreateForForward(formDataPlayer.teamName, formDataPlayer.playerName, formDataPlayer.jerseyNumber, formDataPlayer.skillPoint, formDataPlayer.salary)
    } else {
      alert("wrong player type: " + playerType);
    }
  }



  return (
    <div className="App">
      <form>
        <label>Input Value:
          <input type="text" value={inputValue1} onChange={handleChange1} />
        </label>
        <p>Input Value: {inputValue1}</p>

        <label>Input Value:
          <input type="text" value={inputValue2} onChange={handleChange2} />
        </label>
        <p>Input Value: {inputValue2}</p>

        <label>Input Value:
          <input type="text" value={inputValue3} onChange={handleChange3} />
        </label>
        <p>Input Value: {inputValue3}</p>
      </form>
      <br />




      <form onSubmit={handlePlayer}>


        {/* NOT WORKING */}
        {/* <select name="selectList" id="selectList" value={formDataPlayer.playerType} onChange={handleChangePlayer}>
        <option value="Goalkeeper">Goalkeeper</option>
        <option value="Defensive">Defensive</option>
        <option value="Midfielder">Midfielder</option>
        <option value="Forward">Forward</option>
      </select> */}


        <label htmlFor="name">Team Name:</label>
        <input type="text" id="teamName" name="teamName" value={formDataPlayer.teamName} onChange={handleChangePlayer} />
        <label htmlFor="name">Player Type:</label>
        <input type="text" id="playerType" name="playerType" value={formDataPlayer.playerType} onChange={handleChangePlayer} />
        <label htmlFor="name">Player Name:</label>
        <input type="text" id="playerName" name="playerName" value={formDataPlayer.playerName} onChange={handleChangePlayer} />
        <label htmlFor="name">Player Salary:</label>
        <input type="text" id="salary" name="salary" value={formDataPlayer.salary} onChange={handleChangePlayer} />
        <label htmlFor="name">Player Skill Points:</label>
        <input type="text" id="skillPoint" name="skillPoint" value={formDataPlayer.skillPoint} onChange={handleChangePlayer} />
        <label htmlFor="name">Player Jeysey Number:</label>
        <input type="text" id="jerseyNumber" name="jerseyNumber" value={formDataPlayer.jerseyNumber} onChange={handleChangePlayer} />
        <button type="submit">Add (CREATE)</button>
      </form>
      <br />





      <form onSubmit={handleSubmitRead}>
      <label htmlFor="name">Enter Team Name to view the country it belongs to:</label>
        <input type="text" id="teamName" name="teamName" value={formData.name} onChange={handleChange4} />
        <button type="submit">View (READ)</button>
      </form>
      <br />






      <form onSubmit={handleSubmitUpdate}>
        <label htmlFor="name">Venue:</label>
        <input type="text" id="venue" name="venue" value={formData.venue} onChange={handleChange4} />
        <label htmlFor="name">Price:</label>
        <input type="text" id="price" name="price" value={formData.price} onChange={handleChange4} />
        <button type="submit">Change (UPDATE)</button>
      </form>






      <br />
      <form onSubmit={handleSubmitDeleteT}>
        <label htmlFor="name">Enter Therapist ID to delete:</label>
        <input type="text" id="therapistID" name="therapistID" value={formData.name} onChange={handleChange4} />
        <button type="submit">Remove (DELETE)</button>
      </form>
      <br />
      <form onSubmit={handleSubmitDeleteC}>
        <label htmlFor="name">Enter Coach ID to delete:</label>
        <input type="text" id="coachID" name="coachID" value={formData.name} onChange={handleChange4} />
        <button type="submit">Remove (DELETE)</button>
      </form>






    </div>
  );
}
export default App;
