import { render } from "react-dom";
import { App } from "app/App";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "app/providers/StoreProvider";
import { init, miniApp } from "@telegram-apps/sdk";


const initializeTelegramSDK = async () => {
    try {
        await init();


        if (miniApp.ready.isAvailable()) {
            await miniApp.ready();
            console.log('Mini App готово');
        }


    } catch (error) {
        console.error('Ошибка инициализации:', error);
    }
};


initializeTelegramSDK();


render(
    <StoreProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById("root"),
);
