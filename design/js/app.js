$('.highlight').each(function () {
  $(this).before('<div class="zero-clipboard"><span class="btn-clipboard">Copy</span></div>');
});

ZeroClipboard.config({ swfPath: options.zeroclipboard.swfPath, hoverClass: 'btn-clipboard-hover' });

var client = new ZeroClipboard($('.btn-clipboard'));
var bridge = $('#global-zeroclipboard-html-bridge');

client.on('ready', function () {
  bridge.data('placement', 'auto').attr('title', 'Copy to clipboard').tooltip();
});

client.on('beforecopy', function (e) {
  var code = $(e.target).parent().nextAll('.highlight').first().text().trim();
  client.setText(code);
});

client.on('aftercopy', function () {
  bridge.attr('title', 'Copied!').tooltip('fixTitle').tooltip('show').attr('title', 'Copy to clipboard').tooltip('fixTitle')
});

client.on('error', function () {
  bridge.attr('title', 'Flash required').tooltip('fixTitle').tooltip('show')
});

$('div.highlight pre').each(function () {
  var contents = this.innerHTML.replace(/__(PUBLIC_KEY|SECRET_KEY)__/g, function(match) {
    if (match === '__PUBLIC_KEY__') {
      return '<span class="rewrite-key" data-value="public-key"></span>';
    } else if (match === '__SECRET_KEY__') {
      return '<span class="rewrite-key" data-value="secret-key"></span>';
    }
  });
  $(this).html(contents);
});

$('[data-toggle="tooltip"]').tooltip();
