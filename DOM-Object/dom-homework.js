// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    const myDiv = document.getElementById("myDiv");
    const addButton = document.getElementById("addItemBtn");

    // Create heading
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to DOM homework";
    // Add highlight class
	heading.classList.add("highlight"); 
    myDiv.appendChild(heading);

    // Create paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = "This is your first DOM homework assignment";
    myDiv.appendChild(paragraph);

    // Create unordered list
    const ul = document.createElement("ul");

    const li1 = document.createElement("li");
    li1.textContent = "First Item";

    const li2 = document.createElement("li");
    li2.textContent = "Second Item";

    const li3 = document.createElement("li");
    li3.textContent = "Third Item";

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    myDiv.appendChild(ul);

    // Counter for new list items
    let newItemCount = 1;

    // Function to generate random color
    function getRandomColor() {
        return "rgb(" +
            Math.floor(Math.random() * 256) + "," +
            Math.floor(Math.random() * 256) + "," +
            Math.floor(Math.random() * 256) + ")";
    }

    // Button click event
    addButton.addEventListener("click", function () {
        const newLi = document.createElement("li");
        newLi.textContent = "New List Item " + newItemCount;
        newLi.style.color = getRandomColor();
        ul.appendChild(newLi);
        newItemCount++;
    });

    // Click event for myDiv (change background color randomly)
    myDiv.addEventListener("click", function () {
        myDiv.style.backgroundColor = getRandomColor();
    });

});