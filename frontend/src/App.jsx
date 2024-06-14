
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('')
  const [nameReturned, setNameReturned] = useState({})
  
  const handleNameChange = (event) => {
    setName(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    
  }

  const carregarDados = async () => {
    const url = "http://localhost:3333/exercise"

    try {
      const response = await fetch(url, {
        method: 'GET',
      })
      const data = await response.json()
      setNameReturned(data[0].name)
      console.log(JSON.stringify(data))
      /* [{"id":"f5f5f668-11be-4479-9791-95894089c855","name":"name 01"}] ele retorna assim, um array de objetos*/
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    carregarDados()
  }, )

  return (
    <>
      <main>
        <h1>hello world</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="name" onChange={handleNameChange} placeholder='digite o nome' />

          <button type="submit">Enviar</button>
        </form>
        <p>{nameReturned}</p>
      </main>
    </>
  )
}

export default App
