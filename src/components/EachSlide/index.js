import './index.css'

const EachSlide = props => {
  const {eachSlide, activeSlideChange} = props
  const {id, heading, description} = eachSlide

  const changeActiveSlide = () => {
    activeSlideChange(id)
  }

  return (
    <li onClick={changeActiveSlide} className="each_slide_item">
      <h1 className="item_heading">{heading}</h1>
      <p>{description}</p>
    </li>
  )
}

export default EachSlide
