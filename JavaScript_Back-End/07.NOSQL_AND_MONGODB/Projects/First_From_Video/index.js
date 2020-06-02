//------------MongoDB
//  const dbUrl = 'mongodb://localhost:27017';
//  const { MongoClient } = require('mongodb');
//  const client = new MongoClient(dbUrl);
//  client.connect(function (err, client) {
//     if(err){
//         console.log(err);
//         return;
//     }
//     const db = client.db('testdb');
//     const users = db.collection('users');

//     // users.insert({ name: 'test '})
//     // .then(ar => {
//     //     console.log(qr)
//     //     users.deleteMany({ name: 'test '})
//     //     .then(qr => {
//     //         console.log(qr);
//     //     })
//     // });

// });

//--------Server

global.__basedir = __dirname;
const dbConnector = require('./config/db');
//const mongoose = require('mongoose');
dbConnector()
    .then(() => {
        const config = require('./config/config');
        const app = require('express')();
        require('./config/express')(app);
        require('./config/routes')(app);

        app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));

        // const studentSchema = new mongoose.Schema({
        //     name: String,
        //     teacher: { 
        //         type: mongoose.Schema.Types.ObjectId, 
        //         ref: 'Teacher' },
        //     subjects: [{ 
        //         type: mongoose.Schema.Types.ObjectId, 
        //         ref: 'Subject' 
        //     }]
        //   });
          
        //   const subjectSchema = new mongoose.Schema({
        //     title: String,
        //     students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
        //   });

        //   const teacherSchema = new mongoose.Schema({
        //     name: String
        //   });
          
        //   const StudentModel = mongoose.model('Student', studentSchema);
        //   const SubjectModel = mongoose.model('Subject', subjectSchema);
        //   const TeacherModel = mongoose.model('Teacher', teacherSchema);

        // //   TeacherModel.insertMany([{ name: 'Teacher 1', students: []}]).then(() => {
        // //       console.log('teacher was added');
        // //   })

        // // StudentModel.insertMany([{ name: 'Student 1', teacher: '5df7345850d2a40f4ccbc23e'}])
        // // .then( () =>
        // //     console.log('students was added!')
        // // );
          
        // StudentModel.findById('5df7383a938eeb156ce83809')
        // .populate('teacher')
        // .then(stud => {
        //     console.log(stud);
        // })

    }).catch(console.error);

// ---------init tests
// // const cubeModel = require('./models/cube');
// // cubeModel.update(1, { desc: 'test test'})
// // .then((updated) => console.log(updated));


// // const cubeModel = require('./models/cube');
// // cubeModel.insert({ name: 'test1', desc: 'test1' })
// // .then(insertedCube => {
// //     console.log(insertedCube);
// //     return cubeModel.delete(insertedCube.id);
// // })
// // .then((deletedCube) => {
// //     console.log('deleted cube', deletedCube);
// //     console.log('lastIndex should be 1 and we should not have any cube');
// // })