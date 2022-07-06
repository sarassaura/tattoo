/** @jsxImportSource @emotion/react */
import { Box, Typography } from '@mui/material'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { Grid } from '@splidejs/splide-extension-grid'
import { css } from '@emotion/react'
import '@splidejs/react-splide/css/skyblue'
import { textCards } from '../constants/text'

function Slider() {
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
        {textCards.map((slide) => (
          <SplideSlide key={slide.id}>
            <Box
              width="100%"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              padding={3}
            >
              <Typography>{slide.text}</Typography>
            </Box>
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  )
}

export default Slider
