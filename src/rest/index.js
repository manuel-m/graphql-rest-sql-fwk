const bodyParser = require('body-parser');

import routes from './routes.js';

export default {
    plug(app_, router_) {
        app_.use(bodyParser.urlencoded({ extended: true }));
        app_.use(bodyParser.json());

        routes.get.forEach(route_ => {
            router_.route(route_.uri).get(route_.fn);
        });

        app_.use('/api', router_);
    }
};
