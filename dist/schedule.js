// ----------------------------------------schedule page stuff --------------------------------------------

// checkbox 

const restDayBox = document.querySelectorAll('input[type="checkbox"]');


const handleClick = () => {
  if (this.checked) {
    // Do something if the checkbox is checked
    console.log(`Checkbox ${this.id} is checked`);
  } else {
    // Do something else if the checkbox is not checked
    console.log(`Checkbox ${this.id} is not checked`);
  }
}
restDayBox.forEach( box => {
  box.addEventListener('click', handleClick)
})



// day schedule


//sunday pull from db existing

const sundaySection = document.querySelector('.addcard1')

const getSunday = () => {
  sundaySection.innerHTML = '';

  axios.get('http://localhost:4000/api/schedule')
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


//monday insert into db 

const mondaySection = document.querySelector('.addcard2')
const exerciseMonday = document.getElementById('monexercise')
const setsRepsMonday = document.getElementById('monsetsreps')

const handleSubmit = event => {
  event.preventDefault();



  let body = {
    day: 'monday',
    exercises: exerciseMonday.value,
    setsreps: setsRepsMonday
  }

  axios.post('http://localhost:4004/cities', body)
  .then(() => {
    exerciseMonday.value = '',
    setsRepsMonday.value = ''
    getMonday()
  })
  
}

const getMonday = () => {
  mondaySection.innerHTML = '';
  axios.post('http://localhost:4004/schedule')
  .then(res => {
    res.data.forEach(elem => {
      let mondayExercises = `
      <p>${elem.exercises}, ${elem.setsreps}</p>
      `
      mondaySection.innerHTML += mondayExercises
    })
  })
}


document.getElementById('button2').addEventListener('click',handleSubmit)

