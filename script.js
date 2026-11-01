//your code here
const toggles = document.querySelectorAll(".toggle");

toggles.forEach(function (toggle) {
    toggle.addEventListener("change", function () {

        const checkedToggles = document.querySelectorAll(".toggle:checked");

        if (checkedToggles.length > 2) {
            const otherChecked = Array.from(checkedToggles).filter(
                item => item !== toggle
            );

            otherChecked[0].checked = false;
        }

    });
});