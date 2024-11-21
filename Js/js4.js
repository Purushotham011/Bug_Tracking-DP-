document.getElementById('reportBugForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Capture form data
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const language = document.getElementById('bugLanguage').value;
    const type = "Bug"; // Placeholder for bug type
    const priority = "High"; // Placeholder for priority
    const status = "Open"; // Placeholder for status
    const assignee = "Admin"; // Placeholder for assignee
    const assignedTo = "Developer"; // Placeholder for assigned person
    const assignedDate = new Date().toLocaleDateString();
  
    // Insert new row in the bug table
    const bugTableBody = document.getElementById('bugTableBody');
    const newRow = bugTableBody.insertRow();
  
    const serialNumberCell = newRow.insertCell(0);
    const bugNameCell = newRow.insertCell(1);
    const typeCell = newRow.insertCell(2);
    const priorityCell = newRow.insertCell(3);
    const statusCell = newRow.insertCell(4);
    const assigneeCell = newRow.insertCell(5);
    const assignedToCell = newRow.insertCell(6);
    const assignedDateCell = newRow.insertCell(7);
    const languageCell = newRow.insertCell(8);
  
    serialNumberCell.textContent = bugTableBody.rows.length;
    bugNameCell.textContent = title;
    typeCell.textContent = type;
    priorityCell.textContent = priority;
    statusCell.textContent = status;
    assigneeCell.textContent = assignee;
    assignedToCell.textContent = assignedTo;
    assignedDateCell.textContent = assignedDate;
    languageCell.textContent = language;
  
    newRow.setAttribute('data-language', language); // Add language attribute for filtering
  
    // Reset the form after submission
    document.getElementById('reportBugForm').reset();
  });
  
  // Function to filter bugs by selected language
  function filterBugsByLanguage() {
    const selectedLanguage = document.getElementById('language-filter').value;
    const bugRows = document.querySelectorAll('#bugTableBody tr');
  
    bugRows.forEach(row => {
      const bugLanguage = row.getAttribute('data-language');
      if (selectedLanguage === 'All' || bugLanguage === selectedLanguage) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }



  