//Call the function to get hte data
var options = {
    uri: '',
    qs:{
        'api-key' : '204fb41a-0bd3-41e0-83b5-622ec95feb02'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

module.exports = options;