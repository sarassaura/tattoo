/** @jsxImportSource @emotion/react */
import { Box } from '@mui/material'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { Grid } from '@splidejs/splide-extension-grid'
import { css } from '@emotion/react'
import '@splidejs/react-splide/css/skyblue'

function Slider() {
  const slides = [
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
    { id: 12 },
  ]
  return (
    <Splide
      className="my-carousel"
      aria-label="My Favorite Images"
      extensions={{ Grid }}
      css={{
        width: '100%',
        '& .splide__pagination__page.is-active': {
          background: '#7E0000',
        },
        '& .splide__pagination__page:hover': {
          background: '#7E0000',
        },
        '& .splide__arrow svg': {
          fill: '#fff',
        },
        '& .splide__arrows:selection': {
          color: '#fff',
          background: '#fff',
        },
        '& .splide__arrow:hover:not(:disabled) svg': {
          fill: '#7E0000',
        },
      }}
      options={{
        grid: {
          rows: 1,
          cols: 1,
          gap: {
            row: '1rem',
            col: '1.5rem',
          },
        },
        rewind: true,
        perPage: 3,
        perMove: 1,
        start: 2,
        autoplay: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        gap: 20,
        padding: '4rem',
        breakpoints: {
          1400: {
            perpage: 5,
            grid: {
              rows: 2,
            },
          },
          1200: {
            perPage: 3,
            grid: {
              rows: 2,
            },
          },
          1015: {
            perPage: 3,
            grid: {
              rows: 2,
            },
          },
          768: {
            perPage: 2,
          },
          576: {
            perPage: 1,
            grid: {
              rows: 2,
            },
          },
          400: {
            perPage: 1,
            grid: false,
          },
        },
      }}
      hasTrack={false}
    >
      <SplideTrack
        css={css`
          height: calc(100% - 28px);
        `}
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <Box
              bgcolor="lightslategray"
              width="100%"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {slide.id}
            </Box>
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  )
}

export default Slider
