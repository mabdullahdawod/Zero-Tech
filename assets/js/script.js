document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggles = document.querySelectorAll('.dark-mode-toggle');

    // Function to set dark mode state in local storage
    function setDarkModeState(isDarkMode) {
        localStorage.setItem('darkMode', isDarkMode);
    }

    // Function to get dark mode state from local storage
    function getDarkModeState() {
        return JSON.parse(localStorage.getItem('darkMode')) || false;
    }

    // Function to toggle dark mode
    function toggleDarkMode() {
        const body = document.body;
        const paragraphs = document.querySelectorAll('p');
        const anchors = document.querySelectorAll('a');
        const labels = document.querySelectorAll('.switch label');

        const isDarkMode = darkModeToggles[0].checked;

        body.classList.toggle('dark-mode', isDarkMode);

        paragraphs.forEach(function (paragraph) {
            paragraph.style.color = isDarkMode ? '#ffffff' : '#000000';
        });

        anchors.forEach(function (anchor) {
            anchor.style.color = isDarkMode ? '#ffffff' : '#000000';
        });

        labels.forEach(function (label) {
            label.style.color = isDarkMode ? '#ffffff' : '#000000';
        });

        setDarkModeState(isDarkMode);
    }

    // Retrieve dark mode state from localStorage and apply it on page load
    darkModeToggles.forEach(function(toggle) {
        toggle.checked = getDarkModeState();
    });
    toggleDarkMode(); // Call toggleDarkMode to apply the stored state

    // Attach event listener for dark mode switch change
    darkModeToggles.forEach(function(toggle) {
        toggle.addEventListener('change', toggleDarkMode);
    });
});
 