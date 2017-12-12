              function initMap() {
                var uluru = {lat: 56.951057, lng: 24.100637};
                var map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 15,
                  center: uluru
                });
                var marker = new google.maps.Marker({
                  position: uluru,
                  map: map
                });
              }

              $(document).ready(function() {
                $(".animsition").animsition({
                  inClass: 'fade-in',
                  outClass: 'fade-out',
                  inDuration: 1500,
                  outDuration: 800,
                  linkElement: '.animsition-link',
                  // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
                  loading: true,
                  loadingParentElement: 'body', //animsition wrapper element
                  loadingClass: 'animsition-loading',
                  loadingInner: '', // e.g '<img src="loading.svg" />'
                  timeout: false,
                  timeoutCountdown: 5000,
                  onLoadEvent: true,
                  browser: [ 'animation-duration', '-webkit-animation-duration'],
                  // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
                  // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
                  overlay : false,
                  overlayClass : 'animsition-overlay-slide',
                  overlayParentElement : 'body',
                  transition: function(url){ window.location.href = url; }
                });
              });

              
            
    