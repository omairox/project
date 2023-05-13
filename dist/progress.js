// get the button and form elements
var myButton = document.getElementById("myButton");
var myForm = document.getElementById("myForm");
var overlay = document.createElement("div");
overlay.classList.add("overlay");

// show the form when the button is clicked
myButton.addEventListener("click", function() {
  myForm.style.display = "block";
  document.body.appendChild(overlay);
});

// hide the form and overlay when the form is submitted
myForm.addEventListener("submit", function(event) {
  event.preventDefault();
  myForm.style.display = "none";
  overlay.remove();
});



// -----------------post progress ------------------

const progRow = document.getElementById('progressInput')
const dateInput = document.getElementById('date')
const weightInput = document.getElementById('weight')
const progressInput = document.getElementById('progressnote')
const submit = document.getElementById('submitprogress')


const getProgress = () => {
    progRow.innerHTML=''

    axios.get('http://localhost4000/progress')
    .then(res => {
        res.data.forEach(elem => {
            let progressCard = `
            <tr>
                <td>${elem.date}</td>
                <td>${elem.weight}</td>
                <td>${elem.progress}</td>
            </tr>
            
            `
        })
    })
}


const handleSubmit = e => {
    e.preventDefault()

    let body = {
        date: dateInput,
        weight: weightInput,
        progress: progressInput
    }

    axios.post('http://localhost4000/progress', body)
    .then(() => {
        dateInput.value = ''
        weightInput.innerHTML = ''
        progressInput.innerHTML = ''
        getProgress()
    })

}