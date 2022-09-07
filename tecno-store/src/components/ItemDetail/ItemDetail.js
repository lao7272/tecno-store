import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({item}) => {
    const onAdd = (quantProd, reseve) => {
        console.log(`
            Cantidad de productos: ${quantProd}
            Stock restante: ${reseve}
        `)
    }
    return(
        <>
        <div key={item.id} className="card border-primary mb-3 cardItem" >
                <div className="card-header"><h3>{item.title}</h3></div>
                <div className="card-body ">
                    <img src={item.pictureUrl} alt={item.title}></img>
                </div>

                <div className="card-body row">
                    <h5>Precio: {item.price}</h5>
                    <ItemCount initial={item.quant} stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
            </>
    )
}
