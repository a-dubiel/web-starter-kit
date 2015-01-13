<!-- JavaScript -->
<script src="/scripts/main.min.js"></script>
<!-- Defer JavaScript -->
<script>
  // http://www.feedthebot.com/pagespeed/defer-loading-javascript.html
  function downloadDeferJS() {
    var element = document.createElement('script');
    element.src = '/scripts/defer.min.js';
    document.body.appendChild(element);
  } // downloadDeferJS()
  if (window.addEventListener) {
    window.addEventListener('load', downloadDeferJS, false);
  } else if (window.attachEvent) {
    window.attachEvent('onload', downloadDeferJS);
  }
</script>
