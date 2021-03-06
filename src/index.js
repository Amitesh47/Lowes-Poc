import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
import renderer from './server/renderer'
import createStore from './server/createStore'


const app = express();

app.use(express.static('public'));
//It tells express that the files inside the public dir are accessible to outside world
//i.e. the bundle.js file of client is sent along the html doc sent by the server

app.get('*', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    }).map(promise => {
        if(promise){
            return new Promise((resolve,reject) => {
                promise.then(resolve).catch(resolve);
            });
        }
    })

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        if(context.url){
            return res.redirect(301, context.url);
        }

        if(context.notFound){
            res.status(404);
        }

        res.send(content)
    })

})

app.listen(3000, () => {
    console.log("Listening to port 3000")
})