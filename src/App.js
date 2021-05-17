import { Fragment } from 'react'
import { Navbar } from './components/Navbar'
import { HomePage } from './pages/Home'
import { GlobalStyle } from './globalStyle'

export function App() {
   return (
      <Fragment>
         <GlobalStyle />
         <Navbar />
         <HomePage />
      </Fragment>
   )
}
