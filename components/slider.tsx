import { Box } from '@mui/material'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

function Slider() {
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
          1536: {
            perpage: 4,
          },
          1280: {
            perPage: 3,
          },
          990: {
            perPage: 2,
          },
          768: {
            perPage: 1,
          },
          526: {
            perPage: 1,
          },
        },
      }}
    >
      <SplideSlide>
        <Box
          bgcolor="lightslategray"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          1
        </Box>
      </SplideSlide>
      <SplideSlide>
        <Box
          bgcolor="blueviolet"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          2
        </Box>
      </SplideSlide>
      <SplideSlide>
        <Box
          bgcolor="darkred"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          3
        </Box>
      </SplideSlide>
      <SplideSlide>
        <Box
          bgcolor="violet"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          4
        </Box>
      </SplideSlide>
      <SplideSlide>
        <Box
          bgcolor="deepskyblue"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          5
        </Box>
      </SplideSlide>
      <SplideSlide>
        <Box
          bgcolor="chocolate"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          6
        </Box>
      </SplideSlide>
    </Splide>
  )
}

export default Slider
