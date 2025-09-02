import React from 'react';
import { FileText, Download, Calendar, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

const Reports = () => {
  const reports = [
    {
      id: 1,
      title: 'Monthly Water Quality Assessment',
      date: '2024-12-15',
      type: 'Monthly Report',
      status: 'Ready',
      size: '2.4 MB',
    },
    {
      id: 2,
      title: 'Heavy Metal Contamination Analysis',
      date: '2024-12-10',
      type: 'Special Analysis',
      status: 'Ready',
      size: '1.8 MB',
    },
    {
      id: 3,
      title: 'Seasonal Trend Analysis Q4 2024',
      date: '2024-12-05',
      type: 'Quarterly Report',
      status: 'Ready',
      size: '3.2 MB',
    },
    {
      id: 4,
      title: 'Compliance Assessment Report',
      date: '2024-12-01',
      type: 'Compliance',
      status: 'Ready',
      size: '1.5 MB',
    },
  ];

  const recommendations = [
    {
      level: 'critical',
      icon: AlertTriangle,
      title: 'Immediate Action Required',
      description: 'Wells 004 and 005 show elevated heavy metal concentrations requiring immediate intervention.',
      color: 'red',
    },
    {
      level: 'warning',
      icon: TrendingUp,
      title: 'Monitor Trending Issues',
      description: 'TDS levels in the northern region are showing an upward trend over the past 3 months.',
      color: 'amber',
    },
    {
      level: 'success',
      icon: CheckCircle,
      title: 'Good Performance',
      description: 'Southern wells maintain excellent water quality standards with consistent pH levels.',
      color: 'emerald',
    },
  ];

  const getRecommendationColor = (color: string) => {
    const colors = {
      red: 'bg-red-50 border-red-200 text-red-800',
      amber: 'bg-amber-50 border-amber-200 text-amber-800',
      emerald: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    };
    return colors[color as keyof typeof colors];
  };

  const getIconColor = (color: string) => {
    const colors = {
      red: 'text-red-600',
      amber: 'text-amber-600',
      emerald: 'text-emerald-600',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Reports & Analytics</h1>
          <p className="text-lg text-gray-600">
            Generated reports and recommendations based on groundwater quality analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Reports List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Generated Reports</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {reports.map((report) => (
                  <div key={report.id} className="p-6 hover:bg-gray-50 transition-colors duration-150">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-medium text-gray-900 mb-1">
                            {report.title}
                          </h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {report.date}
                            </span>
                            <span>{report.type}</span>
                            <span>{report.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          {report.status}
                        </span>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Recommendations</h3>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${getRecommendationColor(rec.color)}`}
                  >
                    <div className="flex items-start space-x-3">
                      <rec.icon className={`h-5 w-5 mt-0.5 ${getIconColor(rec.color)}`} />
                      <div>
                        <h4 className="font-medium mb-1">{rec.title}</h4>
                        <p className="text-sm opacity-90">{rec.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                  Generate New Report
                </button>
                <button className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200">
                  Schedule Report
                </button>
                <button className="w-full bg-emerald-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200">
                  Export All Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;