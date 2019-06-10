ymaps.ready(init);

function init(){

  var myMap;

  myMap = new ymaps.Map("map", {
    center: [59.938631, 30.323055],
    zoom: 17,
    controls: []
  });

  myMap.behaviors.disable("scrollZoom");

  myMap.controls.add("zoomControl", {
    position: {top: 30, right: 15}
  });

  var myPlacemark = new ymaps.Placemark([59.938631, 30.323055] , {},
    { iconLayout: "default#image",
      iconImageHref: "img/decor/icon-map-pin.svg",
      iconImageSize: [67, 100],
      iconImageOffset: [-24, -82]
    });

  myMap.geoObjects.add(myPlacemark);
}
