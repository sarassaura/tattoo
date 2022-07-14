/** @jsxImportSource @emotion/react */
import { Box, Typography } from '@mui/material'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { Grid } from '@splidejs/splide-extension-grid'
import { css } from '@emotion/react'
import '@splidejs/react-splide/css/skyblue'
import { useTranslation } from 'next-i18next'

interface CardProps {
  id: number
  text: string
}

function Slider() {
  const { t } = useTranslation('slider')
  const cards = t<string, CardProps[]>('cards', {
    returnObjects: true,
  })
  return (
    <Splide
      className="my-carousel"
      aria-label="My Favorite Images"
      extensions={{ Grid }}
      css={{
        width: '100%',
        '& .splide__pagination__page': {
          height: '12px',
          width: '12px',
          margin: '10px 15px',
        },
        '& .splide__pagination__page.is-active': {
          background: '#7E0000',
        },
        '& .splide__pagination__page:hover': {
          background: '#7E0000',
        },
        '& .splide__arrow svg': {
          fill: '#DAE4E9',
        },
        '& .splide__arrows:selection': {
          color: '#DAE4E9',
          background: '#DAE4E9',
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
            row: '0.5rem',
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
              rows: 3,
            },
          },
          1015: {
            perPage: 3,
            grid: {
              rows: 3,
            },
          },
          768: {
            perPage: 2,
            grid: {
              rows: 3,
            },
          },
          576: {
            perPage: 1,
            grid: {
              rows: 3,
            },
          },
          400: {
            perPage: 1,
            grid: {
              rows: 2,
            },
          },
        },
      }}
      hasTrack={false}
    >
      <SplideTrack
        css={css`
          height: calc(100% - 64px);
        `}
      >
        {Array.isArray(cards) &&
          cards.map((slide) => (
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
