const express_graphql = require('express-graphql');

import itemsResolver from './resolvers/items.resolver.js';
import messageResolver from './resolvers/message.resolver.js';

import schema from './schema.js';

export default {
    plug(app_) {
        app_.use(
            '/gql',
            express_graphql({
                schema: schema,
                rootValue: {
                    items: itemsResolver,
                    message: messageResolver
                },
                graphiql: true
            })
        );
    }
};
