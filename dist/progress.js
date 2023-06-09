
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

const progRow = document.getElementById('myTable')
// const dateInput = document.getElementById('date').value
// const weightInput = document.getElementById('weight').value
// const progressInput = document.getElementById('progressnote').value
const submit = document.getElementById('submitprogress')





const getProgress = () => {
    progRow.innerHTML=''

    axios.get('http://localhost:4000/api/progress')
    .then(res => {
        console.log(res)
        addRow(res.data)
    })
}


const handleSubmit = e => {
    e.preventDefault()

    const dateInput = document.getElementById('date').value
    const weightInput = document.getElementById('weight').value
    const progressInput = document.getElementById('progressnote').value

    let body = {
        date: dateInput,
        weight: parseInt(weightInput),
        progress: progressInput
    }
    console.log(body)
    axios.post('http://localhost:4000/api/progress', body)
    .then(() => {
        dateInput.value = ''
        weightInput.innerHTML = ''
        progressInput.innerHTML = ''
        getProgress()
    })

}



function addRow(elem) {
  console.log(elem)
    // Get the table element by its ID
    var table = document.getElementById("myTable");
  
    // Create a new row element
    var row = document.createElement("tr");
  
    // Create two new cell elements
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
  
    // Set the text content of the cells
    cell1.innerHTML = elem.date;
    cell2.innerHTML = elem.weight;
    cell3.innerHTML = elem.progress;
  
    // Add the cells to the row
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
  
    // Add the row to the table
    table.appendChild(row);
  }

submit.addEventListener('click',handleSubmit)
