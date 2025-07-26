import React, { useState, useRef } from 'react';
import { 
  Upload, 
  Camera, 
  FileCheck, 
  UserCheck, 
  Shield, 
  CreditCard,
  CheckCircle,
  AlertCircle,
  X,
  Eye,
  EyeOff
} from 'lucide-react';
import { VerificationType } from '../types';

export const SelfVerificationPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedVerifications, setSelectedVerifications] = useState<VerificationType[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File}>({});
  const [consentGiven, setConsentGiven] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const verificationOptions = [
    {
      type: 'criminal' as VerificationType,
      icon: FileCheck,
      title: 'Criminal Record Check',
      description: 'RCMP background check with official sources',
      required: ['consent'],
      optional: []
    },
    {
      type: 'identity' as VerificationType,
      icon: UserCheck,
      title: 'Identity Verification',
      description: 'Government ID verification with facial recognition',
      required: ['id_document', 'selfie'],
      optional: []
    },
    {
      type: 'marriage' as VerificationType,
      icon: Shield,
      title: 'Marriage Status',
      description: 'Verified marital status from provincial records',
      required: ['consent'],
      optional: ['marriage_certificate']
    },
    {
      type: 'credit' as VerificationType,
      icon: CreditCard,
      title: 'Credit Score Check',
      description: 'Credit score and payment history',
      required: ['consent', 'sin_verification'],
      optional: []
    }
  ];

  const handleVerificationToggle = (type: VerificationType) => {
    setSelectedVerifications(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, fileType: string) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFiles(prev => ({
        ...prev,
        [fileType]: file
      }));
    }
  };

  const handleSubmit = async () => {
    setIsProcessing(true);
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsProcessing(false);
    setShowResults(true);
    setCurrentStep(4);
  };

  const renderStep1 = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Select Verification Types
        </h2>
        <p className="text-gray-600">
          Choose which aspects of your identity you'd like to verify
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {verificationOptions.map((option) => (
          <div
            key={option.type}
            className={`card cursor-pointer transition-all duration-200 ${
              selectedVerifications.includes(option.type)
                ? 'ring-2 ring-primary-500 bg-primary-50'
                : 'hover:shadow-md'
            }`}
            onClick={() => handleVerificationToggle(option.type)}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${
                selectedVerifications.includes(option.type)
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                <option.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                <div className="text-xs text-gray-500">
                  <p>Required: {option.required.join(', ')}</p>
                  {option.optional.length > 0 && (
                    <p>Optional: {option.optional.join(', ')}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedVerifications.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">What you'll need:</p>
              <ul className="space-y-1">
                {selectedVerifications.includes('identity') && (
                  <>
                    <li>• Government-issued photo ID (passport, driver's license)</li>
                    <li>• Clear selfie photo for facial recognition</li>
                  </>
                )}
                {selectedVerifications.includes('credit') && (
                  <li>• Social Insurance Number for credit bureau access</li>
                )}
                {selectedVerifications.includes('marriage') && (
                  <li>• Marriage certificate (if applicable)</li>
                )}
                <li>• Consent to check official government sources</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Upload Documents
        </h2>
        <p className="text-gray-600">
          Please upload the required documents for verification
        </p>
      </div>

      {selectedVerifications.includes('identity') && (
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Identity Verification</h3>
            
            {/* ID Document Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => handleFileUpload(e, 'id_document')}
                accept="image/*"
                className="hidden"
              />
              {uploadedFiles.id_document ? (
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <span className="text-green-600 font-medium">
                    {uploadedFiles.id_document.name}
                  </span>
                  <button
                    onClick={() => setUploadedFiles(prev => ({ ...prev, id_document: undefined as any }))}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <div onClick={() => fileInputRef.current?.click()} className="cursor-pointer">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-900 mb-2">Upload Government ID</p>
                  <p className="text-sm text-gray-600">
                    Passport, driver's license, or provincial ID card
                  </p>
                </div>
              )}
            </div>

            {/* Selfie Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors mt-4">
              <input
                type="file"
                onChange={(e) => handleFileUpload(e, 'selfie')}
                accept="image/*"
                className="hidden"
                id="selfie-upload"
              />
              {uploadedFiles.selfie ? (
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <span className="text-green-600 font-medium">
                    Selfie uploaded
                  </span>
                  <button
                    onClick={() => setUploadedFiles(prev => ({ ...prev, selfie: undefined as any }))}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <label htmlFor="selfie-upload" className="cursor-pointer">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-900 mb-2">Take Selfie</p>
                  <p className="text-sm text-gray-600">
                    Clear photo of your face for identity matching
                  </p>
                </label>
              )}
            </div>
          </div>
        </div>
      )}

      {selectedVerifications.includes('marriage') && (
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Marriage Status</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
            <input
              type="file"
              onChange={(e) => handleFileUpload(e, 'marriage_certificate')}
              accept="image/*,.pdf"
              className="hidden"
              id="marriage-upload"
            />
            {uploadedFiles.marriage_certificate ? (
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <span className="text-green-600 font-medium">
                  {uploadedFiles.marriage_certificate.name}
                </span>
                <button
                  onClick={() => setUploadedFiles(prev => ({ ...prev, marriage_certificate: undefined as any }))}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <label htmlFor="marriage-upload" className="cursor-pointer">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-900 mb-2">Marriage Certificate (Optional)</p>
                <p className="text-sm text-gray-600">
                  Upload if you want to verify married status
                </p>
              </label>
            )}
          </div>
        </div>
      )}
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Consent & Authorization
        </h2>
        <p className="text-gray-600">
          Please review and provide consent for the verification process
        </p>
      </div>

      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Verification Summary</h3>
        <div className="space-y-3">
                                 {selectedVerifications.map(type => {
              const option = verificationOptions.find(opt => opt.type === type);
              if (!option) return null;
              return (
                <div key={type} className="flex items-center space-x-3">
                  <option.icon className="h-5 w-5 text-primary-600" />
                  <span>{option.title}</span>
                </div>
              );
            })}
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Consent Agreement</h3>
        <div className="space-y-4 text-sm text-gray-700">
          <p>By proceeding, I consent to Trustly:</p>
          <ul className="space-y-2 ml-4">
            <li>• Verifying my identity using the provided documents</li>
            {selectedVerifications.includes('criminal') && (
              <li>• Conducting a criminal background check through RCMP databases</li>
            )}
            {selectedVerifications.includes('marriage') && (
              <li>• Checking my marital status through provincial vital statistics</li>
            )}
            {selectedVerifications.includes('credit') && (
              <li>• Accessing my credit report from authorized credit bureaus</li>
            )}
            <li>• Storing verification results securely for sharing purposes</li>
            <li>• Processing my personal information in accordance with PIPEDA</li>
          </ul>
          
          <div className="mt-6">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={consentGiven}
                onChange={(e) => setConsentGiven(e.target.checked)}
                className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="text-sm">
                I have read and agree to the terms above. I understand that this verification 
                will create a shareable trust profile that I can control.
              </span>
            </label>
          </div>
        </div>
      </div>

      {selectedVerifications.includes('credit') && (
        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4">Credit Check Authorization</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Social Insurance Number
              </label>
              <input
                type="password"
                className="input-field"
                placeholder="000-000-000"
                maxLength={11}
              />
              <p className="text-xs text-gray-500 mt-1">
                Required for credit bureau verification. Encrypted and never stored.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderStep4 = () => (
    <div className="text-center space-y-8">
      {isProcessing ? (
        <>
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Processing Your Verification
            </h2>
            <p className="text-gray-600 mb-8">
              We're securely verifying your information with official sources. 
              This usually takes 2-4 minutes.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Verification Complete!
            </h2>
            <p className="text-gray-600 mb-8">
              Your trust profile has been created and is ready to share.
            </p>
          </div>

                               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {selectedVerifications.map(type => {
              const option = verificationOptions.find(opt => opt.type === type);
              if (!option) return null;
              return (
                <div key={type} className="card text-left">
                  <div className="flex items-center space-x-3 mb-3">
                    <option.icon className="h-6 w-6 text-green-600" />
                    <span className="font-semibold">{option.title}</span>
                    <span className="verification-badge verified">✓ Verified</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {type === 'criminal' && 'No criminal record found'}
                    {type === 'identity' && 'Identity confirmed with government ID'}
                    {type === 'marriage' && 'Marital status verified'}
                    {type === 'credit' && 'Credit score: 750 (Excellent)'}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              View Trust Profile
            </button>
            <button className="btn-secondary">
              Share Profile
            </button>
          </div>
        </>
      )}
    </div>
  );

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedVerifications.length > 0;
      case 2:
        if (selectedVerifications.includes('identity')) {
          return uploadedFiles.id_document && uploadedFiles.selfie;
        }
        return true;
      case 3:
        return consentGiven;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step < currentStep ? 'bg-primary-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 space-x-6 text-sm text-gray-600">
            <span className={currentStep >= 1 ? 'text-primary-600' : ''}>Select</span>
            <span className={currentStep >= 2 ? 'text-primary-600' : ''}>Upload</span>
            <span className={currentStep >= 3 ? 'text-primary-600' : ''}>Consent</span>
            <span className={currentStep >= 4 ? 'text-primary-600' : ''}>Results</span>
          </div>
        </div>

        <div className="card">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}

          {currentStep < 4 && !isProcessing && (
            <div className="flex justify-between pt-8 border-t">
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="btn-secondary"
                >
                  Back
                </button>
              )}
              <button
                onClick={() => {
                  if (currentStep === 3) {
                    handleSubmit();
                  } else {
                    setCurrentStep(currentStep + 1);
                  }
                }}
                disabled={!canProceed()}
                className="btn-primary ml-auto"
              >
                {currentStep === 3 ? 'Start Verification' : 'Continue'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};