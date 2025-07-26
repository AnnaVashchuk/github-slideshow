import React from 'react';
import { useParams } from 'react-router-dom';
import { Shield, CheckCircle, Star, Share2 } from 'lucide-react';

export const TrustProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card text-center mb-8">
          <div className="mx-auto w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-10 w-10 text-primary-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Trust Profile
          </h1>
          <p className="text-gray-600 mb-4">
            Verified by Trustly • Profile ID: {id}
          </p>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-lg font-semibold">Trust Score: 95/100</span>
          </div>
          <button className="btn-primary inline-flex items-center">
            <Share2 className="h-4 w-4 mr-2" />
            Share Profile
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <h3 className="font-semibold">Identity Verified</h3>
            </div>
            <p className="text-sm text-gray-600">
              Government ID verified on Dec 15, 2024
            </p>
          </div>

          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-green-600" />
              <h3 className="font-semibold">Background Clear</h3>
            </div>
            <p className="text-sm text-gray-600">
              No criminal record found (RCMP verified)
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>This profile is publicly shareable and verified by Trustly.</p>
          <p>Last updated: December 15, 2024</p>
        </div>
      </div>
    </div>
  );
};