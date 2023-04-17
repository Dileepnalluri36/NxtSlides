import './index.css'

const EachSlide = props => {
  const {eachSlide, isActive, slideIndex, activeSlideChange} = props
  const {id, heading, description} = eachSlide

  const activeClassName = isActive ? 'active-bg' : ''
  const changeActiveSlide = () => {
    activeSlideChange(id)
  }

  return (
    <li
      onClick={changeActiveSlide}
      className={`each_slide_item ${activeClassName}`}
    >
      <p className="indexNum">{slideIndex}</p>
      <div className="slide_text_container">
        <h1 className="item_heading">{heading}</h1>
        <p className="desc">{description}</p>
      </div>
    </li>
  )
}

export default EachSlide
