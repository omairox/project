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

//   axios.get('http://localhost:4000/api/exercises')
//   .then(res => createCard(res.data))
// }


// const createCard = (arr) => {

//   exercise.innerHTML = '';
//   arr.map(item => {
//     let exerciseCard = 
//     `
//     <div class= 'exercise'>
//       <h2>${item.name}</h2>
//       <p>${item.setsReps}</h2}
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



// --------------------------------- exercises page stuff -------------------------------------------

const exercise = document.querySelector('.exercises')

const showCard = (event) => {

  cardID = event.target.id;

  axios.get(`http://localhost:4000/api/exercises/${cardID}`)
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
      <p>${item.videoLink}</p>
    </div>
    `
    exercise.innerHTML += exerciseCard
  })
}


const getCards = document.getElementsByClassName("pew")

for(var i=0; i<getCards.length; i++){
  getCards[i].addEventListener('click', showCard)
}