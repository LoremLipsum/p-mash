'use strict';

(function() {

  var map = document.querySelector('#map');

  if(map) {
    ymaps.ready(function () {
      var map = new ymaps.Map('map', {
        center: [55.694429, 37.874302],
        zoom: 18,
        scrollZoom: false,
        controls: []
      }, {
        searchControlProvider: 'yandex#search'
      }),
      Placemark = new ymaps.Placemark([55.694429, 37.874302], {
        balloonContent: '140060, Московская обл., Люберецкий р-н., ул. Ленина, 52'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/images/pin-icon.png',
        iconImageSize: [30, 40],
        iconImageOffset: [-15, -50],
      });

      map.geoObjects.add(Placemark);
      map.behaviors.disable('scrollZoom');
      map.controls.add('zoomControl');
      var roadcontrolState = map.controls.get('zoomControl').state.get('size');
      map.controls.get('zoomControl').options.set('size', 'small');
    });
  }

})();
