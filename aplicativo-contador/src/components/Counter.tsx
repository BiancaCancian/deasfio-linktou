import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(() => {
        const savedCount = localStorage.getItem('counter');
        return savedCount ? parseInt(savedCount) : 0;
    });

    const [message, setMessage] = useState<string>(''); 

    
    useEffect(() => {
        localStorage.setItem('counter', count.toString());
    }, [count]);

    const increment = () => {
        setMessage(''); 
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setMessage(''); 
            setCount(count - 1);
        } else {
            setMessage('Valor inválido. O contador não pode ser menor que zero.'); 
        }
    };

    const reset = () => {
        setMessage(''); 
        setCount(0);
    };

    return (
        <div className="counter-container">
            <div className="counter-value">{count}</div>
            <div className="counter-buttons">
                <button className="incrementar" onClick={increment}>Incrementar</button>
                <button className="decrementar" onClick={decrement}>Decrementar</button>
            </div>
            <button className="resetar" onClick={reset}>Resetar</button>
            {message && <div className="error-message">{message}</div>} 
        </div>
    );
};

export default Counter;

