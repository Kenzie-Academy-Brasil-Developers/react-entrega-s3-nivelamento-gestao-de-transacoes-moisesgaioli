

const TotalTransactions = ({ transactions }) => {

    return (

        <> 
            <h2> Total de transações</h2>
            <ul>
                {
                    transactions.map((product, index) => {
                        return <li key={index}>
                            <h3> Nome: {product.name} </h3>
                            <p> Quantidade: {product.quantity} </p>
                            <p> Preço: {product.price} </p>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default TotalTransactions;