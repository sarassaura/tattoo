import { Stack } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import { Router } from 'next/router'
import LinkItem from './link'

function MenuComponent({ router }: { router: Router }) {
  const { t } = useTranslation('common')
  return (
    <Stack direction="row" spacing="24px">
      <LinkItem
        href="/"
        name={t('menu.first')}
        path={router.asPath}
        locale={router.locale}
      />
      <LinkItem
        href="/trampos"
        name={t('menu.second')}
        path={router.asPath}
        locale={router.locale}
      />
      <LinkItem
        href="/contato"
        name={t('menu.third')}
        path={router.asPath}
        locale={router.locale}
      />
    </Stack>
  )
}

export default MenuComponent
