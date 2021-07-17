import './style.sass'

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
      <div className="carousel-button-group">
        <button className="back" onClick={() => previous()} >&lt;</button>
        <button className="forth" onClick={() => next()} >&gt;</button>
      </div>
  );
};

export default ButtonGroup