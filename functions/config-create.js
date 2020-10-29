import faunadb from 'faunadb';
import { v5 as uuidv5 } from 'uuid'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});

/* export our lambda function as named "handler" export */
exports.handler = (event, context, callback) => {
  const created = Date.now();
  const uuid = uuidv5('LPD8-Editor', `000${created.toString()}`.split(''));

  const initial = {
    data: {
      '__key__': uuid,
      created,
      device: 'LPD8',
      banks: {
        'initial': {
          created,
          'data': 'List with LPD8 data'
        }
      }
    }
  }

  /* construct the fauna query */
  return client.query(q.Create(q.Ref("classes/configs"), initial))
  .then((response) => {
    /* Success! return the response with statusCode 200 */
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(response.data)
    })
  }).catch((error) => {
    /* Error! return the error with statusCode 400 */
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    })
  })
}