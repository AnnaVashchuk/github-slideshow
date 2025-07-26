export interface User {
  id: string;
  email: string;
  phone?: string;
  name?: string;
  profileImage?: string;
  createdAt: Date;
  verificationCount: number;
  subscriptionTier: 'free' | 'premium';
}

export interface VerificationRequest {
  id: string;
  requesterId: string;
  targetEmail: string;
  targetPhone?: string;
  verificationType: VerificationType[];
  status: 'pending' | 'accepted' | 'declined' | 'completed' | 'expired';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  totalCost: number;
  createdAt: Date;
  expiresAt: Date;
  completedAt?: Date;
  results?: VerificationResults;
}

export type VerificationType = 'criminal' | 'marriage' | 'credit' | 'identity';

export interface VerificationResults {
  id: string;
  requestId: string;
  userId: string;
  criminalRecord?: CriminalRecordResult;
  marriageStatus?: MarriageStatusResult;
  creditScore?: CreditScoreResult;
  identityVerification?: IdentityVerificationResult;
  overallTrustScore: number;
  verifiedAt: Date;
  expiresAt: Date;
}

export interface CriminalRecordResult {
  status: 'clear' | 'record_found' | 'pending' | 'error';
  details?: string;
  lastChecked: Date;
  source: 'RCMP' | 'local_police';
}

export interface MarriageStatusResult {
  status: 'single' | 'married' | 'divorced' | 'widowed' | 'not_verified';
  verificationDate?: Date;
  lastChecked: Date;
  province?: string;
}

export interface CreditScoreResult {
  score: number;
  range: 'poor' | 'fair' | 'good' | 'very_good' | 'excellent';
  latePayments: number;
  lastChecked: Date;
  source: 'Equifax' | 'TransUnion';
}

export interface IdentityVerificationResult {
  documentType: 'passport' | 'drivers_license' | 'health_card';
  documentNumber: string;
  isValid: boolean;
  faceMatch: boolean;
  lastChecked: Date;
}

export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: string;
  clientSecret: string;
}

export interface TrustProfile {
  id: string;
  userId: string;
  isPublic: boolean;
  displayName: string;
  profileImage?: string;
  verificationBadges: VerificationBadge[];
  trustScore: number;
  lastUpdated: Date;
  shareableUrl: string;
}

export interface VerificationBadge {
  type: VerificationType;
  status: 'verified' | 'pending' | 'expired';
  verifiedAt?: Date;
  expiresAt?: Date;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  currency: string;
  verificationsIncluded: number;
  features: string[];
  isPopular?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface VerificationStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  estimatedTime?: string;
}