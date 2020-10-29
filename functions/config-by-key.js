import faunadb from 'faunadb';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});

/* export our lambda function as named "handler" export */
exports.handler = (event, context, callback) => {
  const key = JSON.parse(event.body).key;

  /* construct the fauna query */
  return client.query(q.Map(
    q.Paginate(
      q.Match(
        q.Index('config_by_key'),
        key,
      )
    ),
    q.Lambda("X", q.Get(q.Var("X")))
  )).then((response) => {
    /* Success! return the response with statusCode 200 */
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(response.data[0].data)
    })
  }).catch((error) => {
    console.log(error);
    /* Error! return the error with statusCode 400 */
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    })
  });
}