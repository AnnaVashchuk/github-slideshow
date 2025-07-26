import React, { useState } from 'react';
import { 
  FileCheck, 
  UserCheck, 
  Shield, 
  CreditCard, 
  Mail, 
  Phone, 
  DollarSign,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { VerificationType } from '../types';

export const RequestVerificationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    targetEmail: '',
    targetPhone: '',
    message: '',
    verificationType: [] as VerificationType[],
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const verificationOptions = [
    {
      type: 'criminal' as VerificationType,
      icon: FileCheck,
      title: 'Criminal Record Check',
      description: 'RCMP background check with official sources',
      price: 15,
      estimatedTime: '24-48 hours'
    },
    {
      type: 'identity' as VerificationType,
      icon: UserCheck,
      title: 'Identity Verification',
      description: 'Government ID verification with facial recognition',
      price: 8,
      estimatedTime: '2-4 hours'
    },
    {
      type: 'marriage' as VerificationType,
      icon: Shield,
      title: 'Marriage Status',
      description: 'Verified marital status from provincial records',
      price: 12,
      estimatedTime: '12-24 hours'
    },
    {
      type: 'credit' as VerificationType,
      icon: CreditCard,
      title: 'Credit Score Check',
      description: 'Credit score and payment history (requires consent)',
      price: 20,
      estimatedTime: '1-2 hours'
    }
  ];

  const totalCost = formData.verificationType.reduce((total, type) => {
    const option = verificationOptions.find(opt => opt.type === type);
    return total + (option?.price || 0);
  }, 0);

  const handleVerificationToggle = (type: VerificationType) => {
    setFormData(prev => ({
      ...prev,
      verificationType: prev.verificationType.includes(type)
        ? prev.verificationType.filter(t => t !== type)
        : [...prev.verificationType, type]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setCurrentStep(3);
  };

  const renderStep1 = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Who would you like to verify?
        </h2>
        <p className="text-gray-600 mb-8">
          They'll receive a secure link to consent and complete the verification process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              required
              value={formData.targetEmail}
              onChange={(e) => setFormData(prev => ({ ...prev, targetEmail: e.target.value }))}
              className="input-field pl-10"
              placeholder="their-email@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number (Optional)
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              value={formData.targetPhone}
              onChange={(e) => setFormData(prev => ({ ...prev, targetPhone: e.target.value }))}
              className="input-field pl-10"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Personal Message (Optional)
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          rows={4}
          className="input-field"
          placeholder="Hi! I'd like to verify your background for our upcoming rental arrangement. This is completely secure and voluntary."
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Select Verification Types
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {verificationOptions.map((option) => (
            <div
              key={option.type}
              className={`card cursor-pointer transition-all duration-200 ${
                formData.verificationType.includes(option.type)
                  ? 'ring-2 ring-primary-500 bg-primary-50'
                  : 'hover:shadow-md'
              }`}
              onClick={() => handleVerificationToggle(option.type)}
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${
                  formData.verificationType.includes(option.type)
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  <option.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{option.title}</h4>
                    <span className="text-lg font-bold text-primary-600">${option.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                  <p className="text-xs text-gray-500">Est. {option.estimatedTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {formData.verificationType.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-900">Total Cost:</span>
            <span className="text-2xl font-bold text-primary-600">${totalCost}</span>
          </div>
        </div>
      )}
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Review & Payment
        </h2>
        <p className="text-gray-600">
          Confirm your verification request details
        </p>
      </div>

      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Request Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Target Email:</span>
            <span className="font-medium">{formData.targetEmail}</span>
          </div>
          {formData.targetPhone && (
            <div className="flex justify-between">
              <span className="text-gray-600">Phone:</span>
              <span className="font-medium">{formData.targetPhone}</span>
            </div>
          )}
          <div className="border-t pt-3">
            <span className="text-gray-600 block mb-2">Verification Types:</span>
            {formData.verificationType.map(type => {
              const option = verificationOptions.find(opt => opt.type === type);
              return (
                <div key={type} className="flex justify-between mb-1">
                  <span className="text-sm">{option?.title}</span>
                  <span className="text-sm font-medium">${option?.price}</span>
                </div>
              );
            })}
          </div>
          <div className="border-t pt-3 flex justify-between font-semibold">
            <span>Total:</span>
            <span className="text-primary-600">${totalCost}</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">How it works:</p>
            <ul className="space-y-1 text-xs">
              <li>• We'll send a secure verification link to {formData.targetEmail}</li>
              <li>• They must consent and provide required documents</li>
              <li>• You'll receive results within 24-48 hours</li>
              <li>• Full refund if they decline to participate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="text-center space-y-8">
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
        <CheckCircle className="h-8 w-8 text-green-600" />
      </div>
      
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Verification Request Sent!
        </h2>
        <p className="text-gray-600 mb-8">
          We've sent a secure verification link to <strong>{formData.targetEmail}</strong>.
          They have 7 days to complete the process.
        </p>
      </div>

      <div className="card text-left max-w-md mx-auto">
        <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-primary-600">1</span>
            </div>
            <span>They receive your verification request</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-primary-600">2</span>
            </div>
            <span>They consent and upload required documents</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-primary-600">3</span>
            </div>
            <span>We verify with official sources</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-primary-600">4</span>
            </div>
            <span>You receive secure results</span>
          </div>
        </div>
      </div>

      <button 
        onClick={() => window.location.href = '/'}
        className="btn-primary"
      >
        Back to Home
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step < currentStep ? 'bg-primary-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 space-x-8 text-sm text-gray-600">
            <span className={currentStep >= 1 ? 'text-primary-600' : ''}>Details</span>
            <span className={currentStep >= 2 ? 'text-primary-600' : ''}>Review</span>
            <span className={currentStep >= 3 ? 'text-primary-600' : ''}>Complete</span>
          </div>
        </div>

        <div className="card max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            
            {currentStep < 3 && (
              <div className="flex justify-between pt-8 border-t">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="btn-secondary"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  disabled={
                    (currentStep === 1 && (!formData.targetEmail || formData.verificationType.length === 0)) ||
                    isSubmitting
                  }
                  className="btn-primary ml-auto flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : currentStep === 1 ? (
                    'Continue'
                  ) : (
                    <>
                      <DollarSign className="h-4 w-4 mr-2" />
                      Pay ${totalCost} & Send Request
                    </>
                  )}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};