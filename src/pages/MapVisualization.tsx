import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom marker icons
const createCustomIcon = (color: string) => new Icon({
  iconUrl: `data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <circle cx="12" cy="12" r="10" fill="${color}" stroke="white" stroke-width="2"/>
    </svg>
  `)}`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
});

const MapVisualization = () => {
  // Mock data for map markers
  const locations = [
    { id: 1, name: 'Well-001', lat: 28.6139, lng: 77.2090, quality: 'Excellent', color: '#10B981', hpi: 25.4 },
    { id: 2, name: 'Well-002', lat: 28.6169, lng: 77.2120, quality: 'Good', color: '#059669', hpi: 42.8 },
    { id: 3, name: 'Well-003', lat: 28.6199, lng: 77.2150, quality: 'Fair', color: '#F59E0B', hpi: 68.2 },
    { id: 4, name: 'Well-004', lat: 28.6129, lng: 77.2180, quality: 'Poor', color: '#F97316', hpi: 85.6 },
    { id: 5, name: 'Well-005', lat: 28.6159, lng: 77.2050, quality: 'Very Poor', color: '#EF4444', hpi: 95.3 },
  ];

  const legend = [
    { label: 'Excellent', color: '#10B981', range: '0-25' },
    { label: 'Good', color: '#059669', range: '25-50' },
    { label: 'Fair', color: '#F59E0B', range: '50-75' },
    { label: 'Poor', color: '#F97316', range: '75-100' },
    { label: 'Very Poor', color: '#EF4444', range: '>100' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Map Visualization</h1>
          <p className="text-lg text-gray-600">
            Spatial distribution of groundwater quality across monitoring locations
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Map Container */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-96 lg:h-[600px]">
              <MapContainer
                center={[28.6139, 77.2090]}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {locations.map((location) => (
                  <Marker
                    key={location.id}
                    position={[location.lat, location.lng]}
                    icon={createCustomIcon(location.color)}
                  >
                    <Popup>
                      <div className="p-2">
                        <h4 className="font-semibold text-gray-900">{location.name}</h4>
                        <p className="text-sm text-gray-600">Quality: {location.quality}</p>
                        <p className="text-sm text-gray-600">HPI: {location.hpi}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>

          {/* Legend */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Water Quality Classification</h3>
              <div className="space-y-3">
                {legend.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{item.label}</div>
                      <div className="text-xs text-gray-500">HPI: {item.range}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Statistics */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Locations</span>
                  <span className="text-sm font-medium text-gray-900">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Excellent/Good</span>
                  <span className="text-sm font-medium text-emerald-600">40%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Fair</span>
                  <span className="text-sm font-medium text-amber-600">20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Poor/Very Poor</span>
                  <span className="text-sm font-medium text-red-600">40%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Index Controls */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {indices.map((index, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600" />
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(index.color)}`}>
                  {index.status}
                </span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{index.name}</h4>
              <div className="text-2xl font-bold text-gray-900 mb-2">{index.value}</div>
              <p className="text-sm text-gray-600">{index.description}</p>
            </div>
          ))}
        </div>

        {/* Custom Index Form */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Plus className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">Create Custom Index</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Index Name
              </label>
              <input
                type="text"
                value={customIndex.name}
                onChange={(e) => setCustomIndex({...customIndex, name: e.target.value})}
                placeholder="Custom Quality Index"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Parameters
              </label>
              <input
                type="text"
                value={customIndex.parameters}
                onChange={(e) => setCustomIndex({...customIndex, parameters: e.target.value})}
                placeholder="pH, TDS, Heavy Metals"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Formula
              </label>
              <textarea
                value={customIndex.formula}
                onChange={(e) => setCustomIndex({...customIndex, formula: e.target.value})}
                placeholder="Enter mathematical formula for index calculation"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Permissible Limits
              </label>
              <textarea
                value={customIndex.limits}
                onChange={(e) => setCustomIndex({...customIndex, limits: e.target.value})}
                placeholder="Define acceptable ranges for each parameter"
                rows={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
          
          <button className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200">
            Save Custom Index
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapVisualization;