import { useContext, createContext } from 'react'
import { withRouter } from 'next/router'

const Context = createContext(null)

function Provider({ router, children }: any) {
  return <Context.Provider value={router}>{children}</Context.Provider>
}

export const useRouter = () => useContext(Context)
export const RouterContextProvider = withRouter(Provider)
