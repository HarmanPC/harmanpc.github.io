const loc = document.location;
function id(id) {
  return document.getElementById("id");
}
function write(id, message) {
  if (!id || !message || !typeof message !== "string") return;
  id(id).innerHTML = message;
}
function style(id) {
  if (!id) return;
  return id(id).style;
}
