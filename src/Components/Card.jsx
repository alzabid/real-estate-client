import "../Components/Card.css"

const Card = () => {
    return (
      <div className="card">
        <div className="content">
          <p className="heading">Card Hover Effect</p>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            laboriosam at voluptas minus culpa deserunt delectus sapiente
            inventore pariatur
          </p>
          <button className="btn">Read more</button>
        </div>
      </div>
    );
};

export default Card;