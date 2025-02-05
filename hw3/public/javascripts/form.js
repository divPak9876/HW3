document.addEventListener("DOMContentLoaded", () => {
    const orderButton = document.querySelector('input[type="submit"]');
    const notesTextarea = document.getElementById("special-instructions");
    const quantitySelect = document.getElementById("numbers");
    const flavorRadios = document.querySelectorAll('input[name="flavor"]');

    orderButton.addEventListener("click", (event) => {
        event.preventDefault(); 

        // Notes Content
        const notes = notesTextarea.value.toLowerCase();

        // Check if vegan is in notes
        if (notes.includes("vegan")) {
            alert("Cheesecakes contain dairy!");
            return; // Stop further execution
        }

        // No vegan warning, proceed with order
        const quantity = quantitySelect.value;
        let flavor = "none";

        // Find selected flavor
        flavorRadios.forEach((radio) => {
            if (radio.checked) {
                flavor = radio.value;
            }
        });

        if (flavor === "none") {
            alert("Please select a topping flavor!");
            return; // Stop further execution
        }

        const confirmationMessage = `
            <h1>Thank you! Your order has been placed.</h1>
            <p><strong>Order Details:</strong></p>
            <ul>
                <li><strong>Topping:</strong> ${flavor}</li>
                <li><strong>Quantity:</strong> ${quantity}</li>
                <li><strong>Notes:</strong> ${notes || 'No special instructions'}</li>
            </ul>
        `;

        // Remove form and displey confirmation message
        const formSection = document.querySelector("form");
        formSection.innerHTML = confirmationMessage; 
    });

    // Implement dropdown for months
    $(".dropdown").hover(
        function () {
            $(this).find(".dropdown-content").show(); 
        },
        function () {
            $(this).find(".dropdown-content").hide(); 
        }
    );

    $(".month-option").click(function () {
        const selectedMonth = $(this).data("month"); 
        $(".widget").text(selectedMonth); 
        $(".dropdown-content").hide(); 
    });
});