import sql from '../sql/index.js';

export default {
    get: [
        {
            uri: '/items',
            fn: (req_, res_) => {
                sql.queries.items().then(items_ => {
                    res_.json(items_);
                });
            }
        },
        {
            uri: '/message',
            fn: (req_, res_) => {
                sql.queries.message().then(message_ => {
                    res_.json(message_);
                });
            }
        }
    ]
};
