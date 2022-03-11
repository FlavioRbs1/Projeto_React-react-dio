import { Children, useState } from "react";

const Card = () =>{

    const [valor, setValor] = useState(0)

    function Adicionar(){
        setValor(valor + 1)
    }

    function Subtrair(){
        setValor(valor - 1)
    }

    return(
        <div className="card">
            <h5 className="card-header">Meu Primeiro Card</h5>
            <div className="card-body">
                <button 
                    className="btn btn-success"
                    onClick={Adicionar}
                >
                        Adicionar
                </button>
                <button 
                    className="btn btn-danger"
                    onClick={Subtrair}
                >
                        Remover
                </button>
                <p>{valor}</p>
            </div>
         </div>
    )
}
export default Card;