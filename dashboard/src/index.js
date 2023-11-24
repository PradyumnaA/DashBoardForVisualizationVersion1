import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import App from './App';
import './index.css'
import { ContextProvider } from './contexts/ContextProvider';
ReactDOM.render
(
<ContextProvider>
<App />
</ContextProvider>
, document.getElementById('root'));

