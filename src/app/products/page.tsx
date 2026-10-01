export default function Products() {
    
    const products = [
        {
            product: "masa elastica",
            precio: 12,
            descipcion: "producto de reposteria utilizado en el acompañamiento de postres para elaborar recetas más buenas"
        },
        {
            product: "masa elastica 2",
            precio: 11,
            descipcion: "producto de reposteria utilizado en el acompañamiento de postres para elaborar recetas más buenas"
        },
        {
            product: "masa elastica 3",
            precio: 10,
            descipcion: "producto de reposteria utilizado en el acompañamiento de postres para elaborar recetas más buenas"
        }
    ]

    return(
        <>
            <div>
                Productos pre-cargados:

                {
                    products.map((item) => (<div style={{display: 'inline-block', padding: '10px', margin: '5px', border: '1px solid #000'}}>Product: {item.product}</div>))
                }
            </div>
        </>
    )
}