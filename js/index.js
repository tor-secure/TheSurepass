document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggleBtn");
    const textContent = document.getElementById("textContent");

    toggleBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior of the anchor

        // Check the current display status of the paragraph
        if (textContent.style.display === "none" || textContent.style.display === "") {
            textContent.style.display = "block"; // Show the text
            toggleBtn.textContent = "Read Less"; // Change button text to "Read Less"
        } else {
            textContent.style.display = "none"; // Hide the text
            toggleBtn.textContent = "Read More"; // Change button text back to "Read More"
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggleBtn1");
    const textContent = document.getElementById("textContent1");

    toggleBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior of the anchor

        // Check the current display status of the paragraph
        if (textContent.style.display === "none" || textContent.style.display === "") {
            textContent.style.display = "block"; // Show the text
            toggleBtn.textContent = "Read Less"; // Change button text to "Read Less"
        } else {
            textContent.style.display = "none"; // Hide the text
            toggleBtn.textContent = "Read More"; // Change button text back to "Read More"
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggleBtn2");
    const textContent = document.getElementById("textContent2");

    toggleBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior of the anchor

        // Check the current display status of the paragraph
        if (textContent.style.display === "none" || textContent.style.display === "") {
            textContent.style.display = "block"; // Show the text
            toggleBtn.textContent = "Read Less"; // Change button text to "Read Less"
        } else {
            textContent.style.display = "none"; // Hide the text
            toggleBtn.textContent = "Read More"; // Change button text back to "Read More"
        }
    });
});

// read more for service 
document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("togBtn");
    const textContent = document.getElementById("Content");

    toggleBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior of the anchor

        // Check the current display status of the paragraph
        if (textContent.style.display === "none" || textContent.style.display === "") {
            textContent.style.display = "block"; // Show the text
            toggleBtn.textContent = "Read Less"; // Change button text to "Read Less"
        } else {
            textContent.style.display = "none"; // Hide the text
            toggleBtn.textContent = "Read More"; // Change button text back to "Read More"
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("togBtn1");
    const textContent = document.getElementById("Content1");

    toggleBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior of the anchor

        // Check the current display status of the paragraph
        if (textContent.style.display === "none" || textContent.style.display === "") {
            textContent.style.display = "block"; // Show the text
            toggleBtn.textContent = "Read Less"; // Change button text to "Read Less"
        } else {
            textContent.style.display = "none"; // Hide the text
            toggleBtn.textContent = "Read More"; // Change button text back to "Read More"
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("togBtn2");
    const textContent = document.getElementById("Content2");

    toggleBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior of the anchor

        // Check the current display status of the paragraph
        if (textContent.style.display === "none" || textContent.style.display === "") {
            textContent.style.display = "block"; // Show the text
            toggleBtn.textContent = "Read Less"; // Change button text to "Read Less"
        } else {
            textContent.style.display = "none"; // Hide the text
            toggleBtn.textContent = "Read More"; // Change button text back to "Read More"
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("togBtn3");
    const textContent = document.getElementById("Content3");

    toggleBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior of the anchor

        // Check the current display status of the paragraph
        if (textContent.style.display === "none" || textContent.style.display === "") {
            textContent.style.display = "block"; // Show the text
            toggleBtn.textContent = "Read Less"; // Change button text to "Read Less"
        } else {
            textContent.style.display = "none"; // Hide the text
            toggleBtn.textContent = "Read More"; // Change button text back to "Read More"
        }
    });
});

function setMinDate() {
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0'); // Add leading zero if necessary
    var month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    var year = today.getFullYear();

    // Format date as YYYY-MM-DD
    var minDate = year + '-' + month + '-' + day;

    // Set the minimum selectable date to today
    document.getElementById('date').setAttribute('min', minDate);
}

// Call the function to set the minimum date when the page loads
window.onload = setMinDate;