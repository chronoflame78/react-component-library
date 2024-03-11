function CardItem(props) {
  const {itemName, logo} = props;

    return (
      <div className="card-item py-4">
        <div>
          {logo}
        </div>
        <div className="fr-20 font-weight-bold">
          {itemName}
        </div>
      </div>
    )
  }
  
export default CardItem