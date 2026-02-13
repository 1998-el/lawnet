import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight, AlertCircle, CheckCircle2, User, ShieldCheck, Users, Clock, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Login.css';

const Login = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = t('login.error.email.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('login.error.email.invalid');
    }
    
    if (!formData.password) {
      newErrors.password = t('login.error.password.required');
    } else if (formData.password.length < 6) {
      newErrors.password = t('login.error.password.short');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      setShowSuccess(true);
      
      // Redirect to dashboard after delay
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
      
    } catch (error) {
      setErrors({
        general: t('login.error.general')
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} login`);
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
    <div className="login-container">
      {/* Left Side - Login Form */}
      <div className="login-form-section">
        <div className="login-logo">
          LAW<span>NET</span>
        </div>

        <div className="login-form-wrapper">
          <div className="login-form-header">
            <h1>{t('login.title')}</h1>
            <p>{t('login.subtitle')}</p>
          </div>

          {showSuccess && (
            <div className="success-message">
              <CheckCircle2 size={20} />
              <span>{t('login.success')}</span>
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

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">
                <Mail size={16} />
                {t('login.email')}
                <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t('login.email.placeholder')}
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                aria-label={t('login.email')}
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
              <label htmlFor="password">
                <Lock size={16} />
                {t('login.password')}
                <span className="required">*</span>
              </label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder={t('login.password.placeholder')}
                  className={`form-input ${errors.password ? 'input-error' : ''}`}
                  aria-label={t('login.password')}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                  aria-label={showPassword ? t('login.password.hide') : t('login.password.show')}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <div id="password-error" className="form-error">
                  <AlertCircle size={14} />
                  {errors.password}
                </div>
              )}
            </div>

            <div className="form-options">
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleInputChange}
                />
                <label htmlFor="remember">{t('login.remember')}</label>
              </div>
              <Link to="/forgot-password" className="forgot-password">
                {t('login.forgot')}
              </Link>
            </div>

            <button
              type="submit"
              className={`login-button ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              {loading ? t('login.loading') : t('login.submit')}
            </button>
          </form>

          <div className="register-link">
            {t('login.no.account')}{' '}
            <Link to="/register">{t('login.register')}</Link>
          </div>

          <div className="social-login">
            <div className="social-login-title">
              <span>{t('login.or')}</span>
            </div>
            <div className="social-login-buttons">
              <button
                type="button"
                className="social-button google"
                onClick={() => handleSocialLogin('google')}
              >
                <span style={{ fontWeight: 'bold' }}>G</span>
                {t('login.google')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="login-image-section">
        <div className="login-image-content">
          <h2>{language === 'fr' ? 'Bienvenue sur LAWNET' : 'Welcome to LAWNET'}</h2>
          <p>{language === 'fr' ? 'Votre plateforme de confiance pour accéder à des services juridiques de qualité' : 'Your trusted platform for accessing quality legal services'}</p>
          <ul className="login-features">
            {features.map((feature, index) => (
              <li key={index} className="login-feature">
                <div className="login-feature-icon">
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

export default Login;
