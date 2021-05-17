import { Navbar } from './components/Navbar'
import { HomePage } from './pages/Home'
import { DetailCountryPage } from './pages/DetailCountry'
import { GlobalStyle } from './globalStyle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export function App() {
   return (
      <Router>
         <GlobalStyle />
         <Navbar />
         <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/detail" exact component={DetailCountryPage} />
         </Switch>
      </Router>
   )
}
