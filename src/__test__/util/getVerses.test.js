import React from 'react';
import ReactDOM from 'react-dom';
import getVerses from '../../util/getVerses';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom';

afterEach(cleanup);

jest.setTimeout(10000);

describe('getVerses', () => {
    test('Promise returns verses', () => {
        getVerses()
            .then(query => {
                expect(query).toBeDefined();
            })
            .catch(error => {
                console.log('fail: ', error);
            })
    });

    test('Promise', () => {
        const query = getVerses();
        expect(query).toBeDefined();
    });
    
});
