
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

// Activity 7: Booking Summary Live Update

// Get form elements
const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");

// Get Booking Summary elements
const summaryMatch = document.getElementById("summary-match");
const summaryStand = document.getElementById("summary-stand");
const summaryPrice = document.getElementById("summary-price");
const summaryQuantity = document.getElementById("summary-quantity");
const summaryTotal = document.getElementById("summary-total");

// Ticket prices
const ticketPrices = {
    General: 1000,
    Premium: 2000,
    VIP: 5000
};

// Function to update Booking Summary
function updateBookingSummary() {

    let selectedMatch = matchSelect.value;
    let selectedStand = standSelect.value;
    let quantity = Number(quantityInput.value) || 0;

    let price = ticketPrices[selectedStand] || 0;
    let total = price * quantity;

    summaryMatch.innerText = selectedMatch || "Not selected";
    summaryStand.innerText = selectedStand || "Not selected";
    summaryPrice.innerText = price;
    summaryQuantity.innerText = quantity;
    summaryTotal.innerText = total;

    showToast("Booking Summary Updated!");
}

// Add change event listeners
matchSelect.addEventListener("change", updateBookingSummary);
standSelect.addEventListener("change", updateBookingSummary);
quantityInput.addEventListener("input", updateBookingSummary);

// Activity 8: Hamburger Menu Toggle

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    // Open and close navigation menu
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
            navLinks.classList.remove("active");
        });
    });
}

// Activity 8: Match Filter and Grid/List View

const teamFilter = document.getElementById("teamFilter");
const matchCards = document.querySelectorAll(".match-card");

const matchContainer = document.getElementById("match-container");

const gridViewBtn = document.getElementById("gridViewBtn");
const listViewBtn = document.getElementById("listViewBtn");

// Filter matches by team
if (teamFilter) {
    teamFilter.addEventListener("change", function() {

        const selectedTeam = teamFilter.value;

        matchCards.forEach(function(card) {

            const teams = card.getAttribute("data-teams");

            if (selectedTeam === "all" || teams.includes(selectedTeam)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

        showToast("Match Filter Updated!");
    });
}

// Switch to Grid View
if (gridViewBtn && matchContainer) {
    gridViewBtn.addEventListener("click", function() {

        matchContainer.classList.remove("match-list");
        matchContainer.classList.add("match-grid");

        showToast("Grid View Selected!");
    });
}

// Switch to List View
if (listViewBtn && matchContainer) {
    listViewBtn.addEventListener("click", function() {

        matchContainer.classList.remove("match-grid");
        matchContainer.classList.add("match-list");

        showToast("List View Selected!");
    });
}
