// ====================================
// FOSS Aurora Quest JavaScript
// ====================================

// Initialize GSAP ScrollSmoother (not part of student challenges)
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        ScrollSmoother.create({
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: true
        });
    }
});

// ============ Student Challenge Functions ============

/**
 * Toggle section visibility with animation
 * Used by buttons to reveal hidden sections
 */
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        // ISSUE #8: Once fade-in class exists in CSS, add it here
        // TODO: Uncomment this line after Issue #8 is fixed
        // section.classList.add('fade-in');
        animateLaunch();

        // Smooth scroll to the section
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Visual feedback when launching sections
 */
function animateLaunch() {
    // ISSUE #9: Fix the syntax error below (missing opening parenthesis)
  (console.log 'Aurora glowing! ✨');

    // Bonus: Could add particle effects here later!
}

/**
 * Handle contact form submission
 */
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Basic validation
    if (name && email && email.includes('@')) {
        alert(`Thanks, ${name}! Welcome to the FOSS Club. We'll reach out at ${email} soon! 🚀`);
        // Clear form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    } else {
        alert('⚠️ Please fill in all fields correctly with a valid email.');
    }
}
