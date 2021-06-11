const request = require('supertest');
const app = require("../index");
const {profile} = require("../models")
// const res = request(app);
//if there is user in github
describe("github user", ()=>{
    describe("/github/username/:username GET", ()=>{
        it('responds with json', function(done) {
            request(app)
              .get('/github/username/yogaaaaaaa')
              .expect(200, done);
          });
    })
})


//if there is user in github
describe("github no username", ()=>{
    describe("/github/username/:username GET", ()=>{
        it('responds with json', () =>{
            request(app)
              .get('/github/username/randomStringggggggg8129038901238')
              .expect(404, "No Github profile found")
            //   .expect(res.body.message).toEqual("No Github profile found")
          });
    })
})