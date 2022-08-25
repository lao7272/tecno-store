import { ItemCount } from "../ItemCount/ItemCount"

export const ItemListContainer = ({title}) => {
    return(
        <main>
            <h1>{title}</h1>
            <ItemCount stock={7} initial={1}/>
        </main>
    )
}