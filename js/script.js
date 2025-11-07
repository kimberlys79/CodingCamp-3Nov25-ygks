/// Display a welcome message when the page loads
welcomeMessage();

function welcomeMessage() {
    /// Prompt the user for their name
    let name = prompt("Please enter your name:");

    if (name != null) {
        
        /// Set the welcome message with the user's name
        document.getElementById('welcome-speech').innerHTML = "Welcome, " + name + "! Enjoy exploring our website.";
    } 
}

/// Validate the contact form
function validateForm() { }