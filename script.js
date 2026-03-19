document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("form-success");

    if (!form) {
        console.error("Form not found");
        return;
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        console.log("Submitting form...");

        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                console.log("Form submitted successfully");

                form.style.display = "none";
                successMessage.style.display = "block";
            } else {
                console.error("Form submission failed", response);
                alert("Something went wrong. Please try again.");
            }

        } catch (error) {
            console.error("Network error:", error);
            alert("Network error. Please check your connection and try again.");
        }
    });
});