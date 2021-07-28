import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

describe('Header', () => {
    test('Header title renders correctly', () => {
        const component = render(<BrowserRouter><Header/></BrowserRouter>);
        const headerTitle = component.getByTestId("header__title");
        
        expect(headerTitle.textContent).toBe('Casa de Oración y Puerta del Cielo');
    });
});
