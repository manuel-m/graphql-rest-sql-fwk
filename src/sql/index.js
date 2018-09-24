import items from './queries/items.query';
import message from './queries/message.query';

export default {
    init() {
        console.log('sql init');
    },
    queries: {
        items: items,
        message: message
    }
};
