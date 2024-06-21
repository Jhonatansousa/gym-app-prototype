


export const Division = () => {

    return(

        <section>
            <div>
                <h1>Nome da Divisão</h1>
                <h4>Descrição da divisão</h4>
            </div>

            <div>
                {/* nome do exercício */}
                <h2>Supino Reto</h2>
                {/* botão para apagar o exercício */}
                <button>
                    <img src="" alt="imagem de lixo para apagar" />
                </button>
                {/* div com as séries */}
                <div className="colocar flex inline aqui">
                    <p>1.</p>
                    <div>
                        <label>Reps: </label>
                        <input type="number" placeholder="10"/>
                    </div>
                    <div>
                        <label>Carga: </label>
                        <input type="number" placeholder="xx/Kg" />
                    </div>

                </div>
            </div>
        </section>
    )
}