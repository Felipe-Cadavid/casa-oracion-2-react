import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../components/Navbar';
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

describe('Navbar', () => {
    test('Navbar renders correctly', () => {
        const component = render(<BrowserRouter><Navbar /></BrowserRouter>)
    });
    test('Click on collapse button switches the navbar', () => {
        const component = render(<BrowserRouter><Navbar /></BrowserRouter>)
        const buttonEl = component.getByTestId('navbar__button');
        const listItemEl = component.getByTestId('navbar__item');

        expect(listItemEl).toBeInTheDocument();

        fireEvent.click(buttonEl);

        expect(listItemEl).not.toBeInTheDocument();
    })
});
