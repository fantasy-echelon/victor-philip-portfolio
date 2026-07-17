/* ==========================
   MOBILE NAVIGATION
========================== */

const menuButton = document.querySelector(".menu-btn");

const navigation = document.querySelector("nav");

menuButton.addEventListener("click", function () {

    navigation.classList.toggle("active");

});

/* ==========================
   PROJECT READ MORE
========================== */

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach(function(card){

    const button =
    card.querySelector("button");

    button.addEventListener("click",function(){

        card.classList.toggle("expanded");

        if(card.classList.contains("expanded")){

            button.textContent="Read Less";

        }

        else{

            button.textContent="Read More";

        }

    });

});

/* ==========================
   OPERATION CASE STUDY
========================== */

const operationButton =
document.querySelector(".operation-card button");

const operationArticle =
document.querySelector("#operation-case-study");

operationButton.addEventListener("click", function () {

    operationArticle.classList.toggle("show");

    if (operationArticle.classList.contains("show")) {

        operationButton.textContent = "Hide Case Study";

    } else {

        operationButton.textContent = "Read Case Study";

    }

});


/* ==========================
   ACADEMIC PLANNER
========================== */

const plannerBody =
document.querySelector("#planner-table tbody");

plannerBody.addEventListener("keydown", function (event) {

    if (
        event.key === "Enter" &&
        event.target.classList.contains("task")
    ) {

        event.preventDefault();

        const rowCount =
        plannerBody.rows.length + 1;

        const newRow =
        plannerBody.insertRow();

        newRow.innerHTML = `
            <td>${rowCount}</td>
            <td contenteditable="true" class="task"></td>
            <td><input type="date"></td>
            <td class="status">Pending</td>
            <td><button type="button" class="delete-btn">🗑️</button></td>
        `;

        newRow.querySelector(".task").focus();

    }

});

/* ==========================
   DELETE ROW & RENUMBER
========================== */

plannerBody.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete-btn")) {

        if (plannerBody.rows.length === 1) {

            const row = plannerBody.rows[0];

            row.querySelector(".task").textContent = "";

            row.querySelector("input").value = "";

            row.querySelector(".status").textContent = "Pending";

            row.querySelector(".task").focus();

            return;

        }

        event.target.closest("tr").remove();

        const rows = plannerBody.querySelectorAll("tr");

        rows.forEach(function (row, index) {

            row.cells[0].textContent = index + 1;

        });

    }

});

/* ==========================
   TASK STATUS
========================== */

plannerBody.addEventListener("click", function (event) {

    if (event.target.classList.contains("status")) {

        const row = event.target.closest("tr");

        const taskCell = row.querySelector(".task");

        const task = taskCell.textContent.trim();

        if (task === "") {

            taskCell.focus();

            return;

        }

        if (event.target.textContent === "Pending") {

            event.target.textContent = "Completed";

            row.classList.add("completed");

            taskCell.contentEditable = "false";

        } else {

            event.target.textContent = "Pending";

            row.classList.remove("completed");

            taskCell.contentEditable = "true";

            taskCell.focus();

        }

    }

});

/* ==========================
   CONTACT FORM VALIDATION
========================== */

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    if (name.value.trim() === "") {

        alert("Please enter your name.");

        name.focus();

        return;

    }

    if (email.value.trim() === "") {

        alert("Please enter your email.");

        email.focus();

        return;

    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {

        alert("Please enter a valid email address.");

        email.focus();

        return;

    }

    if (phone.value.trim() === "") {

        alert("Please enter your phone number.");

        phone.focus();

        return;

    }

    const phonePattern = /^[0-9]+$/;

    if (!phonePattern.test(phone.value.trim())) {

        alert("Phone number should contain only numbers.");

        phone.focus();

        return;

    }

});

/* ==========================
   SOCIAL PROFILE FADE
========================== */

const socialCards =
document.querySelectorAll(".social-card");

let currentSocial = 0;

setInterval(function () {

    socialCards[currentSocial].classList.remove("active");

    currentSocial++;

    if (currentSocial >= socialCards.length) {

        currentSocial = 0;

    }

    socialCards[currentSocial].classList.add("active");

}, 4000);
