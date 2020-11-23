var wms_layers = [];
var format_tun_gouvernorats_utm_0 = new ol.format.GeoJSON();
var features_tun_gouvernorats_utm_0 = format_tun_gouvernorats_utm_0.readFeatures(json_tun_gouvernorats_utm_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tun_gouvernorats_utm_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_tun_gouvernorats_utm_0.addFeatures(features_tun_gouvernorats_utm_0);var lyr_tun_gouvernorats_utm_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tun_gouvernorats_utm_0, 
                style: style_tun_gouvernorats_utm_0,
    title: 'tun_gouvernorats_utm<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_0.png" /> <br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_1.png" /> Ariana<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_2.png" /> Beja<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_3.png" /> Ben Arous<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_4.png" /> Bizerte<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_5.png" /> Gabes<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_6.png" /> Gafsa<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_7.png" /> Jendouba<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_8.png" /> Kairouan<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_9.png" /> Kasserine<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_10.png" /> Kebili<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_11.png" /> Le Kef<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_12.png" /> Mahdia<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_13.png" /> Manouba<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_14.png" /> Medenine<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_15.png" /> Monastir<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_16.png" /> Nabeul<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_17.png" /> Sfax<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_18.png" /> Sidi Bou Zid<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_19.png" /> Siliana<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_20.png" /> Sousse<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_21.png" /> Tataouine<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_22.png" /> Tozeur<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_23.png" /> Tunis<br />\
    <img src="styles/legend/tun_gouvernorats_utm_0_24.png" /> Zaghouan<br />'
        });

lyr_tun_gouvernorats_utm_0.setVisible(true);
var layersList = [lyr_tun_gouvernorats_utm_0];
lyr_tun_gouvernorats_utm_0.set('fieldAliases', {'IDG': 'IDG', 'NOMG': 'NOMG', 'IDPAYS': 'IDPAYS', });
lyr_tun_gouvernorats_utm_0.set('fieldImages', {'IDG': 'TextEdit', 'NOMG': 'TextEdit', 'IDPAYS': 'TextEdit', });
lyr_tun_gouvernorats_utm_0.set('fieldLabels', {'IDG': 'no label', 'NOMG': 'no label', 'IDPAYS': 'no label', });
lyr_tun_gouvernorats_utm_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});