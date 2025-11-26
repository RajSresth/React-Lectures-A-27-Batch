const Card = (props) =>{

    const {name,description,image, price} = props.item;
  

    return <div className="card">
                <div className="profile">
                    <img src={image} alt="" />
                </div>
                <div className="info">
                    <div className="content">
                        <h2>Product Name:{name}</h2>
                        <h4>Description:{description.split(" ").slice(0,2).join(" ")}</h4>
                        <h5>Price:{price}</h5>     
                    </div>           
                    <button>Order Now</button>
                </div>
            </div>
}

export default Card;