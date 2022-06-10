function openForm() {
  const e = document.getElementById("myForm");
  e.style.display = e.style.display != "none" ? "none" : "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
