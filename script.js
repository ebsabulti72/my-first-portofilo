/* ========================================
   EBSA BULTI PORTFOLIO - JAVASCRIPT
======================================== */


/* ========================================
   1. EMAILJS - CONTACT FORM
======================================== */

// EmailJS Public Key
const EMAILJS_PUBLIC_KEY = "YHt-OxtT_YtCf3eoO";

// EmailJS Service ID
const EMAILJS_SERVICE_ID = "service_wb44258";

// EmailJS Template ID
// YOUR_REAL_TEMPLATE_ID bakka Template ID kee isa dhugaa galchi.
const EMAILJS_TEMPLATE_ID = "YOUR_REAL_TEMPLATE_ID";


// Initialize EmailJS
if (typeof emailjs !== "undefined") {
    emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY
    });
}


// Contact form elements
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const sendMessageButton = document.getElementById("sendMessageButton");


// Display contact form status
function showFormStatus(message, state) {
    if (!formStatus) return;

    formStatus.textContent = message;
    formStatus.setAttribute("role", "status");
    formStatus.setAttribute("aria-live", "polite");
    formStatus.dataset.state = state || "";
}


// Enable or disable send button
function setSending(isSending) {
    if (!sendMessageButton) return;

    sendMessageButton.disabled = isSending;

    sendMessageButton.textContent = isSending
        ? "Sending..."
        : "Send Message";
}


// Contact form submission
if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Check form validity
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        // Check EmailJS
        if (typeof emailjs === "undefined") {
            showFormStatus(
                "Email service did not load. Check your internet connection and try again.",
                "error"
            );
            return;
        }

        // Check configuration
        if (
            !EMAILJS_PUBLIC_KEY ||
            EMAILJS_TEMPLATE_ID === "YOUR_REAL_TEMPLATE_ID"
        ) {
            showFormStatus(
                "Please add your real EmailJS Template ID in script.js first.",
                "warning"
            );
            return;
        }

        setSending(true);
        showFormStatus("Sending your message...", "sending");

        try {
            // Send message through EmailJS
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                contactForm
            );

            showFormStatus(
                "Your message was sent successfully. Thank you!",
                "success"
            );

            contactForm.reset();

        } catch (error) {
            console.error("EmailJS error:", error);

            showFormStatus(
                "Your message could not be sent. Check your EmailJS settings and try again.",
                "error"
            );

        } finally {
            setSending(false);
        }
    });
}


/* ========================================
   2. DARK MODE / LIGHT MODE
======================================== */

const darkModeButton =
    document.getElementById("darkModeButton");

const DARK_MODE_STORAGE_KEY = "darkMode";


// Apply theme
function applyTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);

    if (darkModeButton) {
        darkModeButton.textContent = isDark
            ? "☀️ Light Mode"
            : "🌙 Dark Mode";

        darkModeButton.setAttribute(
            "aria-pressed",
            String(isDark)
        );
    }
}


// Load saved theme
try {
    const savedMode =
        localStorage.getItem(DARK_MODE_STORAGE_KEY);

    applyTheme(savedMode === "enabled");

} catch (error) {
    applyTheme(false);
}


// Toggle dark mode
if (darkModeButton) {
    darkModeButton.addEventListener("click", function () {
        const isDark =
            !document.body.classList.contains("dark-mode");

        applyTheme(isDark);

        try {
            localStorage.setItem(
                DARK_MODE_STORAGE_KEY,
                isDark ? "enabled" : "disabled"
            );
        } catch (error) {
            console.warn(
                "Could not save the theme preference.",
                error
            );
        }
    });
}


/* ========================================
   3. MOBILE NAVIGATION MENU
======================================== */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


// Close mobile menu
function closeMobileMenu() {
    if (!menuButton || !navLinks) return;

    navLinks.classList.remove("active");

    menuButton.textContent = "☰";

    menuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );
}


// Mobile navigation controls
if (menuButton && navLinks) {
    menuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    // Open or close menu
    menuButton.addEventListener("click", function () {
        const isOpen =
            navLinks.classList.toggle("active");

        menuButton.textContent = isOpen
            ? "✕"
            : "☰";

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    // Close menu after clicking a link
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            closeMobileMenu();
        });
    });

    // Close menu with Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMobileMenu();
        }
    });

    // Close menu on desktop screen
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
}


/* ========================================
   4. BACK TO TOP BUTTON
======================================== */

const backToTop =
    document.getElementById("backToTop");


// Show or hide button
function updateBackToTopVisibility() {
    if (!backToTop) return;

    backToTop.style.display =
        window.scrollY > 300 ? "block" : "none";
}


if (backToTop) {
    updateBackToTopVisibility();

    window.addEventListener(
        "scroll",
        updateBackToTopVisibility,
        { passive: true }
    );

    // Scroll to top
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* ========================================
   5. BACK TO DOWN BUTTON
======================================== */

const backToDown =
    document.getElementById("backToDown");


if (backToDown) {
    backToDown.addEventListener("click", function () {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    });
}


/* ========================================
   6. GITHUB LINK
======================================== */

const githubLink =
    document.getElementById("githubLink");


if (githubLink) {
    githubLink.href =
        "https://github.com/ebsabulti72";

    githubLink.target = "_blank";

    githubLink.rel =
        "noopener noreferrer";
}


/* ========================================
   7. LINKEDIN LINK
======================================== */

const linkedinLink =
    document.getElementById("linkedinLink");


if (linkedinLink) {
    // Replace with your actual LinkedIn profile URL
    // when you have one.
    linkedinLink.href =
        "https://www.linkedin.com/";

    linkedinLink.target = "_blank";

    linkedinLink.rel =
        "noopener noreferrer";
}


/* ========================================
   8. CURRENT YEAR IN FOOTER
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