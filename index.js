function id(id) {
  return document.getElementById("id");
}
function write(id, message) {
  if (!id || !message || !typeof message !== "string") return;
  id(id).innerHTML = message;
}
const loc = document.location;
