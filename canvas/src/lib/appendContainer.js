function appendContainer(id) {
  var container = document.createElement('div');
  container.id = id;
  document.body.appendChild(container);
  return container;
}

module.exports = appendContainer;
