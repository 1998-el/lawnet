import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowLeft, ArrowRight, Check, User, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Register.css';

const Register = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<'weak' | 'medium' | 'strong' | ''>('');

  const steps = [
    { number: 1, label: 'Info' },
    { number: 2, label: 'Password' },
    { number: 3, label: 'Confirm' }
  ];

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};
    
    if (step === 1) {
      if (!formData.name) {
        newErrors.name = t('register.error.name.required');
      } else if (formData.name.length < 2) {
        newErrors.name = t('register.error.name.short');
      }
      
      if (!formData.email) {
        newErrors.email = t('register.error.email.required');
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = t('register.error.email.invalid');
      }
      
      if (!formData.phone) {
        newErrors.phone = t('register.error.phone.required');
      } else if (!/^[+]?[0-9]{10,15}$/.test(formData.phone.replace(/[\s()-]/g, ''))) {
        newErrors.phone = t('register.error.phone.invalid');
      }
    }
    
    if (step === 2) {
      if (!formData.password) {
        newErrors.password = t('register.error.password.required');
      } else if (formData.password.length < 6) {
        newErrors.password = t('register.error.password.short');
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = t('register.error.confirmPassword.required');
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = t('register.error.confirmPassword.mismatch');
      }
    }
    
    if (step === 3) {
      if (!formData.terms) {
        newErrors.terms = t('register.error.terms.required');
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculatePasswordStrength = (password: string) => {
    if (password.length < 6) {
      setPasswordStrength('');
      return;
    }
    
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 1;
    
    if (strength <= 2) {
      setPasswordStrength('weak');
    } else if (strength === 3) {
      setPasswordStrength('medium');
    } else {
      setPasswordStrength('strong');
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(3)) {
      return;
    }

    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setShowSuccess(true);
      
      setTimeout(() => {
        navigate('/login');
      }, 1500);
      
    } catch (error) {
      setErrors({
        general: t('register.error.general')
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: updatedValue
    }));
    
    if (name === 'password') {
      calculatePasswordStrength(value);
    }
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className="register-container">
      {/* Left Side - Register Form */}
      <div className="register-form-section">
        <Link to="/" className="register-back">
          <ArrowLeft size={16} />
          Back
        </Link>

        <div className="register-form-wrapper">
          {/* Step Indicator */}
          <div className="step-indicator">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className={`step ${currentStep >= step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}
              >
                <div className="step-circle">
                  {currentStep > step.number ? <Check size={14} /> : step.number}
                </div>
                <span className="step-label">{step.label}</span>
                {index < steps.length - 1 && <div className="step-line" />}
              </div>
            ))}
          </div>

          {showSuccess && (
            <div className="success-message">
              <span>✓</span>
              <span>{t('register.success')}</span>
            </div>
          )}

          {errors.general && (
            <div className="form-error">
              <span>⚠</span>
              <span>{errors.general}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="register-form">
            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <div className="form-step">
                <div className="form-group">
                  <label htmlFor="name">
                    <User size={14} />
                    {t('register.name')}
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('register.name.placeholder')}
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                  />
                  {errors.name && (
                    <div className="form-error">
                      <span>•</span>
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">
                      <Mail size={14} />
                      {t('register.email')}
                      <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('register.email.placeholder')}
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                    />
                    {errors.email && (
                      <div className="form-error">
                        <span>•</span>
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      <Phone size={14} />
                      {t('register.phone')}
                      <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t('register.phone.placeholder')}
                      className={`form-input ${errors.phone ? 'input-error' : ''}`}
                    />
                    {errors.phone && (
                      <div className="form-error">
                        <span>•</span>
                        {errors.phone}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Password */}
            {currentStep === 2 && (
              <div className="form-step">
                <div className="form-group">
                  <label htmlFor="password">
                    <Lock size={14} />
                    {t('register.password')}
                    <span className="required">*</span>
                  </label>
                  <div className="password-input-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder={t('register.password.placeholder')}
                      className={`form-input ${errors.password ? 'input-error' : ''}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="password-toggle"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {passwordStrength && (
                    <>
                      <div className={`password-strength ${passwordStrength}`}>
                        <div className="password-strength-bar"></div>
                      </div>
                      <div className="password-strength-text">
                        {t(`register.password.${passwordStrength}`)}
                      </div>
                    </>
                  )}
                  {errors.password && (
                    <div className="form-error">
                      <span>•</span>
                      {errors.password}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">
                    <Lock size={14} />
                    {t('register.confirmPassword')}
                    <span className="required">*</span>
                  </label>
                  <div className="password-input-wrapper">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder={t('register.confirmPassword.placeholder')}
                      className={`form-input ${errors.confirmPassword ? 'input-error' : ''}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="password-toggle"
                    >
                      {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <div className="form-error">
                      <span>•</span>
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Terms */}
            {currentStep === 3 && (
              <div className="form-step">
                <div className="terms-wrapper">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="terms">
                    {t('register.terms')} <a href="/terms">{t('register.terms.link')}</a> {t('register.terms.and')} <a href="/privacy">{t('register.privacy')}</a>
                  </label>
                  {errors.terms && (
                    <div className="form-error">
                      <span>•</span>
                      {errors.terms}
                    </div>
                  )}
                </div>

                <div className="form-summary">
                  <h4>Summary</h4>
                  <div className="summary-item">
                    <span className="summary-label">{t('register.name')}:</span>
                    <span className="summary-value">{formData.name}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">{t('register.email')}:</span>
                    <span className="summary-value">{formData.email}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">{t('register.phone')}:</span>
                    <span className="summary-value">{formData.phone}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {currentStep > 1 && (
                <button
                  type="button"
                  className="btn-back"
                  onClick={handleBack}
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
              )}
              
              {currentStep < 3 ? (
                <button
                  type="button"
                  className="btn-next"
                  onClick={handleNext}
                >
                  Next
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  type="submit"
                  className={`btn-submit ${loading ? 'loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? t('register.loading') : t('register.submit')}
                </button>
              )}
            </div>
          </form>

          <div className="login-link">
            {t('register.have.account')}{' '}
            <Link to="/login">{t('register.login')}</Link>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="register-image-section">
        <img 
          src="/assets/droit.jpg" 
          alt="Justice"
        />
        <div className="register-image-content">
          <h2>Join LAWNET</h2>
          <p>Create your account in a few steps</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
