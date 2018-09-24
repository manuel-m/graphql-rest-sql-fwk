const { buildSchema } = require('graphql');

export default buildSchema(`
    type Query {
        message: String
        items:[String]        
    }

`);
