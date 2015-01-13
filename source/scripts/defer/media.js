/**
 * Defer: Image loading
 * http://www.feedthebot.com/pagespeed/defer-images.html
 * --------------------------------------------------
 * Usage:
 * <img src="/images/placeholder.jpg" data-src="/images/file.jpg">
 */

;(function(window, document, undefined) {
  var images = document.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    if (images[i].getAttribute('data-src')) {
      images[i].setAttribute('src', images[i].getAttribute('data-src'));
    }
  }
})(window, document);

/**
 * Defer: Video loading
 * http://www.feedthebot.com/pagespeed/defer-videos.html
 * --------------------------------------------------
 * Usage:
 * <iframe src="" data-src="http://www.link-to-video.com/"></iframe>
 */

;(function(window, document, undefined) {
  var videos = document.getElementsByTagName('iframe');
  for (var i = 0; i < videos.length; i++) {
    if (videos[i].getAttribute('data-src')) {
      videos[i].setAttribute('src', videos[i].getAttribute('data-src'));
    }
  }
})(window, document);
