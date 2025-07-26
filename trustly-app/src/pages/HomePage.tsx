import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle, 
  UserCheck, 
  CreditCard, 
  FileCheck,
  ArrowRight,
  Star,
  Users,
  Lock,
  Clock
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const features = [
    {
      icon: FileCheck,
      title: 'Criminal Record Check',
      description: 'Secure RCMP background checks with official sources',
      price: '$15'
    },
    {
      icon: UserCheck,
      title: 'Identity Verification',
      description: 'Government ID verification with facial recognition',
      price: '$8'
    },
    {
      icon: Shield,
      title: 'Marriage Status',
      description: 'Verified marital status from provincial records',
      price: '$12'
    },
    {
      icon: CreditCard,
      title: 'Credit Score Check',
      description: 'Optional credit score and payment history',
      price: '$20'
    }
  ];

  const useCases = [
    {
      title: 'Dating Safety',
      description: 'Verify someone before meeting from dating apps',
      icon: '💕',
    },
    {
      title: 'Rental Screening',
      description: 'Screen tenants or roommates before signing leases',
      icon: '🏠',
    },
    {
      title: 'Childcare',
      description: 'Verify nannies and babysitters for your family',
      icon: '👶',
    },
    {
      title: 'New to Canada',
      description: 'Build trust and verify connections in a new country',
      icon: '🍁',
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Verifications Completed' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '24hrs', label: 'Average Processing Time' },
    { number: '100%', label: 'PIPEDA Compliant' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Verify Trust.
              <span className="text-primary-600"> Before It's Too Late.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The secure, consent-based platform for criminal record checks, identity verification, 
              and trust building. Perfect for dating, rentals, childcare, and new Canadians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/request" 
                className="btn-primary inline-flex items-center justify-center"
              >
                Request Verification
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/verify" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                Get Verified
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Verification Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All checks require user consent and are processed through official Canadian sources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-shadow duration-300">
                <feature.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <div className="text-2xl font-bold text-primary-600">
                  {feature.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect For Real-World Situations
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're dating, renting, hiring, or new to Canada
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <Lock className="h-16 w-16 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Bank-Level Security</h3>
              <p className="text-gray-300">
                End-to-end encryption and secure data handling compliant with Canadian privacy laws
              </p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Consent-Based</h3>
              <p className="text-gray-300">
                All verifications require explicit consent from the person being checked
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-16 w-16 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Fast & Reliable</h3>
              <p className="text-gray-300">
                Most verifications completed within 24 hours with official source validation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Trust?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Start with 3 free verifications per month. No subscription required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/request" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Request Verification
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};