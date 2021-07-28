import React from 'react';
import NoticiasSection from '../../components/NoticiasSection';
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('NoticiasSection', () => {
    test('Renders without crashing', () => {
        const component = render(<NoticiasSection/>);
    });
});
