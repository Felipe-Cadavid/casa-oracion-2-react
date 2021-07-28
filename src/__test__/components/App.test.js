import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../components/App';
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import App from '../../components/App';

afterEach(cleanup);

describe('App', () => {
    test('App renders correctly', () => {
        const component = render(<App/>);
    });
    
});
