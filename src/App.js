import { Navbar } from './components/Navbar'
import { HomePage } from './pages/Home'
import { DetailCountryPage } from './pages/DetailCountry'
import { GlobalStyle } from './globalStyle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

export function App() {
   return (
      <Provider store={store}>
         <Router>
            <GlobalStyle />
            <Navbar />
            <Switch>
               <Route path="/" exact component={HomePage} />
               <Route path="/detail/:name" exact component={DetailCountryPage} />
            </Switch>
         </Router>
      </Provider>
   )
}
