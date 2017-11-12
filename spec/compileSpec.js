var refParser = require('json-schema-ref-parser');
var YAML = require('json2yaml');

refParser.bundle('index.yaml', function(err, schema) {
  if (err) {
    console.error(err);
  }
  else {
    console.log(YAML.stringify(schema));
  }
});
