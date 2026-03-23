import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import AppAM from './AppAM.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppAM />
  </StrictMode>,
);
