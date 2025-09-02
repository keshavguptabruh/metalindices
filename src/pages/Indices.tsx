import React, { useState } from 'react';
import { BarChart3, Plus, Settings } from 'lucide-react';

const Indices = () => {
  const [selectedStandard, setSelectedStandard] = useState('WHO');
  const [customIndex, setCustomIndex] = useState({
    name: '',
    formula: '',
    parameters: '',
    limits: '',
  });

  const indices = [
    {
      name: 'Heavy Metal Pollution Index (HPI)',
      value: 42.8,
      status: 'Good',
      color: 'emerald',
      description: 'Measures contamination by heavy metals',
    },
    {
      name: 'Heavy Metal Evaluation Index (HEI)',
      value: 15.6,
      status: 'Excellent',
      color: 'green',
      description: 'Evaluates heavy metal contamination levels',
    },
    {
      name: 'Contamination Degree (Cd)',
      value: 68.2,
      status: 'Fair',
      color: 'amber',
      description: 'Overall contamination assessment',
    },
  ];

  const getStatusColor = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-800',
      green: 'bg-green-100 text-green-800',
      amber: 'bg-amber-100 text-amber-800',
      red: 'bg-red-100 text-red-800',
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Quality Indices</h1>
          <p className="text-lg text-gray-600">
            Analyze groundwater quality using standardized indices
          </p>
        </div>

        {/* Standards Selection */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Quality Standards</h3>
            <Settings className="h-5 w-5 text-gray-400" />
          </div>
          <div className="flex space-x-4">
            {['WHO', 'BIS', 'State'].map((standard) => (
              <button
                key={standard}
                onClick={() => setSelectedStandard(standard)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  selectedStandard === standard
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {standard}
              </button>
            ))}
          </div>
        </div>

        {/* Indices Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {indices.map((index, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="h-8 w-8 text-blue-600" />
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(index.color)}`}>
                  {index.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {index.name}
              </h3>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {index.value}
              </div>
              <p className="text-sm text-gray-600">
                {index.description}
              </p>
            </div>
          ))}
        </div>

        {/* Custom Index Creation */}
        <div className="bg-white rounded-xl shadow-lg p-8">
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
                placeholder="e.g., Custom Water Quality Index"
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
                placeholder="e.g., pH, TDS, Hardness, Chloride"
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
                placeholder="e.g., Σ(Wi × Qi) / Σ(Wi) where Wi = weight, Qi = quality rating"
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
                placeholder="e.g., pH: 6.5-8.5, TDS: <500mg/L, Hardness: <300mg/L"
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

export default Indices;