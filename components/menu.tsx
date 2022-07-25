import { Stack } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import LinkItem from './link'

function MenuComponent({ router }: { router: string }) {
  const { t } = useTranslation('common')
  return (
    <Stack direction="row" spacing="24px">
      <LinkItem href="/" name={t('menu.first')} path={router} />
      <LinkItem href="/works" name={t('menu.second')} path={router} />
      <LinkItem href="/contato" name={t('menu.third')} path={router} />
    </Stack>
  )
}

export default MenuComponent
