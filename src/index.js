import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from "./components/layout"
import './styles/reset.css';
import './styles/style.scss';

ReactDOM.render(
    <React.StrictMode>
        <Layout>
        </Layout>
    </React.StrictMode>,
    document.getElementById('root')
);