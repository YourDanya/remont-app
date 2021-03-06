import './style.sass'

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className='container'>
      <div className="carousel-button-group">
        <button className="back" onClick={() => previous()} ></button>
        <button className="forth" onClick={() => next()} ></button>
      </div>
    </div>

  );
};

export default ButtonGroup