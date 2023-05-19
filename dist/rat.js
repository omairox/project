const progRow = document.getElementById('myTable')
const dateInput = document.getElementById('date')
const weightInput = document.getElementById('weight')
const progressInput = document.getElementById('progressnote')
const submit = document.getElementById('submitprogress')



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


const handleSubmit = e => {
    e.preventDefault()

    let body = {
        date: dateInput,
        weight: weightInput,
        progress: progressInput
    }

    axios.post('http://localhost:4000/api/progress', body)
    .then(() => {
        dateInput.value = ''
        weightInput.innerHTML = ''
        progressInput.innerHTML = ''
        // getProgress()
    })

}

submit.addEventListener('submit',handleSubmit)

function addRow(elem) {
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


const nin = () => {
    console.log('eprkf')
}

nin()