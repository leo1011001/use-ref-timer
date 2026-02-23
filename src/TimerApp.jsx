import React, { useState, useRef } from 'react';

function TimerApp() {
  const [time, setTime] = useState(0); // Държи текущото време
  const intervalRef = useRef(null); // Референтен достъп до интервала

  // Функция за стартиране на таймера
  const startTimer = () => {
    // Проверка дали вече има активен интервал
    if (intervalRef.current === null) {
      // Създаване на нов интервал
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  // Функция за пауза на таймера
  const pauseTimer = () => {
    // Спиране на активния интервал
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Функция за нулиране на таймера
  const resetTimer = () => {
    // Спиране на интервала
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    // Нулиране на времето
    setTime(0);
  };

  return (
    <div style={{ 
      textAlign: 'center', 
      marginTop: '50px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Таймер: {time} сек</h1>
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={startTimer}
          style={{
            margin: '0 10px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Старт
        </button>
        <button 
          onClick={pauseTimer}
          style={{
            margin: '0 10px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Пауза
        </button>
        <button 
          onClick={resetTimer}
          style={{
            margin: '0 10px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#008CBA',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Нулиране
        </button>
      </div>
    </div>
  );
}

export default TimerApp;