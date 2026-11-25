/// <reference types="@olegpolyakov/frontend" />

import { createRoot } from 'react-dom/client';

import { Provider } from '@olegpolyakov/ui';

import App from './app';

import './index.scss';

createRoot(document.getElementById('root')!).render(
    <Provider>
        <App />
    </Provider>
);