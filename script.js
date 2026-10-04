```javascript
/* ========================================
EBSA BULTI PORTFOLIO - JAVASCRIPT
======================================== */

/* ========================================
1. EMAILJS - CONTACT FORM
======================================== */

// EmailJS Public Key
const EMAILJS_PUBLIC_KEY = "abc123XYZ";

// EmailJS Service ID
const EMAILJS_SERVICE_ID = "service_wb44258";

// EmailJS Template ID
const EMAILJS_TEMPLATE_ID = "template_abc12";

// Initialize EmailJS
if (typeof emailjs !== "undefined") {
emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY
});
}

// Get Contact Form
const contactForm = document.getElementById("contact-form");

// Get Form Status
const formStatus = document.getElementById("form-status");

// Get Send Button
const sendMessageButton = document.getElementById("sendMessageButton");

// Contact Form Submit
if (contactForm) {

contactForm.addEventListener(
    "submit",
    function (event) {

        // Stop page refresh
        event.preventDefault();

        // Check EmailJS
        if (typeof emailjs === "undefined") {

            if (formStatus) {
                formStatus.textContent =
                    "❌ Email service is not available.";
            }

            return;
        }

        // Check EmailJS IDs
        if (
            EMAILJS_PUBLIC_KEY === "abc123XYZ" ||
            EMAILJS_SERVICE_ID === "service_wb44258" ||
            EMAILJS_TEMPLATE_ID === "template_abc12"
        ) {

            if (formStatus) {
                formStatus.textContent =
                    "⚠️ Please add your EmailJS IDs first.";
            }

            return;
        }

        // Show sending message
        if (formStatus) {
            formStatus.textContent =
                "📨 Sending your message...";
        }

        // Disable send button
        if (sendMessageButton) {

            sendMessageButton.disabled = true;

            sendMessageButton.textContent =
                "Sending...";

        }

        // Send form
        emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            contactForm
        )

        .then(function (response) {

            console.log(
                "Email sent successfully:",
                response.status,
                response.text
            );

            // Success message
            if (formStatus) {
                formStatus.textContent =
                    "✅ Your message has been sent successfully!";
            }

            // Clear form
            contactForm.reset();

        })

        .catch(function (error) {

            console.error(
                "EmailJS Error:",
                error
            );

            if (formStatus) {
                formStatus.textContent =
                    "❌ Message could not be sent. Please try again.";
            }

        })

        .finally(function () {

            // Enable button again
            if (sendMessageButton) {

                sendMessageButton.disabled = false;

                sendMessageButton.textContent =
                    "Send Message";

            }

        });

    }
);

}

/* ========================================
2. DARK MODE / LIGHT MODE
======================================== */

const darkModeButton =
document.getElementById("darkModeButton");

if (darkModeButton) {

// Get saved mode
const savedMode =
    localStorage.getItem("darkMode");

// Apply saved mode
if (savedMode === "enabled") {

    document.body.classList.add("dark-mode");

    darkModeButton.textContent =
        "☀️ Light Mode";

}

else {

    document.body.classList.remove("dark-mode");

    darkModeButton.textContent =
        "🌙 Dark Mode";

}

// Change mode when button is clicked
darkModeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark-mode"
        );

        // Dark Mode
        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            localStorage.setItem(
                "darkMode",
                "enabled"
            );

            darkModeButton.textContent =
                "☀️ Light Mode";

        }

        // Light Mode
        else {

            localStorage.setItem(
                "darkMode",
                "disabled"
            );

            darkModeButton.textContent =
                "🌙 Dark Mode";

        }

    }
);

}

/* ========================================
3. MOBILE MENU
======================================== */

const menuButton =
document.getElementById("menuButton");

const navLinks =
document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle("active");

            if (
                navLinks.classList.contains("active")
            ) {

                menuButton.textContent = "✕";

            }

            else {

                menuButton.textContent = "☰";

            }

        }
    );

    const navigationLinks =
        navLinks.querySelectorAll("a");

    navigationLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove(
                        "active"
                    );

                    menuButton.textContent =
                        "☰";

                }
            );

        }
    );

}

/* ========================================
4. BACK TO TOP
======================================== */

const backToTop =
document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 300) {

                backToTop.style.display =
                    "block";

            }

            else {

                backToTop.style.display =
                    "none";

            }

        }
    );

    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}

/* ========================================
5. BACK TO DOWN
======================================== */

const backToDown =
document.getElementById("backToDown");

if (backToDown) {

    backToDown.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: document.body.scrollHeight,

                behavior: "smooth"

            });

        }
    );

}

/* ========================================
6. GITHUB LINK
======================================== */

const githubLink =
document.getElementById("githubLink");

if (githubLink) {

    githubLink.href =
        "https://github.com/";

}

/* ========================================
7. LINKEDIN LINK
======================================== */

const linkedinLink =
document.getElementById("linkedinLink");

if (linkedinLink) {

    linkedinLink.href =
        "https://www.linkedin.com/";

}

/* ========================================
8. CURRENT YEAR
======================================== */

const currentYear =
new Date().getFullYear();

const footerText =
document.querySelector("footer p");

if (footerText) {

    footerText.textContent =
        "© " +
        currentYear +
        " Ebsa Bulti. All rights reserved.";

}
```


