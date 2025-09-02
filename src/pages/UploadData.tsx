import React, { useState } from 'react';
import { Upload, FileText, CheckCircle } from 'lucide-react';

const UploadData = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setShowPreview(true);
    }
  };

  // Mock data for preview table
  const mockData = [
    { id: 1, location: 'Well-001', ph: 7.2, tds: 450, hardness: 180, chloride: 45, fluoride: 0.8 },
    { id: 2, location: 'Well-002', ph: 6.8, tds: 520, hardness: 220, chloride: 52, fluoride: 1.2 },
    { id: 3, location: 'Well-003', ph: 7.5, tds: 380, hardness: 160, chloride: 38, fluoride: 0.6 },
    { id: 4, location: 'Well-004', ph: 7.0, tds: 600, hardness: 280, chloride: 65, fluoride: 1.5 },
    { id: 5, location: 'Well-005', ph: 6.9, tds: 490, hardness: 200, chloride: 48, fluoride: 0.9 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Upload Groundwater Data</h1>
          <p className="text-lg text-gray-600">
            Upload your groundwater quality data in CSV or Excel format for analysis
          </p>
        </div>

        {/* Upload Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="max-w-md mx-auto">
            <div className="text-center">
              <div className="bg-blue-50 p-4 rounded-full w-fit mx-auto mb-4">
                <Upload className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Select Data File
              </h3>
              <p className="text-gray-600 mb-6">
                Supported formats: CSV, Excel (.xlsx, .xls)
              </p>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-blue-400 transition-colors duration-200">
                <input
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <FileText className="h-8 w-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-600">
                    Click to upload or drag and drop
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    CSV, XLSX, XLS up to 10MB
                  </span>
                </label>
              </div>

              {uploadedFile && (
                <div className="mt-4 p-3 bg-green-50 rounded-lg flex items-center justify-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-700 font-medium">
                    {uploadedFile.name} uploaded successfully
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Data Preview */}
        {showPreview && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Data Preview</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      pH
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      TDS (mg/L)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hardness (mg/L)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Chloride (mg/L)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fluoride (mg/L)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockData.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {row.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {row.ph}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {row.tds}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {row.hardness}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {row.chloride}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {row.fluoride}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Process Data
              </button>
              <button className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200">
                Clear Data
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadData;