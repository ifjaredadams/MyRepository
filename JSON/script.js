// Add event listener 
document.getElementById("personForm").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  // Get values from form
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const course = document.getElementById("course").value;
  const section = document.getElementById("section").value;
  const role = document.getElementById("role").value;

  // Create person object
  const person = {
    firstName: firstName,
    lastName: lastName,
    course: course,
    section: section,
    role: role
  };

  // Print JavaScript object
  console.log("Person object:");
  console.log(person);

  // Print JSON 
  console.log("JSON format:");
  console.log(JSON.stringify(person, null, 2));
}