import React from "react"
export const Item = ({item}) => {
    
    return(
        <>
            <div key={item.id} className="card border-primary mb-3 m-3 cardItem" >
                <div className="card-header"><h3>{item.title}</h3></div>
                <div className="card-body ">
                    <img src={item.pictureUrl} alt={item.title}></img>
                </div>

                <div className="card-body row">
                <h5>Precio: ${item.price}</h5>
                </div>
                <div> 
                    <button  className="btn btn-info " type="button">Info</button>
                </div>
            </div>
        </>
    )
}

