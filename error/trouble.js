let v1 = 3;
let v2 = 4;  // missing semicolon

//alert was commented out and used undefined variable "equals"
alert("3 times 4 equals " + v1 * v2);

 // This sets the general styling for the divs within the section tag using .style

            // incorrect syntax for "getelementsById"
			let section = document.getElementById("s1")
            section.style.width = "50%"
            section.style.textAlign = "center"
            section.style.fontFamily = "arial, serif"
            section.style.fontWeight = "bold"  // changed typo "stlye" to "style"
            section.style.fontStyle = "italic"
            section.style.fontSize = "20px"

            // Sets the customization for each individual color/div tag
			//.innerHTML is used to add content within each div tag.
			//.style.backgroundColor is used to assign a different background color to each div
			
            // RED
            // incorrect syntax for "getelementById", case-sensitive
			const red = document.getElementById("red")
            red.innerHTML = "RED"
            red.style.backgroundColor = "red"

            // ORANGE
            const orange = document.getElementById("orange")
            orange.innerHTML = "ORANGE"  // incorrect syntax for "innerhtml", case-sensitive
            orange.style.backgroundColor = "orange"

            // YELLOW
            const yellow = document.getElementById("yellow")
            yellow.innerHTML = "YELLOW"
            yellow.style.backgroundColor = "yellow"

            // GREEN
            // variable name mismatched, "purple" as "green"
			const green = document.getElementById("green")
            green.innerHTML = "GREEN"
            green.style.backgroundColor = "green"

            // INDIGO
            const indigo = document.getElementById("indigo")
            indigo.innerHTML = "INDIGO"
            indigo.style.backgroundColor = "indigo"

            // rename comment to match variable
			// VIOLET
            const violet = document.getElementById("violet")
            violet.innerHTML = "VIOLET"
            violet.style.backgroundColor = "violet"