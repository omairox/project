require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
  }
  )

//   const exercises = [

//     {
//         id: 1,
//         muscleGroup: 'traps',
//         name: 'shoulder shrug',
//         setsReps: '3 sets x 10 reps',
//         videoLink: 'pew'
//     },

//     {   id: 2,
//         muscleGroup: 'traps',
//         name: 'facepulls',
//         setsReps: '3 sets x 15 reps',
//         videoLink: 'pew'
//     },

//     {   id: 3,
//         muscleGroup: 'lats',
//         name: 'lat pulldown',
//         setsReps: '3 sets x 12 reps',
//         videoLink: 'pew'
//     },

//     {   id: 4,
//         muscleGroup: 'lats',
//         name: 'dumbbell rows',
//         setsReps: '4 sets x 10 reps',
//         videoLink: 'pew'
//     },
    

//   ]



const exercisesArray = [

    {
        id: 1,
        muscleGroup: 'traps',
        name: 'shoulder shrug',
        setsReps: '3 sets x 10 reps',
        videoLink: 'pew'
    },

    {   id: 2,
        muscleGroup: 'traps',
        name: 'facepulls',
        setsReps: '3 sets x 15 reps',
        videoLink: 'pew'
    },

    {   id: 3,
        muscleGroup: 'lats',
        name: 'lat pulldown',
        setsReps: '3 sets x 12 reps',
        videoLink: 'pew'
    },

    {   id: 4,
        muscleGroup: 'lats',
        name: 'dumbbell rows',
        setsReps: '4 sets x 10 reps',
        videoLink: 'pew'
    },
    

  ]
  module.exports = {



    // -=------------------------------------------ THIS USING THE DB ------------------------------------------------------

    // getExerciseCard: (req,res) => {
    //     sequelize.query(`
    //     select * from exercises where muscle_group like '%traps'
    //     `).then(dbRes => {
    //         res.status(200).send(dbRes[0])
    //     }).catch(err => console.log('error seeding DB', err))
    // },


    // ---------------------------------------------THIS USING ARRAY OF OBJECTS --------------------------------------------

    // exercises,

    getExerciseCard: (req,res) => {
        const {id} = req.params;

        
        if (id === 'trapezius') {
        res.status(200).send(exercisesArray.filter( (item) => {
            return item.muscleGroup === 'traps';
        }))} else if (id === 'lats') {
            res.status(200).send(exercisesArray.filter( (item) => {
                return item.muscleGroup === 'lats';
        }))} else {
            res.status(400).send('Invalid ID');
        }
    },

    //schedule,
    
    getSunday: (req,res) => {
        sequelize.query(`
        select * from schedule where day = 'sunday';
        `)
        .then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log('error seeding DB', err))

    },

    getMonday: (req,res) => {
        sequelize.query(`
        select * from schedule where day = 'monday';
        `)
        .then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log('error seeding DB', err))

    },

    postMonday: (req,res) => {
        const {day,exercises,setsreps} = req.body;

        sequelize.query(`
        insert into schedule (day,exercises,setsreps)
        values ('${day}','${exercises}','${setsreps}')
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        })

    },

    // progress

    getProgress: (req,res) => {
        sequelize.query(`
        select * from progress
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log('error seeding DB', err))
    },



    postProgress: (req,res) => {
        const {date,weight,progress} = req.body;

        sequelize.query(`
        insert into progress (date,weight,progressnote)
        values ('${date}','${weight}','${progress}')
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log('error seeding DB', err))

    },

    seed: (req,res) => {
        sequelize.query(`
            drop table if exists exercises;
            drop table if exists schedule;
            drop table if exists progress;

            create table exercises (
                exercise_id serial primary key,
                muscle_group varchar,
                name varchar,
                sets_reps varchar,
                videolink varchar

            );

            insert into exercises (muscle_group,name,sets_reps,videolink)
            values ('traps','shoulder shrug','3 sets x 10 reps', null),
            ('traps','facepulls','3 sets x 15 reps', null),
            ('lats','lat pulldown','3 sets x 12 reps', null),
            ('lats','dumbbell rows','4 sets x 10 reps', null);


            create table schedule (
                day_id serial primary key,
                day varchar,
                exercises varchar,
                setsreps varchar
            );

            insert into schedule (day,exercises,setsreps)
            values ('sunday','hammer curl','3x12'),
            ('sunday','bicep curl','3x12'),
            ('monday', null, null),
            ('tuesday', null, null),
            ('wednesday', null, null),
            ('thursday', null, null),
            ('friday', null, null),
            ('saturday', null, null);

            create table progress (
                progress_id serial primary key,
                date varchar,
                weight integer,
                progressnote varchar(100)
            )
        
        
        `).then( () => {
            console.log('db seeded')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding db', err))

    }

  }