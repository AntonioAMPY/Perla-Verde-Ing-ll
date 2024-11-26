import { useEffect } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

const MapComponent = () => {
  useEffect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([-74.9933, 6.04222]),
        zoom: 15,
      }),
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '50vh' }}></div>;
};

export default MapComponent;