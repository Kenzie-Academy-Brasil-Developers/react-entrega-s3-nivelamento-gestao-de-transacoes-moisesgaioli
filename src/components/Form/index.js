import { useState } from "react";


const Form = ({ transactions, setTransactions, input, setInput, output, setOutput }) => {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    const handleClick = () => {

        const product = {
            name: name,
            quantity: Number(quantity),
            price: Number(price),
        }

        setTransactions([...transactions, product]);

        quantity < 0 ? setOutput([...output, product]) : setInput([...input, product]);
    }

    return (
        <div>
            <input placeholder="Nome" onChange={e => setName(e.target.value)} />
            <input type="number" placeholder="Quantidade" onChange={e => setQuantity(e.target.value)} />
            <input type="number" placeholder="Preço" onChange={e => setPrice(e.target.value)} />
            <button onClick={handleClick}> Confirmar </button>
        </div>
    )
}

export default Form;