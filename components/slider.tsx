import { Box } from '@mui/material'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

function Slider() {
  const slides = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
  ]
  return (
    <Splide
      className="my-carousel"
      aria-label="My Favorite Images"
      options={{
        width: '100%',
        rewind: true,
        perPage: 3,
        gap: 10,
        breakpoints: {
          1400: {
            perpage: 5,
          },
          1200: {
            perPage: 4,
          },
          1015: {
            perPage: 3,
          },
          768: {
            perPage: 2,
          },
          576: {
            perPage: 1,
          },
        },
      }}
    >
      {slides.map((slide) => (
        <SplideSlide key={slide.id}>
          <Box
            bgcolor="lightslategray"
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {slide.id}
          </Box>
        </SplideSlide>
      ))}
    </Splide>
  )
}

export default Slider
