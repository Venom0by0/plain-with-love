import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div>
      <div className="title-section">
        <p className="title-eyebrow">Discover India</p>
        <h2 className="title">Plan with Love</h2>
        <p className="title-sub">Handpicked destinations for the curious traveller</p>
        <div className="title-divider"></div>
      </div>
      <div className="cards">
        {tours.map((tour) => (
          <Card key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </div>
  );
}

export default Tours;