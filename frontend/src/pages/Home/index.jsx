import { NavLink } from "react-router-dom"


import { useEffect, useState } from 'react'

export function Home () {


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

        <main>
            
            <div>
                <NavLink to='/division'>Adicionar Divisão de Treino</NavLink>
            </div>

            <div>
                <div>
                    <h2>Nome da Divisão</h2>
                    <p>Descrição da Divisão</p>
                </div>
                <div>
                    <button>
                        <img src="" alt="lixeira" />
                    </button>
                    <button>
                        <img src="" alt="editar" />
                    </button>
                </div>
            </div>
            {/* colocar um divider sempre que houver uma nova divisão menos na última */}

            <footer>
                {/* colocar detalhes do footer, talvez será um componente próprio, e o header também*/}
            </footer>

            <div>
                <h1>hello world</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" id="name" onChange={handleNameChange} placeholder='digite o nome' />

                    <button type="submit">Enviar</button>
                </form>

                <div>

                    {nameReturned.map(item => {
                        return <div key={item.id}>
                            <p>ID: {item.id}</p>
                            <p>NOME: {item.name} </p>
                        </div>
                    })}

                </div>
            </div>
        </main>
    )
}