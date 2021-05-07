var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1,
maxResolution:28004.466152261964,
 minResolution:280.0446615226196,

                style: style__1,
                interactive: true,
    title: 'Средний индекс качества городской среды<br />\
    <img src="styles/legend/_1_0.png" /> <150 <br />\
    <img src="styles/legend/_1_1.png" /> 150 - 170 <br />\
    <img src="styles/legend/_1_2.png" /> 170 - 190 <br />\
    <img src="styles/legend/_1_3.png" /> 190 - 210 <br />\
    <img src="styles/legend/_1_4.png" /> 210 - 230 <br />\
    <img src="styles/legend/_1_5.png" /> >230 <br />'
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2,
maxResolution:28.00446615226196,
 
                style: style__2,
                interactive: true,
    title: 'Дата постройки зданий Владимира<br />\
    <img src="styles/legend/_2_0.png" /> 1160 - 1325 <br />\
    <img src="styles/legend/_2_1.png" /> 1325 - 1547 <br />\
    <img src="styles/legend/_2_2.png" /> 1547 - 1721 <br />\
    <img src="styles/legend/_2_3.png" /> 1721 - 1917 <br />\
    <img src="styles/legend/_2_4.png" /> 1917 - 1991 <br />\
    <img src="styles/legend/_2_5.png" /> 1991 - 2020 <br />'
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3,
maxResolution:560.0893230452392,
 minResolution:28.00446615226196,

                style: style__3,
                interactive: true,
    title: 'Индекс качества городской среды<br />\
    <img src="styles/legend/_3_0.png" /> <150 <br />\
    <img src="styles/legend/_3_1.png" /> 150 - 170 <br />\
    <img src="styles/legend/_3_2.png" /> 170 - 190 <br />\
    <img src="styles/legend/_3_3.png" /> 190 - 210 <br />\
    <img src="styles/legend/_3_4.png" /> 210 - 230 <br />\
    <img src="styles/legend/_3_5.png" /> >230  <br />'
        });

lyr_Positron_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_Positron_0,lyr__1,lyr__2,lyr__3];
lyr__1.set('fieldAliases', {'fid': 'fid', 'Назва': 'Назва', 'Средн': 'Средн', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'Год п�': 'Год п�', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'Назва': 'Назва', 'Жильё': 'Жильё', 'Уличн': 'Уличн', 'Озеле': 'Озеле', 'Общес': 'Общес', 'Социа': 'Социа', 'Общег': 'Общег', 'Индек': 'Индек', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'Назва': 'TextEdit', 'Средн': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'Год п�': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'Назва': 'TextEdit', 'Жильё': 'TextEdit', 'Уличн': 'TextEdit', 'Озеле': 'TextEdit', 'Общес': 'TextEdit', 'Социа': 'TextEdit', 'Общег': 'TextEdit', 'Индек': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'Назва': 'inline label', 'Средн': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'Год п�': 'inline label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'Назва': 'inline label', 'Жильё': 'no label', 'Уличн': 'no label', 'Озеле': 'no label', 'Общес': 'no label', 'Социа': 'no label', 'Общег': 'no label', 'Индек': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});