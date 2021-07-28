import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import Footer from '../../components/Footer';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom';

afterEach(cleanup);
describe('Footer', () => {
    
    test("Footer renders", () => {
        const component = render(<Footer/>);
    }) 
    test("Renders title correclty", () => {
        const {getByTestId} = render(<Footer/>);
        expect(getByTestId('footer__title')).toHaveTextContent("Casa de Oración y Puerta del Cielo");
    });
    
    test("Renders buttons correcty", () => {
        const {getByTestId} = render(<Footer/>)
        expect(getByTestId('footer__social')).toBeInTheDocument();
    })
});