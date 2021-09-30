

const Input = ({ input, setResult }) => {

    const handleClick = () => setResult(false)

    const totalInput = input.reduce((acc, product) => acc + product.quantity, 0)

    return (
        <>
            <button onClick={handleClick}>
                Mostrar saída
            </button>

            <h2> Entrada </h2>

            <ul>
                {input.map((product, index) => {
                    return <li  key={index}>
                        <h3>Nome: {product.name} </h3>
                        <p> Quantidade: {product.quantity} </p>
                        <p> Preço: {product.price} </p>
                    </li>
                } )}
            </ul>

            <p> Total de entrada de frutas = {totalInput} </p>
        </>
    )
}

export default Input;