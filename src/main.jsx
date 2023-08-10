import App from './App'
import ReactDOM from 'react-dom/client'
import "./main.css"

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>    
)
