
function showToast(message) {
    // Create a toast notification
    let toast = document.createElement("div");

    // Add the message
    toast.innerText = message;

    // Apply styling
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.backgroundColor = "#28a745";
    toast.style.color = "white";
    toast.style.padding = "15px 25px";
    toast.style.borderRadius = "8px";
    toast.style.fontSize = "16px";
    toast.style.zIndex = "1000";

    // Add toast to the webpage
    document.body.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(function() {
        toast.remove();
    }, 3000);
}

// Smooth scrolling for Book buttons
document.querySelectorAll(".book-btn").forEach(function(button) {
    button.addEventListener("click", function(event) {

        event.preventDefault();

        // Scroll to booking section
        document.querySelector("#booking").scrollIntoView({
            behavior: "smooth"
        });

        // Display toast notification
        showToast("Redirecting you to the booking form!");
    });
});
document.querySelectorAll(".book-btn").forEach(function(button) {
    button.addEventListener("click", function(event) {

        event.preventDefault();

        document.querySelector("#booking").scrollIntoView({
            behavior: "smooth"
        });

        showToast("Redirecting you to the booking form!");
    });
});