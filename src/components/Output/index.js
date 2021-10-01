

const Output = ({ output, setResult }) => {

    const handleClick = () => setResult(true)

    const totalQuantity = output.reduce((acc, product) => acc + product.quantity, 0)
    const totalPrice = output.reduce((acc, product) => acc + (product.price * product.quantity), 0)

    return (
        <div>
            <hr />
            <button onClick={handleClick}>  
                Mostrar entrada
            </button>
            
            <h2> Saída</h2>

            <ul>
                {output.map((product, index) => {
                    return <li>
                        <h3>Nome: {product.name} </h3>
                        <p> Quantidade: {product.quantity * -1} </p>
                        <p> Preço: R$ {product.price} </p>
                    </li>
                } )}
            </ul>

            <p> Total de frutas vendidas = {totalQuantity * -1} </p>
            <p> Valor total vendido = R$ {totalPrice * -1} </p>
            <hr />
        </div>
    )
}

export default Output;