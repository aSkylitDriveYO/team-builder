import React, { useState } from 'react';
import Form from './components/Form'
import Member from './components/Member'
import './App.css';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {

  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }
  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    setTeamMembers([newMember,...teamMembers]);
    setFormValues(initialFormValues);
  }





  return (
    <div className="App">
      <Form
        values={formValues}
        updater={updateForm}
        submitter={submitForm}
        />
        {
          teamMembers.map(member => {
            return (
              <Member key={member.id} details={member} />
            )
          })
        }
    </div>
  );
}

export default App;
