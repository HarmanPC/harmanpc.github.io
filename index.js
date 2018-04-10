const loc = document.location;
function onId(id) {
  return document.getElementById(id);
}
function write(id, message) {
  if (!id || !message) return;
  onId(id).innerHTML = message;
}
function style(id) {
  if (!id) return;
  return onId(id).style;
}
