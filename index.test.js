const my_module = require('./index.js');
const base_test_url = 'http://localhost:3001/api'
//const base_test_url = 'https://desolate-anchorage-36928.herokuapp.com/api';

const test_body = { "planet": "Earth", "age": 4543000000, "radius": 3959, "weight": "5.972 x 10^24 kg" };

function getCookie(source="", cname) {
  var name = cname + "=";
  var ca = source.split(';');
  for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

test('get, allows you to alter cookies by default', async () => {
	const initial = await my_module.get(base_test_url + '/do-nothing');

 	expect(initial.ok).toBe(true)
 	var initCookies = initial.headers._headers['set-cookie'] ? initial.headers._headers['set-cookie'][0] : undefined;
 	expect(getCookie(initCookies, 'getCookie')).toBe("");

 	const response = await my_module.get(base_test_url);

 	expect(response.ok).toBe(true);
 	var responseCookies = response.headers._headers['set-cookie'] ? response.headers._headers['set-cookie'][0] : undefined;

 	expect(getCookie(responseCookies, 'getCookie')).not.toBe("");
 	expect(getCookie(initCookies, 'getCookie')).not.toBe(getCookie(responseCookies, 'getCookie'))
 	expect(parseInt(getCookie(responseCookies, 'getCookie'))).toBeGreaterThanOrEqual(1);
});
test('post, allows you to alter cookies by default', async () => {
  const initial = await my_module.get(base_test_url + '/do-nothing');

 	expect(initial.ok).toBe(true)
 	var initCookies = initial.headers._headers['set-cookie'] ? initial.headers._headers['set-cookie'][0] : undefined;
 	expect(getCookie(initCookies, 'postCookie')).toBe("");

 	const response = await my_module.post(base_test_url, test_body);

 	expect(response.ok).toBe(true);
 	var responseCookies = response.headers._headers['set-cookie'] ? response.headers._headers['set-cookie'][0] : undefined;

 	expect(getCookie(responseCookies, 'postCookie')).not.toBe("");
 	expect(getCookie(initCookies, 'postCookie')).not.toBe(getCookie(responseCookies, 'postCookie'))
 	expect(parseInt(getCookie(responseCookies, 'postCookie'))).toBeGreaterThanOrEqual(1);

  var responseBody = await response.json();
  expect(responseBody).toEqual(test_body);
});
test('put, allows you to alter cookies by default', async () => {
  const initial = await my_module.get(base_test_url + '/do-nothing');

 	expect(initial.ok).toBe(true)
 	var initCookies = initial.headers._headers['set-cookie'] ? initial.headers._headers['set-cookie'][0] : undefined;
 	expect(getCookie(initCookies, 'putCookie')).toBe("");

 	const response = await my_module.put(base_test_url, test_body);

 	expect(response.ok).toBe(true);
 	var responseCookies = response.headers._headers['set-cookie'] ? response.headers._headers['set-cookie'][0] : undefined;

 	expect(getCookie(responseCookies, 'putCookie')).not.toBe("");
 	expect(getCookie(initCookies, 'putCookie')).not.toBe(getCookie(responseCookies, 'putCookie'))
 	expect(parseInt(getCookie(responseCookies, 'putCookie'))).toBeGreaterThanOrEqual(1);

  var responseBody = await response.json();
  expect(responseBody).toEqual(test_body);
});
test('postNoCookies', async () => {
  const response = await my_module.postNoCookies(base_test_url, test_body);
  console.log('response', JSON.stringify(response))

  expect(response.ok).toBe(true);
  var responseCookies = response.headers._headers['set-cookie'] ? response.headers._headers['set-cookie'][0] : undefined;
  expect(getCookie(responseCookies, 'postCookie')).toBe("");

  var responseBody = await response.json();
  expect(responseBody).toEqual(test_body);
});
test('putNoCookies', async () => {
  const response = await my_module.putNoCookies(base_test_url, test_body);
  console.log('response', JSON.stringify(response))

  expect(response.ok).toBe(true)
  var responseCookies = response.headers._headers['set-cookie'] ? response.headers._headers['set-cookie'][0] : undefined;
  expect(getCookie(responseCookies, 'putCookie')).toBe("");

  var responseBody = await response.json();
  expect(responseBody).toEqual(test_body);
});