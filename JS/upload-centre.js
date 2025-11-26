const sidebar = document.querySelector(".sidebar");
const menuToggle = document.getElementById("menuToggle");
const uploadArea = document.getElementById("uploadArea");
const fileInput = document.getElementById("fileInput");
const fileTable = document.querySelector("#fileTable tbody");

menuToggle.addEventListener("click", () => sidebar.classList.toggle("active"));

uploadArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadArea.classList.add("dragover");
});

uploadArea.addEventListener("dragleave", () => {
  uploadArea.classList.remove("dragover");
});

uploadArea.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadArea.classList.remove("dragover");
  const files = e.dataTransfer.files;
  handleFiles(files);
});

fileInput.addEventListener("change", (e) => {
  handleFiles(e.target.files);
});

function handleFiles(files) {
  Array.from(files).forEach((file) => {
    const fileType = detectFileType(file.name);
    const date = new Date().toLocaleString();
    const row = `
          <tr>
            <td>${file.name}</td>
            <td>${fileType}</td>
            <td>Admin</td>
            <td>${date}</td>
            <td>
              <button class="btn view">View</button>
              <button class="btn download">Download</button>
              <button class="btn delete" onclick="this.closest('tr').remove()">Delete</button>
            </td>
          </tr>
        `;
    fileTable.insertAdjacentHTML("beforeend", row);
  });
}

function detectFileType(name) {
  const lower = name.toLowerCase();
  if (lower.includes("xray") || lower.includes("mri") || lower.includes("scan"))
    return "Scan";
  if (lower.includes("report")) return "Lab Report";
  if (lower.includes("prescription")) return "Prescription";
  return "Admin Document";
}
