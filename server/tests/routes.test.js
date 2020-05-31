import "@babel/polyfill";
import request from 'supertest';
import app from '../index';
const url = '/cep/';


describe('Testing status, routes and responses', () => {
    test('should GET a cep and return a sucess statusCode', async() => {
        const response = await request(app).get(`${url}/03210001`);
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('cep');
    });

    test('should GET the error statusCode 406', async() => {
        const response = await request(app).get(`${url}/0321`);
        expect(response.statusCode).toEqual(406);
        const expected = { error: true, message: 'Digite um cep válido!' };
        expect(response.body).toEqual(expected);
    });

    test('should GET the error statusCode 404', async() => {
        const response = await request(app).get(`${url}/`);
        expect(response.statusCode).toEqual(404);
        const expected = {};
        expect(response.body).toEqual(expected);
    });
})