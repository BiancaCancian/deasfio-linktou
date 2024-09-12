import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter: React.FC = () => {
    // Carregar o valor do contador do localStorage ou usar 0 como valor inicial
    const [count, setCount] = useState<number>(() => {
        const savedCount = localStorage.getItem('counter');
        return savedCount ? parseInt(savedCount) : 0;
    });

    const [message, setMessage] = useState<string>(''); // Mensagem de erro

    // Atualizar o localStorage sempre que o contador mudar
    useEffect(() => {
        localStorage.setItem('counter', count.toString());
    }, [count]);

    const increment = () => {
        setMessage(''); // Limpar mensagem de erro ao incrementar
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setMessage(''); // Limpar mensagem de erro ao decrementar com sucesso
            setCount(count - 1);
        } else {
            setMessage('Valor inválido. O contador não pode ser menor que zero.'); // Exibir mensagem de erro
        }
    };

    const reset = () => {
        setMessage(''); // Limpar mensagem de erro ao resetar
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
            {message && <div className="error-message">{message}</div>} {/* Exibir mensagem de erro */}
        </div>
    );
};

export default Counter;

