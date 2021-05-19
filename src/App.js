import { Navbar } from './components/Navbar'
import { HomePage } from './pages/Home'
import { DetailCountryPage } from './pages/DetailCountry'
import { GlobalStyle } from './globalStyle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'

export function App() {
   const { theme } = useTheme()
   return (
      <Router>
         <GlobalStyle theme={theme} />
         <Navbar />
         <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/detail/:name" exact component={DetailCountryPage} />
         </Switch>
      </Router>
   )
}
