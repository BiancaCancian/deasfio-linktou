import React from 'react';
import './App.css'
import Header from './components/Header';
import Counter from './components/Counter';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Counter />
        </div>
    );
}

export default App;
