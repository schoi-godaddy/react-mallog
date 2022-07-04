import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from '@schoi-godaddy/react-mallog';

function App() {
  return (
    <Form
      onCheckBoxChange={(e) => console.log(e)}
      onEmailChange={(e) => console.log(e)}
      onFormSubmit={(e) => console.log(e)}
      onPasswordChange={(e) => console.log(e)}
      onSignInClick={(e) => console.log(e)}
    />
  );
}

export default App;
