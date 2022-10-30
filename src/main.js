/* global context */
import * as React from 'react';
import {Document as RootDocument, Page, render} from 'react-sketchapp';

import App from './App';

const pages = [
    {
        name: 'App',
        component: App,
    },
];

const Document = () => (
    <RootDocument>
        {pages.map(({name, component: Component}) => (
            <Page name={name}>
                <Component/>
            </Page>
        ))}
    </RootDocument>
);

export default () => {
    const data = context.document.documentData();
    const pages = context.document.pages();

    data.setCurrentPage(pages.firstObject());

    render(<Document/>);
};
