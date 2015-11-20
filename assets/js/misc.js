function htmlEntities(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function nl2br(str) {
  return String(str).replace(/(?:\r\n|\r|\n)/g, '<br>')
}

function onlineDemoConvert(markdown) {
  var converter = new showdown.Converter();
  html = converter.makeHtml(markdown);
  document.getElementById('online-demo-html-code').innerHTML = nl2br(htmlEntities(html));
  document.getElementById('online-demo-output').innerHTML = html;
}
