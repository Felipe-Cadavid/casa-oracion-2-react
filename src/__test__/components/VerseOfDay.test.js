import React from 'react';
import ReactDOM from 'react-dom';
import VerseOfDay from '../../components/VerseOfDay';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('Verse Of Day Component', () => {
    test('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<VerseOfDay/>, div);
    });
    
});
