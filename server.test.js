const { test } = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('./server');

test('GET /healthz returns 200 with status ok', async () => {
  const res = await request(app).get('/healthz');
  assert.equal(res.status, 200);
  assert.equal(res.body.status, 'ok');
});

test('GET / returns 200', async () => {
  const res = await request(app).get('/');
  assert.equal(res.status, 200);
});
