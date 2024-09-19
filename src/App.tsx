import { useState, useEffect } from 'react';

function App() {
  const [check, setCheck] = useState<boolean>(false);

  // Imie
  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const Name = () => {
    if (!check) return;

    const min = /.{3,}/;
    const zwykle = /^[a-zA-Z]+$/;

    if (!name.match(min))
      setNameError('Imie musi mieć minimalnie 3 cyfry');

    if (!name.match(zwykle)) 
      setNameError('Imie musi składać sie tylko z zwykłych znaków');
  };
  useEffect(Name, [name]);

  // Nazwisko 
  const [surname, setSurname] = useState<string>('');
  const [surnameError, setSurnameError] = useState<string>('');
  const Surname = () => {};
  useEffect(Surname, [surname]);
  
  // Email 
  
  // Hasło

  // Wiek

  // Data urodzenia

  // Kraj

  // Marketing

  // Regulamin

  return (
    <form onSubmit={() => setCheck(true)}>
      <div>
        <label htmlFor='imie'>Imię:</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} id='imie' />
        <p>{nameError}</p>
      </div>

      <div>
        <label htmlFor='nazwisko'>Imię:</label>
        <input type='text' value={surname} onChange={(e) => setSurname(e.target.value)} id='nazwisko' />
        <p>{surnameError}</p>
      </div>

      <div>
        <label htmlFor='email'>Email:</label>
        <input type='text' id='email' />
        <p>{}</p>
      </div>

      <div>
        <label htmlFor='password'>Hasło:</label>
        <input type='text' id='password' />
        <p>{}</p>
      </div>

      <div>
        <label htmlFor='password2'>Potwierdź hasło:</label>
        <input type='password' id='password2' />
        <p>{}</p>
      </div>

      <div>
        <label htmlFor='wiek'>Wiek:</label>
        <input type='number' id='wiek' />
        <p>{}</p>
      </div>

      <div>
        <label htmlFor='data'>Data urodzenia:</label>
        <input type='date' id='data' />
        <p>{}</p>
      </div>

      <div>
        <label htmlFor='kraj'>Kraj:</label>
        <select id='kraj'>
        </select>
        <p>{}</p>
      </div>

      <div>
        <label htmlFor='marketing'>Zgoda na marketing:</label>
        <input type='checkbox' id='marketing' />
        <p>{}</p>
      </div>

      <div>
        <label htmlFor='regulamin'>Regulamin:</label>
        <input type='checkbox' id='regulamin' />
        <p>{}</p>
      </div>

      <button type='submit'>Wyślij</button>
    </form>
  )
}

export default App
