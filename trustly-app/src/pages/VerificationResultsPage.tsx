import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle, XCircle, Clock, Shield } from 'lucide-react';

export const VerificationResultsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Verification Results
            </h1>
            <p className="text-gray-600">
              Verification ID: {id}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-green-600" />
                <h3 className="font-semibold">Criminal Record Check</h3>
                <span className="verification-badge verified">✓ Clear</span>
              </div>
              <p className="text-sm text-gray-600">
                No criminal record found in RCMP databases
              </p>
            </div>

            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h3 className="font-semibold">Identity Verification</h3>
                <span className="verification-badge verified">✓ Verified</span>
              </div>
              <p className="text-sm text-gray-600">
                Identity confirmed with government ID
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="btn-primary mr-4">
              Download Report
            </button>
            <button className="btn-secondary">
              Share Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};