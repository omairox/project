// const controller = require('./server/controller.js');

// console.log(controller.exercises)


// ----------------------------- not my code ------------------------------------

document.querySelectorAll(".muscle-groups svg g g[id]").forEach(function(group) {
  // For the hover
  group.addEventListener('mouseover', function(el) {
    let id = el.path[1].id.toLowerCase()
    if(!id) id = el.path[2].id.toLowerCase()
    let label = document.querySelectorAll("label[for=" + id + "]")[0]
    if (label.classList)
      label.classList.add("hover")
    else
      label.className += ' ' + "hover"
  })
  group.addEventListener('mouseout', function(el) {
    let id = el.path[1].id.toLowerCase()
    if(!id) id = el.path[2].id.toLowerCase()
    let label = document.querySelectorAll("label[for=" + id + "]")[0]
    let clss = "hover"
    if (label.classList)
      label.classList.remove(clss)
    else
      label.className = label.className.replace(new RegExp('(^|\\b)' + clss.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
  })
  // For the click
  group.addEventListener('click', function(el) {
    let id = el.path[1].id.toLowerCase()
    if(!id) id = el.path[2].id.toLowerCase()
    let input = document.getElementById(id)
    if(input.checked) input.checked = false
    else input.checked = true
  });
})

//------------------------------- my code-------------------------------------

// -----------------------------------------------------------THIS USING THE DB BS -----------------------------------------------

// const exercise = document.querySelector('.exercises')

// const showCard = () => {

//   axios.get('http://localhost:4000/exercises')
//   .then(res => createCard(res.data))
// }


// const createCard = (arr) => {

//   exercise.innerHTML = '';
//   arr.map(item => {
//     let exerciseCard = 
//     `
//     <div class= 'exercise'>
//       <h2>${item.name}</h2>
//       <p>${item['sets_reps']}</h2}
//     </div>
//     `
//     exercise.innerHTML += exerciseCard
//   })
// }


// const getCards = document.getElementsByClassName("pew")

// for(var i=0; i<getCards.length; i++){
//   getCards[i].addEventListener('click', showCard)
// }


// -------------------------------------------------- THIS USING THE ARRAY OF OBJECTS -----------------------------------


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

// --------------------------------- exercises page stuff -------------------------------------------

const exercise = document.querySelector('.exercises')

const showCard = (id) => {

  axios.get(`http://localhost:4000/api/exercises/${id}`)
  .then(res => createCard(res.data)).catch(err => console.log(err))
}


const createCard = (arr) => {

  exercise.innerHTML = '';
  arr.map(item => {
    let exerciseCard = 
    `
    <div class= 'exercise'>
      <h2>${item.name}</h2>
      <p>${item.setsReps}</p>
    </div>
    `
    exercise.innerHTML += exerciseCard
  })
}


const getCards = document.getElementsByClassName("pew")

for(var i=0; i<getCards.length; i++){
  getCards[i].addEventListener('click', showCard)
}