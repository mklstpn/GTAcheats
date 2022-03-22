function view() {
  window.setInterval( function() {
    var img = new Image();
    img.src = "http://hostname.ru/gtacheat.jpg"; // Checks if picture 1x1 px exist
    img.onload = function() {
    }
    img.onerror = function() {
      var admobid = {}
      if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
        admobid = {
          banner: 'ca-app-pub-ххх',
          interstitial: 'ca-app-pub-xxx/xxx',
        }
      } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
        admobid = {
          banner: 'ca-app-pub-ххх',
          interstitial: 'ca-app-pub-xxx/xxx',
        }
      }

      document.addEventListener('deviceready', function() {
        admob.banner.config({
          id: admobid.banner,
          isTesting: false,
          autoShow: false,
        })
        admob.banner.prepare()

        admob.interstitial.config({
          id: admobid.interstitial,
          isTesting: false,
          autoShow: true,
        })
        admob.interstitial.prepare()
        admob.interstitial.show();

      }, false)

    }
  }, 90000);
}
