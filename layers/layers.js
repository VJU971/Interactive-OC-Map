var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BlankPrecincts_1 = new ol.format.GeoJSON();
var features_BlankPrecincts_1 = format_BlankPrecincts_1.readFeatures(json_BlankPrecincts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlankPrecincts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlankPrecincts_1.addFeatures(features_BlankPrecincts_1);
var lyr_BlankPrecincts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlankPrecincts_1, 
                style: style_BlankPrecincts_1,
                popuplayertitle: 'Blank Precincts',
                interactive: false,
                title: '<img src="styles/legend/BlankPrecincts_1.png" /> Blank Precincts'
            });
var format_OCPrecincts_2 = new ol.format.GeoJSON();
var features_OCPrecincts_2 = format_OCPrecincts_2.readFeatures(json_OCPrecincts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OCPrecincts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OCPrecincts_2.addFeatures(features_OCPrecincts_2);
var lyr_OCPrecincts_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OCPrecincts_2, 
                style: style_OCPrecincts_2,
                popuplayertitle: 'OC Precincts',
                interactive: true,
    title: 'OC Precincts<br />\
    <img src="styles/legend/OCPrecincts_2_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/OCPrecincts_2_1.png" /> 0.45 - 1<br />\
    <img src="styles/legend/OCPrecincts_2_2.png" /> 0.4 - 0.45<br />\
    <img src="styles/legend/OCPrecincts_2_3.png" /> 0.35 - 0.4<br />\
    <img src="styles/legend/OCPrecincts_2_4.png" /> 0.3 - 0.35<br />\
    <img src="styles/legend/OCPrecincts_2_5.png" /> 0.25 - 0.3<br />\
    <img src="styles/legend/OCPrecincts_2_6.png" /> 0.2 - 0.25<br />\
    <img src="styles/legend/OCPrecincts_2_7.png" /> 0.15 - 0.2<br />\
    <img src="styles/legend/OCPrecincts_2_8.png" /> 0.1 - 0.15<br />\
    <img src="styles/legend/OCPrecincts_2_9.png" /> 0.05 - 0.1<br />\
    <img src="styles/legend/OCPrecincts_2_10.png" /> 0 - 0.05<br />\
    <img src="styles/legend/OCPrecincts_2_11.png" /> 0 - 0<br />\
    <img src="styles/legend/OCPrecincts_2_12.png" /> -0.05 - 0<br />\
    <img src="styles/legend/OCPrecincts_2_13.png" /> -0.1 - -0.05<br />\
    <img src="styles/legend/OCPrecincts_2_14.png" /> -0.15 - -0.1<br />\
    <img src="styles/legend/OCPrecincts_2_15.png" /> -0.2 - -0.15<br />\
    <img src="styles/legend/OCPrecincts_2_16.png" /> -0.25 - -0.2<br />\
    <img src="styles/legend/OCPrecincts_2_17.png" /> -0.3 - -0.25<br />\
    <img src="styles/legend/OCPrecincts_2_18.png" /> -0.35 - -0.3<br />\
    <img src="styles/legend/OCPrecincts_2_19.png" /> -0.4 - -0.35<br />\
    <img src="styles/legend/OCPrecincts_2_20.png" /> -0.45 - -0.4<br />\
    <img src="styles/legend/OCPrecincts_2_21.png" /> -1 - -0.45<br />' });
var format_OCHouseDistricts_3 = new ol.format.GeoJSON();
var features_OCHouseDistricts_3 = format_OCHouseDistricts_3.readFeatures(json_OCHouseDistricts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OCHouseDistricts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OCHouseDistricts_3.addFeatures(features_OCHouseDistricts_3);
var lyr_OCHouseDistricts_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OCHouseDistricts_3, 
                style: style_OCHouseDistricts_3,
                popuplayertitle: 'OC House Districts',
                interactive: false,
                title: '<img src="styles/legend/OCHouseDistricts_3.png" /> OC House Districts'
            });
var format_OCBoundary_4 = new ol.format.GeoJSON();
var features_OCBoundary_4 = format_OCBoundary_4.readFeatures(json_OCBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OCBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OCBoundary_4.addFeatures(features_OCBoundary_4);
var lyr_OCBoundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OCBoundary_4, 
                style: style_OCBoundary_4,
                popuplayertitle: 'OC Boundary',
                interactive: false,
                title: '<img src="styles/legend/OCBoundary_4.png" /> OC Boundary'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BlankPrecincts_1.setVisible(true);lyr_OCPrecincts_2.setVisible(true);lyr_OCHouseDistricts_3.setVisible(true);lyr_OCBoundary_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BlankPrecincts_1,lyr_OCPrecincts_2,lyr_OCHouseDistricts_3,lyr_OCBoundary_4];
lyr_BlankPrecincts_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNTY_NAM': 'COUNTY_NAM', 'COUNTY_ABB': 'COUNTY_ABB', 'COUNTY_NUM': 'COUNTY_NUM', 'COUNTY_COD': 'COUNTY_COD', 'COUNTY_FIP': 'COUNTY_FIP', 'ISLAND': 'ISLAND', 'GlobalID': 'GlobalID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_OCPrecincts_2.set('fieldAliases', {'Precinct': 'Precinct', 'County': 'County', 'CDP': 'CDP', 'House Dist': 'House Dist', 'Total Vote': 'Total Vote', 'Dem House Vote': 'Dem House Vote', 'Rep House Vote': 'Rep House Vote', 'Pres Dem': 'Pres Dem', 'Pres Rep': 'Pres Rep', 'Prs Margin': 'Prs Margin', 'White%': 'White%', 'Latino%': 'Latino%', 'Asian%': 'Asian%', 'Top API Nationality': 'Top API Nationality', 'Black%': 'Black%', });
lyr_OCHouseDistricts_3.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', 'DISTRICT': 'DISTRICT', 'MEMBERS': 'MEMBERS', 'LOCKED': 'LOCKED', 'NAME': 'NAME', 'POPULATION': 'POPULATION', 'CVAP_19': 'CVAP_19', 'HSP_CVAP_1': 'HSP_CVAP_1', 'DOJ_NH_BLK': 'DOJ_NH_BLK', 'DOJ_NH_ASN': 'DOJ_NH_ASN', 'NH_WHT_CVA': 'NH_WHT_CVA', 'IDEAL_VALU': 'IDEAL_VALU', 'DEVIATION': 'DEVIATION', 'F_DEVIATIO': 'F_DEVIATIO', 'MULTIPLE_F': 'MULTIPLE_F', 'F_CVAP_19': 'F_CVAP_19', 'F_HSP_CVAP': 'F_HSP_CVAP', 'F_DOJ_NH_B': 'F_DOJ_NH_B', 'F_DOJ_NH_A': 'F_DOJ_NH_A', 'F_NH_WHT_C': 'F_NH_WHT_C', 'DISTRICT_L': 'DISTRICT_L', 'DISTRICT_N': 'DISTRICT_N', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_OCBoundary_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNTY_NAM': 'COUNTY_NAM', 'COUNTY_ABB': 'COUNTY_ABB', 'COUNTY_NUM': 'COUNTY_NUM', 'COUNTY_COD': 'COUNTY_COD', 'COUNTY_FIP': 'COUNTY_FIP', 'ISLAND': 'ISLAND', 'GlobalID': 'GlobalID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BlankPrecincts_1.set('fieldImages', {'OBJECTID': 'Range', 'COUNTY_NAM': 'TextEdit', 'COUNTY_ABB': 'TextEdit', 'COUNTY_NUM': 'Range', 'COUNTY_COD': 'TextEdit', 'COUNTY_FIP': 'TextEdit', 'ISLAND': 'TextEdit', 'GlobalID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_OCPrecincts_2.set('fieldImages', {'Precinct': 'TextEdit', 'County': 'TextEdit', 'CDP': 'TextEdit', 'House Dist': 'TextEdit', 'Total Vote': 'Range', 'Dem House Vote': 'TextEdit', 'Rep House Vote': 'TextEdit', 'Pres Dem': 'TextEdit', 'Pres Rep': 'TextEdit', 'Prs Margin': 'TextEdit', 'White%': 'Range', 'Latino%': 'Range', 'Asian%': 'Range', 'Top API Nationality': 'TextEdit', 'Black%': 'Range', });
lyr_OCHouseDistricts_3.set('fieldImages', {'ID': 'TextEdit', 'AREA': 'TextEdit', 'DISTRICT': 'TextEdit', 'MEMBERS': 'TextEdit', 'LOCKED': 'TextEdit', 'NAME': 'TextEdit', 'POPULATION': 'TextEdit', 'CVAP_19': 'TextEdit', 'HSP_CVAP_1': 'TextEdit', 'DOJ_NH_BLK': 'TextEdit', 'DOJ_NH_ASN': 'TextEdit', 'NH_WHT_CVA': 'TextEdit', 'IDEAL_VALU': 'TextEdit', 'DEVIATION': 'TextEdit', 'F_DEVIATIO': 'TextEdit', 'MULTIPLE_F': 'TextEdit', 'F_CVAP_19': 'TextEdit', 'F_HSP_CVAP': 'TextEdit', 'F_DOJ_NH_B': 'TextEdit', 'F_DOJ_NH_A': 'TextEdit', 'F_NH_WHT_C': 'TextEdit', 'DISTRICT_L': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_OCBoundary_4.set('fieldImages', {'OBJECTID': 'Range', 'COUNTY_NAM': 'TextEdit', 'COUNTY_ABB': 'TextEdit', 'COUNTY_NUM': 'Range', 'COUNTY_COD': 'TextEdit', 'COUNTY_FIP': 'TextEdit', 'ISLAND': 'TextEdit', 'GlobalID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BlankPrecincts_1.set('fieldLabels', {'OBJECTID': 'no label', 'COUNTY_NAM': 'no label', 'COUNTY_ABB': 'no label', 'COUNTY_NUM': 'no label', 'COUNTY_COD': 'no label', 'COUNTY_FIP': 'no label', 'ISLAND': 'no label', 'GlobalID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_OCPrecincts_2.set('fieldLabels', {'Precinct': 'inline label - always visible', 'County': 'inline label - always visible', 'CDP': 'inline label - always visible', 'House Dist': 'inline label - always visible', 'Total Vote': 'inline label - always visible', 'Dem House Vote': 'inline label - always visible', 'Rep House Vote': 'inline label - always visible', 'Pres Dem': 'inline label - always visible', 'Pres Rep': 'inline label - always visible', 'Prs Margin': 'inline label - always visible', 'White%': 'inline label - always visible', 'Latino%': 'inline label - always visible', 'Asian%': 'inline label - always visible', 'Top API Nationality': 'inline label - always visible', 'Black%': 'inline label - always visible', });
lyr_OCHouseDistricts_3.set('fieldLabels', {'ID': 'no label', 'AREA': 'no label', 'DISTRICT': 'no label', 'MEMBERS': 'no label', 'LOCKED': 'no label', 'NAME': 'no label', 'POPULATION': 'no label', 'CVAP_19': 'no label', 'HSP_CVAP_1': 'no label', 'DOJ_NH_BLK': 'no label', 'DOJ_NH_ASN': 'no label', 'NH_WHT_CVA': 'no label', 'IDEAL_VALU': 'no label', 'DEVIATION': 'no label', 'F_DEVIATIO': 'no label', 'MULTIPLE_F': 'no label', 'F_CVAP_19': 'no label', 'F_HSP_CVAP': 'no label', 'F_DOJ_NH_B': 'no label', 'F_DOJ_NH_A': 'no label', 'F_NH_WHT_C': 'no label', 'DISTRICT_L': 'no label', 'DISTRICT_N': 'no label', });
lyr_OCBoundary_4.set('fieldLabels', {'OBJECTID': 'no label', 'COUNTY_NAM': 'no label', 'COUNTY_ABB': 'no label', 'COUNTY_NUM': 'no label', 'COUNTY_COD': 'no label', 'COUNTY_FIP': 'no label', 'ISLAND': 'no label', 'GlobalID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_OCBoundary_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});