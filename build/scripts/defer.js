/**
 * Web Starter Kit v0.0.1
 * Monday, January 12th, 2015, 6:44:18 PM
 * 
 * 2014 Kris Olszewski | http://www.kolszewski.com/
 */

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

/* jshint -W069, -W030 */

/**
 * Defer: Google Plus Button
 * --------------------------------------------------
 */

(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/platform.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

/**
 * Defer: Facebook Like Button
 * --------------------------------------------------
 */

(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/**
 * Defer: Twitter Button
 * --------------------------------------------------
 */

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

/**
 * Defer: Google Analytics
 * --------------------------------------------------
 */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXXXXX-X', 'auto');
ga('send', 'pageview');
