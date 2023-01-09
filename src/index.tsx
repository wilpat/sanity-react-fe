import { App } from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'

import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<Router>
  <App />
</Router>)


// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>
//   , document.getElementById('root')); 