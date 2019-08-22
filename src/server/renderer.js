import React from 'react'
import { renderToString } from 'react-dom/server'
//Render a React element to its initial HTML. React will return an HTML string.
// You can use this method to generate HTML on the server and send the markup down 
//on the initial request for faster page loads and to allow search engines to crawl 
//your pages for SEO purposes.

import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import Routes from '../client/Routes'
import serialize from 'serialize-javascript'
import { Helmet } from 'react-helmet'
 
export default (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={ context }>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    const helmet = Helmet.renderStatic();

    return `
    <html>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
    </head>
    <body>
        <div id = "root"> ${content} </div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script> 
        <script src="bundle.js"></script>
        <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin
        />
        
    </body>
    </html>
    `;
}