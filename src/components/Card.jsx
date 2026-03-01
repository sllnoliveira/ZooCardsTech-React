import "./Card.css"

function Card({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />

      <h2 className="card-title">{title}</h2>

      <p className="card-description">
        {description}
      </p>
      <button 
       className="card-button"
        onClick={() => alert(`Você clicou em ${title}`)}
    >
      Saiba mais
    </button>
    </div>
  )
}

export default Card