

const TotalTransactions = ({ transactions }) => {

    return (

        <div>
            <hr />
            <h2> Total de transações</h2>
            <ul>
                {
                    transactions.map((product, index) => {
                        return <li key={index}>
                            <h3> Nome: {product.name} </h3>
                            <p> Quantidade: {product.quantity} </p>
                            <p> Preço: R$ {product.price} </p>
                            <hr />
                        </li>
                    })
                }
            </ul>
            
        </div>
    )
}

export default TotalTransactions;