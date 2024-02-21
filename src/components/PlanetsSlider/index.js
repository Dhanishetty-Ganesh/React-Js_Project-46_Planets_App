import {Component} from 'react'
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    return (
      <div className="planet-app-container">
        <h1 className="heading" data-testid="planets">
          PLANETS
        </h1>
        <Slider>
          {planetsList.map(eachPlanet => (
            <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default PlanetsSlider
