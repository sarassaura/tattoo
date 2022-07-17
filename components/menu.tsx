import { Stack } from '@mui/material'
import { useTranslation } from 'next-i18next'
import LinkItem from './link'

function MenuComponent({ path }: { path: string }) {
  const { t, ready } = useTranslation('common')
  if (!ready) {
    return <div>loading translations...</div>
  }
  return (
    <Stack direction="row" spacing="24px">
      <LinkItem href="/" name={t('menu.first')} path={path} />
      <LinkItem href="/trampos" name={t('menu.second')} path={path} />
      <LinkItem href="/contato" name={t('menu.third')} path={path} />
    </Stack>
  )
}

export default MenuComponent
