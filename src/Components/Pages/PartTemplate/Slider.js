import Carousel from 'react-bootstrap/Carousel';
import bg_img from "../Images/bg.svg";

const Slider = () => {
  const Slide = [
    {
        id: 0,
        img: bg_img,
        head: "First slide label",
        Shead: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        id: 1,
        img: bg_img,
        head: "Second slide label",
        Shead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 2,
        img: bg_img,
        head: "Third slide label",
        Shead: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
];
// console.log(Slide);
  return (
    <Carousel className="carousel-main">
      {Slide.map((Slider) => (
      <Carousel.Item key={Slider.id}>
        <img
          className="d-block w-100"
          src={Slider.img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{Slider.head}</h3>
          <p>{Slider.Shead}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;