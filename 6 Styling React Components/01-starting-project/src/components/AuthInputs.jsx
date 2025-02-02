import { useState } from 'react';
import Button from './Button';
import Input from './Input';

export default function AuthInputs() {
   const [enteredEmail, setEnteredEmail] = useState('');
   const [enteredPassword, setEnteredPassword] = useState('');
   const [submitted, setSubmitted] = useState(false);

   function handleInputChange(identifier, value) {
      if (identifier === 'email') {
         setEnteredEmail(value);
      } else {
         setEnteredPassword(value);
      }
   }

   function handleLogin() {
      setSubmitted(true);
   }

   const emailNotValid = submitted && !enteredEmail.includes('@');
   const passwordNotValid = submitted && enteredPassword.trim().length < 6;

   return (
      <div
         id="auth-inputs"
         className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800"
      >
         <div className="flex flex-col gap-2 mb-6">
            <Input
               label="Email"
               type="email"
               invalid={emailNotValid}
               onChange={(event) =>
                  handleInputChange('email', event.target.value)
               }
               // style={{
               //    backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db',
               // }}
               // className={emailNotValid ? 'invalid' : undefined}
            />

            <Input
               invalid={passwordNotValid}
               label="Passwrod"
               type="password"
               onChange={(event) =>
                  handleInputChange('password', event.target.value)
               }
               // className={passwordNotValid ? 'invalid' : undefined}
            />
         </div>
         <div className="actions">
            <button type="button" className="text-button">
               Create a new account
            </button>
            <Button onClick={handleLogin}>Sign In</Button>
         </div>
      </div>
   );
}

/*
import { styled } from 'styled-components';

const ControlContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
   margin-bottom: 1.5rem;
`;
*/
