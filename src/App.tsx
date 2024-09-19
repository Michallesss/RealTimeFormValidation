import { useState, FormEvent } from 'react'
import './App.css'

function App() {
  function Submit(e: FormEvent) {
    e.preventDefault();
  }

  function Imie(e: any) {
    const value = e.target.value;
  }

  function Nazwisko(e: any) {
    const value = e.target.value;
  }

  function Email(e: any) {
    const value = e.target.value;
  }

  const [password2, setPassword2] = useState<string>('');
  function Password(e: any) {
    const value = e.target.value;
  }

  function Wiek(e: any) {
    const value = e.target.value;

  }

  function DataUrodzenia(e: any) {
    const value = e.target.value;
  }

  function Kraj(e: any) {
    const value = e.target.value;
  }

  return (
    <form onSubmit={(e) => Submit(e)}>
      <div>
        <label htmlFor='imie'>Imię:</label>
        <input type='text' onChange={(e) => Imie(e)} id='imie' />
      </div>

      <div>
        <label htmlFor='nazwisko'>Imię:</label>
        <input type='text' onChange={(e) => Nazwisko(e)} id='nazwisko' />
      </div>

      <div>
        <label htmlFor='email'>Email:</label>
        <input type='text' onChange={(e) => Email(e)} id='email' />
      </div>

      <div>
        <label htmlFor='password'>Hasło:</label>
        <input type='text' onChange={(e) => Password(e)} id='password' />
      </div>

      <div>
        <label htmlFor='password2'>Potwierdź hasło:</label>
        <input type='password' value={password2} onChange={(e) => setPassword2(e.target.value)} id='password2' />
      </div>

      <div>
        <label htmlFor='wiek'>Wiek:</label>
        <input type='number' onChange={(e) => Wiek(e)} id='wiek' />
      </div>

      <div>
        <label htmlFor='data'>Data urodzenia:</label>
        <input type='date' onChange={(e) => DataUrodzenia(e)} id='data' />
      </div>

      <div>
        <label htmlFor='kraj'>Kraj:</label>
        <select onChange={(e) => Kraj(e)} id='kraj'>
        </select>
      </div>

      <div>
        <label htmlFor='marketing'>Zgoda na marketing:</label>
        <input type='checkbox' id='marketing' />
      </div>

      <div>
        <label htmlFor='regulamin'>Regulamin:</label>
        <input type='checkbox' id='regulamin' />
      </div>

      <button type='submit'>Wyślij</button>
    </form>
  )
}

export default App
