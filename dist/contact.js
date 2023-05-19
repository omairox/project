const name1 = document.getElementById('name1').value
const email = document.getElementById('email').value
const message1 = document.getElementById('message1').value



const sendEmail = () => {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "omairoxx@gmail.com",
        Password : "7887F35711B1E3A915E15CAF61308CE41F3B",
        To : "omairoxx@gmail.com",
        From : "omairoxx@gmail.com",
        Subject : "FlexZone User Message",
        Body : "Name: " + name1 + "<br/> Email: " + email + "<br/> Message: " + message1
    }).then(
      message => alert("Message sent, we will get back to you shortly 💪")
    );
}


document.getElementById('pew').addEventListener('click', event => {
    event.preventDefault(); // Prevent form submission and page refresh

    const nameValue = document.getElementById('name1').value;
    alert(nameValue);
    
    sendEmail();

    document.getElementById('name1').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message1').value = '';
})

// const nagth = () => {
//     console.log(name1)
// }

// document.getElementById('myButton').addEventListener('click', event => {
//     event.preventDefault();
//     nagth()
// })