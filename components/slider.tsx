import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue'

function Slider() {
  return (
    <Splide aria-label="Testimonials Cards" tag="section">
      <SplideSlide>1</SplideSlide>
      <SplideSlide>2</SplideSlide>
    </Splide>
  )
}

export default Slider
