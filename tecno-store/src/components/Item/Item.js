import React from "react"
export const Item = ({item}) => {
    
    return(
        <>
            <div className="card border-primary mb-3 cardItem" >
                <div className="card-body ">
                    <img src={item.pictureUrl} alt={item.title}></img>
                </div>
                <div className="card-header"><h3>{item.title}</h3></div>

                <div className="card-body row">
                <h5>Precio: {item.price}</h5>
                </div>
                <div> 
                    <button key={item.id} className="btn btn-info " type="button">Info</button>
                </div>
            </div>
        </>
    )
}

