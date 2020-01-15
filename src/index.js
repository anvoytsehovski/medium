import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'


import Routes from './pages/routes'

const App = () => {
    return (
        <div>
            <h3>Welcome to React and Hooks</h3>
            <Router>
                <Routes />
            </Router>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));