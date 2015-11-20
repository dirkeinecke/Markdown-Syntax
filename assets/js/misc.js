function htmlEntities(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function onlineDemoConvert(markdown) {
  var converter = new showdown.Converter();
  html = converter.makeHtml(markdown);
  document.getElementById('online-demo-html-code').innerHTML = htmlEntities(html);
  document.getElementById('online-demo-output').innerHTML = html;
}
