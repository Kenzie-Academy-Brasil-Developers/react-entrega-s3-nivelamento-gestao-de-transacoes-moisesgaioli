

const Input = ({ input, setResult }) => {

    const handleClick = () => setResult(false)

    const totalInput = input.reduce((acc, product) => acc + product.quantity, 0)

    return (
        <div>
            <hr />
            <button onClick={handleClick}>
                Mostrar saída
            </button>

            <h2> Entrada </h2>

            <ul>
                {input.map((product, index) => {
                    return <li  key={index}>
                        <h3>Nome: {product.name} </h3>
                        <p> Quantidade: {product.quantity} </p>
                        <p> Preço: R$ {product.price} </p>
                    </li>
                } )}
            </ul>

            <p> Total de entrada de frutas = {totalInput} </p>
            <hr />
        </div>
    )
}

export default Input;