import React from 'react';

const tg = window.Telegram.WebApp;

function App() {

    const onClose = () => {
        tg.close();
    }

  return (
    <>
      TEST
        <button onClick={onClose}>CLOSE</button>
    </>
  );
}

export default App;
