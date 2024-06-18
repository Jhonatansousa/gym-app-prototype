
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('')
  const [nameReturned, setNameReturned] = useState([])
  
  const handleNameChange = (event) => {
    setName(event.target.value)
  }


  const handleSubmit = async (event) => {
    event.preventDefault()

    const url = "http://localhost:3333/exercise"

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify({name})
      })
      if (response.ok) {
        console.log('Nome enviado com sucesso')
      } else {
        console.error('Erro ao enviar nome')
      }
    }
    catch (error) {
      console.log('Erro:', error)
    }

    
  }

  const carregarDados = async () => {
    const url = "http://localhost:3333/exercise"

    try {
      const response = await fetch(url, {
        method: 'GET',
      })
      const data = await response.json()
      // mandei o json completo pro usestate pra fazer um .map() no html
      setNameReturned(data)
      console.log(JSON.stringify(data))
      /* [{"id":"f5f5f668-11be-4479-9791-95894089c855","name":"name 01"}] ele retorna assim, um array de objetos*/
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    carregarDados()
  },[nameReturned] )

  return (
    <>
      <main>
        <h1>hello world</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="name" onChange={handleNameChange} placeholder='digite o nome' />

          <button type="submit">Enviar</button>
        </form>
        <div>

        {nameReturned.map(item => {
          // veriricar esse erro
          return <p key={item.id}>{item.name}</p>
        })}

        </div>
      </main>
    </>
  )
}

export default App
