'use strict';
const fetch = require('isomorphic-fetch');
/**
 * Makes isomorphic fetch for you
 * but takes care of the params you need to pass in for basic calls
 */

/**
 * Makes isomorphic fetch GET
 * BUT lets your call alter the cookies that are returned to the client
 * @param {string} url
 * @return {async function}
 */
exports.get = async function(url) {
	return (await fetch(url, { credentials: 'include' }));
};
/**
 * Omited fetch (GET call) without cookies,
 * because thats what isomorphic fetch defaults to
 */

/**
 * Makes isomorphic fetch POST call
 * BUT lets your call alter the cookies that are returned to the client
 * @param {string} url
 * @return {async function}
 */
exports.post = async function(url, body) {
  return (await fetch(url, {
  	method: 'post',
    body: JSON.stringify(body),
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  }));
};
/**
 * Makes isomorphic fetch POST call
 * @param {string} url
 * @param {object} body
 * @return {async function}
 */
exports.postNoCookies = async function(url, body) {
  return (await fetch(url, {
  	method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  }));
};
/**
 * Makes isomorphic fetch PUT call
 * BUT lets your call alter the cookies that are returned to the client
 * @param {string} url
 * @return {async function}
 */
exports.put = async function(url, body) {
  return (await fetch(url, {
  	method: 'put',
    body: JSON.stringify(body),
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  }));
};
/**
 * Makes isomorphic fetch PUT call
 * @param {string} url
 * @param {object} body
 * @return {async function}
 */
exports.putNoCookies = async function(url, body) {
  return (await fetch(url, {
  	method: 'put',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  }));
};
