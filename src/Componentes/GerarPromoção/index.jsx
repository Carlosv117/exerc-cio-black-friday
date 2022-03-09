

export const GerarPromoção = ({ setPromocaoGerada, products }) => {

    const handleClick = () => {

        const produto = products.find((product) => product.id === Math.floor(Math.random() * (products.length + 1 - 1)) + 1)
        const promocao = (Math.floor(Math.random() * (90 - 40)) + 40) / 100
        console.log(produto, promocao)

        produto.price = produto.price * promocao

        console.log(produto)
        // setPromocaoGerada(produto)

    }

    return (
        <>
            <button onClick={() => handleClick()}>Gerar Promoção</button>
        </>
    )
}