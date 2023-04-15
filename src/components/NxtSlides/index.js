import {v4 as uuidv4} from 'uuid'
import './index.css'
import {Component} from 'react'
import EachSlide from '../EachSlide'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class NxtSlides extends Component {
  state = {
    activeSlide: initialSlidesList[0],
    isEditingHeading: false,
    isEditingDesc: false,
    slidesList: initialSlidesList,
  }

  activeSlideChange = id => {
    const {slidesList} = this.state
    const updatedActiveSlide = slidesList.filter(
      eachSlide => eachSlide.id === id,
    )
    this.setState({activeSlide: updatedActiveSlide[0]})
  }

  changeActiveSlideHeading = event => {
    const {activeSlide, slidesList} = this.state

    const updatedActiveSlide = {...activeSlide, heading: event.target.value}

    const updatedSlidesList = slidesList.map(eachSlide => {
      if (eachSlide.id === activeSlide.id) {
        return {...eachSlide, heading: event.target.value}
      }
      return eachSlide
    })
    this.setState({
      activeSlide: updatedActiveSlide,
      slidesList: updatedSlidesList,
    })
  }

  changeActiveSlideDesc = event => {
    const {activeSlide, slidesList} = this.state

    const updatedActiveSlide = {...activeSlide, description: event.target.value}
    this.setState({activeSlide: updatedActiveSlide})

    const updatedSlidesList = slidesList.map(eachSlide => {
      if (eachSlide.id === activeSlide.id) {
        return {...eachSlide, description: event.target.value}
      }
      return eachSlide
    })
    this.setState({
      activeSlide: updatedActiveSlide,
      slidesList: updatedSlidesList,
    })
  }

  changeTag = () => {
    this.setState(prevState => ({
      isEditingHeading: !prevState.isEditingHeading,
    }))
  }

  changeTagDesc = () => {
    this.setState(prevState => ({
      isEditingDesc: !prevState.isEditingDesc,
    }))
  }

  addNewSlide = () => {
    const {slidesList, activeSlide} = this.state

    const newSlide = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    const activeSlideIndex = slidesList.indexOf(activeSlide)

    const updatedSlidesList = slidesList.splice(
      activeSlideIndex + 1,
      0,
      newSlide,
    )

    this.setState({slidesList, activeSlide: newSlide})
  }

  render() {
    const {
      activeSlide,
      slidesList,
      isEditingHeading,
      isEditingDesc,
    } = this.state
    const {heading, description} = activeSlide
    return (
      <div className="main_container">
        <div className="header_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
            alt="nxt slides logo"
          />
          <h1 className="nxtWave-heading">Nxt Slides</h1>
        </div>
        <button onClick={this.addNewSlide} className="newButton" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
          />
          <p>New</p>
        </button>
        <div className="slides_container">
          <ul className="slides_list">
            {slidesList.map(eachSlide => (
              <EachSlide
                activeSlideChange={this.activeSlideChange}
                eachSlide={eachSlide}
                key={eachSlide.id}
              />
            ))}
          </ul>

          <div className="active_slide_container">
            {isEditingHeading ? (
              <input
                className="active_slide_heading"
                value={heading}
                onChange={this.changeActiveSlideHeading}
                onBlur={this.changeTag}
              />
            ) : (
              <p onClick={this.changeTag}>{heading}</p>
            )}

            {isEditingDesc ? (
              <input
                className="active_slide_desc"
                value={description}
                onChange={this.changeActiveSlideDesc}
                onBlur={this.changeTagDesc}
              />
            ) : (
              <p onClick={this.changeTagDesc}>{description}</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default NxtSlides
