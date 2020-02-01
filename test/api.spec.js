import {reverseText} from '../api.js';
import chai, {expect} from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
import app from '../index';

describe ('API suite', () => {
    describe ('reverseText', () => {
        it('expect ?text=Hello+World to return json {reversed: "dlroW olleH"} and a http status of 200', async () => {
            const res = await chai.request(app)
                .get('/api/v1/reverse-text?text=Hello+World');
            expect(res.status).to.equal(200);
            expect(res.body.reversed).to.equal('dlroW olleH');

        });
        it('expect ?text=encodeURIComponent("Hello 🌎") to return json {reversed: "🌎 olleH"}', async () => {
            const res = await chai.request(app)
                .get('/api/v1/reverse-text?text=' + encodeURIComponent("Hello 🌎"));
            expect(res.body.reversed).to.equal('🌎 olleH');
        });
        it('expect reverseText query string without "text" field to return a http status 400', async () =>{
            const res = await chai.request(app)
                .get('/api/v1/reverse-text');
            expect(res.status).to.equal(400);
        });
    });
});