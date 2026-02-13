import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight, AlertCircle, CheckCircle2, User, Phone, ShieldCheck, Users, Clock, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Register.css';

const Register = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
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
    
    if (!formData.terms) {
      newErrors.terms = t('register.error.terms.required');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message
      setShowSuccess(true);
      
      // Redirect to login after delay
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
    
    // Calculate password strength
    if (name === 'password') {
      calculatePasswordStrength(value);
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSocialRegister = (provider: string) => {
    console.log(`${provider} register`);
  };

  const features = [
    {
      icon: <ShieldCheck size={20} />,
      text: language === 'fr' ? 'Sécurité garantie' : 'Secure Platform'
    },
    {
      icon: <Users size={20} />,
      text: language === 'fr' ? '10 000+ utilisateurs' : '10,000+ Users'
    },
    {
      icon: <Clock size={20} />,
      text: language === 'fr' ? 'Service 24/7' : '24/7 Support'
    }
  ];

  return (
    <div className="register-container">
      {/* Left Side - Register Form */}
      <div className="register-form-section">
        <div className="register-logo">
          LAW<span>NET</span>
        </div>

        <div className="register-form-wrapper">
          <div className="register-form-header">
            <h1>{t('register.title')}</h1>
            <p>{t('register.subtitle')}</p>
          </div>

          {showSuccess && (
            <div className="success-message">
              <CheckCircle2 size={20} />
              <span>{t('register.success')}</span>
            </div>
          )}

          {errors.general && (
            <div className="form-error" style={{
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1.5rem',
              color: '#dc2626',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <AlertCircle size={20} />
              <span>{errors.general}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <label htmlFor="name">
                <User size={16} />
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
                aria-label={t('register.name')}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <div id="name-error" className="form-error">
                  <AlertCircle size={14} />
                  {errors.name}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <Mail size={16} />
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
                aria-label={t('register.email')}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <div id="email-error" className="form-error">
                  <AlertCircle size={14} />
                  {errors.email}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                <Phone size={16} />
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
                aria-label={t('register.phone')}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <div id="phone-error" className="form-error">
                  <AlertCircle size={14} />
                  {errors.phone}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <Lock size={16} />
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
                  aria-label={t('register.password')}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                  aria-label={showPassword ? t('register.password.hide') : t('register.password.show')}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
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
                <div id="password-error" className="form-error">
                  <AlertCircle size={14} />
                  {errors.password}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">
                <Lock size={16} />
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
                  aria-label={t('register.confirmPassword')}
                  aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="password-toggle"
                  aria-label={showConfirmPassword ? t('register.password.hide') : t('register.password.show')}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <div id="confirmPassword-error" className="form-error">
                  <AlertCircle size={14} />
                  {errors.confirmPassword}
                </div>
              )}
            </div>

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
                  <AlertCircle size={14} style={{ marginRight: '0.25rem' }} />
                  {errors.terms}
                </div>
              )}
            </div>

            <button
              type="submit"
              className={`register-button ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              {loading ? t('register.loading') : t('register.submit')}
            </button>
          </form>

          <div className="login-link">
            {t('register.have.account')}{' '}
            <Link to="/login">{t('register.login')}</Link>
          </div>

          <div className="social-register">
            <div className="social-register-title">
              <span>{t('register.or')}</span>
            </div>
            <div className="social-register-buttons">
              <button
                type="button"
                className="social-button google"
                onClick={() => handleSocialRegister('google')}
              >
                <span style={{ fontWeight: 'bold' }}>G</span>
                {t('register.google')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="register-image-section">
        <div className="register-image-content">
          <h2>{language === 'fr' ? 'Rejoignez LAWNET' : 'Join LAWNET'}</h2>
          <p>{language === 'fr' ? 'Créez votre compte et accédez à des services juridiques de qualité' : 'Create your account and access quality legal services'}</p>
          <ul className="register-features">
            {features.map((feature, index) => (
              <li key={index} className="register-feature">
                <div className="register-feature-icon">
                  {feature.icon}
                </div>
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Register;
