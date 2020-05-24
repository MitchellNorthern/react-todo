import React from 'react';
import Header from './components/core/layout/Header'
import Body from './components/core/layout/Body'
import Footer from './components/core/layout/Footer'

const App = () => {
    return (
        <div className="site-grid">
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    )
}

export default App