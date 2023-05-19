// ----------------------------------------schedule page stuff --------------------------------------------


//sunday pull from db existing

const sundaySection = document.querySelector('.addcard1')

const getSunday = () => {
  sundaySection.innerHTML = '';

  axios.get('http://localhost:4000/api/schedule/sunday')
  .then(res => {
    res.data.forEach(elem => {
      let sundayExercises = `
      <p>${elem.exercises}, ${elem.setsreps}</p>
      `
      sundaySection.innerHTML += sundayExercises
    })
  })

}

document.getElementById('button1').addEventListener('click',getSunday)


//sunday insert into db




//monday insert into db 

const mondaySection = document.querySelector('.addcard2')
const exerciseMonday = document.getElementById('monexercise')
const setsRepsMonday = document.getElementById('monsetsreps')

const handleSubmit = event => {
  event.preventDefault();

  let body = {
    day: 'monday',
    exercises: exerciseMonday.value,
    setsreps: setsRepsMonday.value
  }


  axios.post('http://localhost:4000/api/schedule/monday', body)
  .then(() => {
    exerciseMonday.value = '',
    setsRepsMonday.value = ''
    getMonday()
  })
  
}

const getMonday = () => {

  mondaySection.innerHTML = '';

  axios.get('http://localhost:4000/api/schedule/monday')
  .then(res => {
    res.data.forEach(elem => {
      let mondayExercises = `
      <p>-${elem.exercises}</p>
      <p>${elem.setsreps}</p>
      `
      mondaySection.innerHTML += mondayExercises
    })
  })
}

document.getElementById('button2').addEventListener('click',handleSubmit)




//get all days on load ?

window.onload= getMonday()

