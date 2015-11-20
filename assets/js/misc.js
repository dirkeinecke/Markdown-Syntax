function onlineDemoConvert(markdown) {
  var converter = new showdown.Converter();
  html = converter.makeHtml(markdown);
  document.getElementById('online-demo-html-code').innerHTML = html;
}
