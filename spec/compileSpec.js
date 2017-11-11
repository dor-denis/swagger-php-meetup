var refParser = require('json-schema-ref-parser');

refParser.bundle('index.yaml', function(err, schema) {
  if (err) {
    console.error(err);
  }
  else {
    console.log(JSON.stringify(schema, null, 2));
  }
});
