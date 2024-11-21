let bugCount = 0;
document.getElementById("reportBugForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const bugTitle = document.getElementById("bugTitle").value;
  const description = document.getElementById("description").value;
  const language = document.getElementById("bugLanguage").value;
  const assignee = document.getElementById("assignedBy").value; // Placeholder for assignee
  const assignedTo = document.getElementById("assignedTo").value; // Placeholder for assigned person
  addBugToTable(bugTitle, description, language, assignee, assignedTo);
  document.getElementById("reportBugForm").reset();
});

function addBugToTable(title, description, language, assee, assto) {
  const tableBody = document.getElementById("bugTableBody");
  bugCount++;
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${bugCount}</td><td>${title}</td><td>${description}</td><td>${language}</td><td>${assee}</td><td>${assto}</td>`;
  tableBody.appendChild(newRow);
}

// language filter

// document.addEventListener("DOMContentLoaded", () => {
//   const languageFilter = document.getElementById("language-filter");
//   const bugTableBody = document.getElementById("bugTableBody");
//   // Function to display bugs in the table
//   const displayBugs = (filteredBugs) => {
//     bugTableBody.innerHTML = ""; // Clear existing rows
//     filteredBugs.forEach((bug, index) => {
//       const row = document.createElement("tr");
//       row.innerHTML = `
//         <td>${index + 1}</td>
//         <td>${bug.title}</td>
//         <td>${bug.description}</td>
//         <td>${bug.language}</td>
//         <td>${bug.assignedBy}</td>
//         <td>${bug.assignedTo}</td>
//       `;
//       bugTableBody.appendChild(row);
//     });
//   };

//   // Filter bugs based on the selected language
//   const filterBugsByLanguage = () => {
//     const selectedLanguage = languageFilter.value;
//     if (selectedLanguage === "All") {
//       displayBugs(bugs); // Display all bugs if "All" is selected
//     } else {
//       const filteredBugs = bugs.filter(bug => bug.language === selectedLanguage);
//       displayBugs(filteredBugs);
//     }
//   };

//   // Initialize table with all bugs
//   displayBugs(bugs);
//   // Attach event listener to the dropdown
//   languageFilter.addEventListener("change", filterBugsByLanguage);
// });