import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  FileCheck, 
  UserCheck, 
  Shield, 
  CreditCard,
  ArrowRight
} from 'lucide-react';

export const PricingPage: React.FC = () => {
  const verificationTypes = [
    {
      icon: FileCheck,
      title: 'Criminal Record Check',
      description: 'RCMP background check with official sources',
      price: 15,
      features: [
        'Official RCMP database search',
        'Provincial police records',
        'Instant digital results',
        '24-hour processing'
      ]
    },
    {
      icon: UserCheck,
      title: 'Identity Verification',
      description: 'Government ID verification with facial recognition',
      price: 8,
      features: [
        'Government ID validation',
        'Facial recognition matching',
        'Document authenticity check',
        '2-hour processing'
      ]
    },
    {
      icon: Shield,
      title: 'Marriage Status',
      description: 'Verified marital status from provincial records',
      price: 12,
      features: [
        'Provincial vital statistics',
        'Marriage certificate validation',
        'Divorce record check',
        '12-hour processing'
      ]
    },
    {
      icon: CreditCard,
      title: 'Credit Score Check',
      description: 'Credit score and payment history',
      price: 20,
      features: [
        'Equifax credit report',
        'Payment history analysis',
        'Credit utilization data',
        '1-hour processing'
      ]
    }
  ];

  const subscriptionTiers = [
    {
      name: 'Free',
      price: 0,
      period: 'month',
      description: 'Perfect for trying out Trustly',
      features: [
        '3 free verifications per month',
        'Basic identity verification',
        'Email support',
        'Standard processing time'
      ],
      limitations: [
        'Limited to identity verification only',
        'No priority support',
        'Standard 24-48 hour processing'
      ],
      buttonText: 'Get Started Free',
      buttonStyle: 'btn-secondary',
      popular: false
    },
    {
      name: 'Individual',
      price: 29,
      period: 'month',
      description: 'For individuals who need regular verifications',
      features: [
        '10 verifications per month',
        'All verification types',
        'Priority processing',
        'Email & phone support',
        'Shareable trust profiles',
        'Verification history'
      ],
      limitations: [],
      buttonText: 'Start Individual Plan',
      buttonStyle: 'btn-primary',
      popular: true
    },
    {
      name: 'Business',
      price: 99,
      period: 'month',
      description: 'For businesses and organizations',
      features: [
        '50 verifications per month',
        'All verification types',
        'Bulk verification tools',
        'API access',
        'Priority support',
        'Custom integrations',
        'Team management',
        'Analytics dashboard'
      ],
      limitations: [],
      buttonText: 'Start Business Plan',
      buttonStyle: 'btn-primary',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'How does pay-per-verification work?',
      answer: 'You can purchase individual verifications without a subscription. Each verification type has its own price, and you only pay for what you use. Perfect for occasional needs.'
    },
    {
      question: 'What happens if someone declines verification?',
      answer: 'If the person you requested verification for declines to participate, you receive a full refund within 24 hours. No questions asked.'
    },
    {
      question: 'How long do verification results last?',
      answer: 'Criminal record checks are valid for 6 months, identity verification for 1 year, marriage status for 1 year, and credit scores for 30 days. You can renew anytime.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use bank-level encryption and are fully compliant with PIPEDA. All personal information is encrypted at rest and in transit, and we never store sensitive documents longer than necessary.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely. You can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period, and unused verifications don\'t roll over.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer full refunds for declined verifications and prorated refunds for subscription cancellations within 14 days of purchase.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Pay only for what you need. Start with 3 free verifications per month, 
            or choose a plan that fits your needs.
          </p>
        </div>
      </section>

      {/* Pay-per-Verification Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pay-per-Verification
            </h2>
            <p className="text-lg text-gray-600">
              No subscription required. Perfect for occasional use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {verificationTypes.map((type, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <type.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="text-3xl font-bold text-primary-600 mb-4">
                    ${type.price}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/request" 
                  className="btn-primary w-full text-center inline-block"
                >
                  Request Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Subscription Plans
            </h2>
            <p className="text-lg text-gray-600">
              Save money with monthly plans for regular verification needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`card relative ${
                  tier.popular 
                    ? 'ring-2 ring-primary-500 shadow-lg' 
                    : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ${tier.price}
                    </span>
                    <span className="text-gray-600">/{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {tier.limitations.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 mb-2">Limitations:</p>
                    <ul className="space-y-1">
                      {tier.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="text-xs text-gray-500">
                          • {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className={`${tier.buttonStyle} w-full`}>
                  {tier.buttonText}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need more verifications? Contact us for enterprise pricing.
            </p>
            <a 
              href="mailto:sales@trustly.ca" 
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Contact Sales →
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Feature Comparison
            </h2>
            <p className="text-lg text-gray-600">
              See what's included in each plan
            </p>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                      Free
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                      Individual
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                      Business
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Monthly Verifications</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">3</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">10</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">50</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Criminal Record Check</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Identity Verification</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Marriage Status</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Credit Score Check</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">API Access</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Priority Support</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about Trustly pricing
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Try Trustly today with 3 free verifications. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/verify" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Get Verified Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/request" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Request Verification
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};