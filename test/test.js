import { expect } from 'chai';
import request from 'supertest';
import app from '../src/app.js';

describe('GET /', () => {
    it('returns HTTP 200', async () => {
        const res = await request(app).get('/');
        expect(res.status).to.equal(200);
    });


    it('return the expected message', async () => {
        const res = await request(app).get('/');
        expect(res.text).to.equal('Hello, GitHub Actions!');
    });

});