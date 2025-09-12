import Head from 'next/head';
import React from 'react';

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Digima | Digital Marketing React NextJs Template"}
                </title>
                <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
                <meta name="description" content="Digital Marketing" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                
            </Head>
        </>
    );
};

export default PageHead;