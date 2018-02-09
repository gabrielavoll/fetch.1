'use strict';
const fetch = require('isomorphic-fetch');
/**
 * Makes isomorphic fetch for you
 * but takes care of the params you need to pass in for basic calls
 */
module.exports = {
/**
 * Makes isomorphic fetch, basic orignal
 * @param {string} url
 * @return {async function}
 */
	fetch: async function(url) {
    return (await fetch(url));
	},
/**
 * Makes isomorphic fetch
 * BUT lets your call alter the cookies that are returned to the client
 * @param {string} url
 * @return {async function}
 */
	fetchWcookies: async function(url) {
		return (await fetch(url, { credentials: 'include' }));
	},
/**
 * Makes isomorphic fetch POST call
 * @param {string} url
 * @param {object} body
 * @return {async function}
 */
	post: async function(url, body) {
    return (await fetch(url, {
    	method: 'post',
	    body: JSON.stringify(body),
	    headers: { 'Content-Type': 'application/json' }
    }));
	},
/**
 * Makes isomorphic fetch POST call
 * BUT lets your call alter the cookies that are returned to the client
 * @param {string} url
 * @return {async function}
 */
	postWcookies: async function(url, body) {
    return (await fetch(url, {
    	method: 'post',
	    body: JSON.stringify(body),
	    credentials: 'include',
	    headers: { 'Content-Type': 'application/json' }
    }));
	},
/**
 * Makes isomorphic fetch PUT call
 * @param {string} url
 * @param {object} body
 * @return {async function}
 */
	put: async function(url, body) {
    return (await fetch(url, {
    	method: 'put',
	    body: JSON.stringify(body),
	    headers: { 'Content-Type': 'application/json' }
    }));
	},
/**
 * Makes isomorphic fetch PUT call
 * BUT lets your call alter the cookies that are returned to the client
 * @param {string} url
 * @return {async function}
 */
	putWcookies: async function(url, body) {
    return (await fetch(url, {
    	method: 'put',
	    body: JSON.stringify(body),
	    credentials: 'include',
	    headers: { 'Content-Type': 'application/json' }
    }));
	},
}