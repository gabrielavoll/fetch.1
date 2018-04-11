const my_module = require('./index.js');
const base_test_url = 'https://gato333.github.io/testserver'

test('get, allows you to alter cookies by default', async () => {
	console.log('my_module', my_module.get);
 	const response = await my_module.get(base_test_url);
 	console.log('after get', response);
 	console.log('response', await response.json())
});