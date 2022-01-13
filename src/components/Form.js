import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia")
  const [lastName, setLastName] = useState("Woods")
  const [submittedData, setSubmittedData] = useState([])

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (firstName.length > 0 && lastName.length > 0) {
          
      const formData = { firstName: firstName, lastName: lastName,}
      const dataArray = [...submittedData, formData]

      setSubmittedData(dataArray);

      setFirstName('')
      setLastName('')
      
    } else {
      alert('Please enter a first and last name.')
    }

  }
  
  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  console.log(firstName, lastName)

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
      <h3>Submissions</h3>
      {listOfSubmissions}
    </form>
  );
}

export default Form;



