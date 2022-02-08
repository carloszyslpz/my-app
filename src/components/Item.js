const item = ({ data }) => {
  return (
    <div className="card container">
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <img src={data.image} alt="producto" width={"150px"}></img>

        <h3 className="card-text">${data.price}</h3>
        <button type="button " className="btn btn-primary">
          Más Detalles
        </button>
      </div>
    </div>
  );
};

export default item;