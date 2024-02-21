import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="img-size" />
      <h1 className="name">{name}</h1>
      <p className="desc">{description}</p>
    </div>
  )
}

export default PlanetItem
