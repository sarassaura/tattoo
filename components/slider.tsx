import { Box, Typography } from '@mui/material'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Grid } from '@splidejs/splide-extension-grid'
import { useTranslation } from 'next-i18next'
import React from 'react'

interface cardProp {
  id: number
  text: string
}

function Slider() {
  const { t } = useTranslation('common')
  const cards: cardProp[] = t('cards', { returnObjects: true })
  return (
    <Splide
      className="my-carousel"
      aria-label="My Favorite Images"
      extensions={{ Grid }}
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
    >
      {Array.isArray(cards) &&
        cards.length > 0 &&
        cards.map((card) => (
          <SplideSlide key={card.id}>
            <Box
              width="100%"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              padding={3}
            >
              <Typography>{card.text}</Typography>
            </Box>
          </SplideSlide>
        ))}
    </Splide>
  )
}

export default Slider
