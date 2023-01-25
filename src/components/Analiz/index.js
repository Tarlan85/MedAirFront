import React from 'react';
import AnalizTable from './AnalizTable';
import Bottons from './components/Bottons';
import ModalAnaliz from './components/ModalAnaliz';
import { AnalizProvider } from './context';

const index = () => {
    return (
        <AnalizProvider>
            <Bottons />
            <ModalAnaliz />
            <AnalizTable />
        </AnalizProvider>
    );
};

export default index;