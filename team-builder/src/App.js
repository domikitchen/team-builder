import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';

import { InitalTeamMembers } from './components/InitalTeamMembers';
import TeamMembers from './components/TeamMembers';
import MemberForm from './components/MemberForm';

const InitalMemberValues = {
      gameTag: '',
      winRate: '',
      role: '',
      main: '',
      class: '',
}
function App() {
  const [ teamMembers, setTeamMembers ] = useState(InitalTeamMembers);

  const [ formValues, setFormValues ] = useState(InitalMemberValues);

  const onInputChange = evt => {
    const { name, value } = evt.target;

    setFormValues({ ...formValues, [name]: value, });
  }

  const onSubmit = evt => {
    evt.preventDefault();

    if(!formValues.gameTag || !formValues.winRate || !formValues.role || !formValues.main || !formValues.class) {
      return;
    }

    const newTeamMember = {
      ...formValues,
      id: uuid(),
      gameTag: formValues.gameTag.trim(),
      winRate: formValues.winRate,
      role: formValues.role,
      main: formValues.main.trim(),
      class: formValues.class,
    }

    setTeamMembers( [...teamMembers, newTeamMember] );

    setFormValues(InitalMemberValues);
  }

  return (
    <div className="App container">
      <MemberForm 
        values = {formValues}
        onInputChange = { onInputChange }
        onSubmit = { onSubmit }
      />
      {
        teamMembers.map(team => {
          return (
            <TeamMembers key = {team.id} details = {team} />
          );
        })
      }
    </div>
  );
}

export default App;
