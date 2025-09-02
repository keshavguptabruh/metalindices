import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, BarChart3, Map, FileText, Droplets, CheckCircle } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Upload,
      title: 'Data Upload',
      description: 'Upload groundwater quality data from CSV or Excel files',
    },
    {
      icon: BarChart3,
      title: 'Quality Indices',
      description: 'Calculate HPI, HEI, and Cd indices with customizable parameters',
    },
    {
      icon: Map,
      title: 'Map Visualization',
      description: 'View spatial distribution of water quality with interactive maps',
    },
    {
      icon: FileText,
      title: 'Reports',
      description: 'Generate comprehensive reports and recommendations',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50">
      {/* Hero Section */}
      <section className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-blue-600 p-4 rounded-full">
                <Droplets className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Groundwater Quality
              <span className="text-blue-600 block">Assessment Platform</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive analysis and visualization of groundwater quality data using 
              advanced indices and spatial mapping for informed decision-making.
            </p>
            <Link
              to="/upload"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
            >
              <Upload className="h-5 w-5 mr-2" />
              Upload Groundwater Data
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Analysis Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to analyze, visualize, and report on groundwater quality data
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Data Points Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">15</div>
              <div className="text-gray-600">Quality Parameters</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">3</div>
              <div className="text-gray-600">Assessment Indices</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;