


export const Home = () => {


    return (

        <main>
            <header>
                <h1>WorkoutTracker</h1>
                <h4>Your journey to strength, rep by rep.</h4>
            </header>
            <div>
                <button>Adicionar Divisão de Treino</button>
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
        </main>
    )
}