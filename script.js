
// Load data
let students = JSON.parse(localStorage.getItem("students")) || [];

function login() {

    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;

    if (u === "admin" && p === "admin123") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboard").classList.remove("hidden");
        render();
    } else {
        alert("Invalid Login");
    }
}

function logout() {
    location.reload();
}

function addStudent() {

    let name = document.getElementById("studentName").value;

    if (name === "") return;

    students.push({
        name: name,
        present: 0,
        absent: 0
    });

    save();
    render();
}

function markPresent() {

    let i = document.getElementById("studentSelect").value;
    students[i].present++;
    save();
    render();
}

function markAbsent() {

    let i = document.getElementById("studentSelect").value;
    students[i].absent++;
    save();
    render();
}

function save() {
    localStorage.setItem("students", JSON.stringify(students));
}

function render() {

    let list = document.getElementById("studentList");
    let select = document.getElementById("studentSelect");
    let report = document.getElementById("report");

    list.innerHTML = "";
    select.innerHTML = "";
    report.innerHTML = "";

    students.forEach((s, i) => {

        list.innerHTML += `
            <li>
                ${s.name} |
                Present: ${s.present} |
                Absent: ${s.absent} |
                ${getPercent(s)}%
            </li>
        `;

        select.innerHTML += `<option value="${i}">${s.name}</option>`;
    });

    students.forEach(s => {

        report.innerHTML += `
            <p>${s.name} → ${getPercent(s)}%</p>
        `;
    });
}

function getPercent(s) {

    let total = s.present + s.absent;
    if (total === 0) return 0;

    return Math.round((s.present / total) * 100);
}

// initial render
render();
