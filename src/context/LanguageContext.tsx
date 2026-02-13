import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'A propos',
    'nav.lawyers': 'Avocats',
    'nav.contact': 'Contact',
    'nav.dashboard': 'Tableau de bord',
    'nav.search': 'Rechercher',
    
    // Company Name
    'company.name': 'LAWNET - Legal Assistance & Welfare',
    'company.shortname': 'LAWNET',
    
    // Hero Section
    'hero.subtitle': 'Solutions juridiques innovantes pour tous',
    'hero.description': 'Nous connectons les personnes ayant besoin d\'aide juridique avec des avocats qualifiés pour des consultations en ligne.',
    'hero.feature.expertise': 'Avocats certifiés',
    'hero.feature.results': 'Consultations sécurisées',
    'hero.feature.support': 'Accompagnement personnalisé',
    'hero.cta.discover': 'Prendre rendez-vous',
    'hero.cta.contact': 'Nous contacter',
    
    // Services
    'services.title': 'Domaines de pratique',
    'services.subtitle': 'Des experts juridiques pour toutes vos besoins légaux',
    'service.consulting': 'Conseil juridique',
    'service.consulting.desc': 'Accompagnement personnalisé pour optimiser votre stratégie juridique.',
    'service.consulting.more': 'En savoir plus',
    'service.innovation': 'Consultation en ligne',
    'service.innovation.desc': 'Solutions numériques pour accéder à des conseils juridiques à distance.',
    'service.innovation.more': 'En savoir plus',
    'service.performance': 'Représentation',
    'service.performance.desc': 'Représentation professionnelle devant les tribunaux.',
    'service.performance.more': 'En savoir plus',
    'service.analytics': 'Analyse juridique',
    'service.analytics.desc': 'Évaluation détaillée de votre situation juridique.',
    'service.analytics.more': 'En savoir plus',
    
    // Footer
    'footer.description': 'Votre plateforme de confiance pour trouver des avocats qualifiés et obtenir une assistance juridique.',
    'footer.quicklinks': 'Liens rapides',
    'footer.services': 'Domaines',
    'footer.contact': 'Contact',
    'footer.copyright': 'Copyright {year}. Tous droits réservés.',
    
    // Contact Info
    'contact.address': '123 Rue Juridique, New York, NY 10001',
    'contact.phone': '+1-800-LAWNET',
    'contact.email': 'info@lawnet.com',
    
    // CTA Section
    'cta.title': 'Prêt à trouver votre avocat ?',
    'cta.description': 'Rejoignez des milliers de clients satisfaits qui ont trouvé le bon avocat sur LAWNET.',
    'cta.button': 'Commencer',
    
     // Mobile Footer
     'mobile.call.us': 'Appelez-nous',
     'mobile.send.email': 'Envoyez un email',
     'mobile.our.address': 'Notre adresse',
     'mobile.privacy': 'Confidentialité',
     'mobile.terms': 'Conditions',
     'mobile.all.rights': 'Tous droits réservés.',
     
     // Login Page
     'login.title': 'Connexion',
     'login.subtitle': 'Connectez-vous à votre compte LAWNET',
     'login.back': 'Retour',
     'login.email': 'Email',
     'login.email.placeholder': 'votre@email.com',
     'login.password': 'Mot de passe',
     'login.password.placeholder': 'Votre mot de passe',
     'login.password.show': 'Afficher le mot de passe',
     'login.password.hide': 'Cacher le mot de passe',
     'login.remember': 'Se souvenir de moi',
     'login.forgot': 'Mot de passe oublié ?',
     'login.submit': 'Se connecter',
     'login.loading': 'Connexion...',
     'login.no.account': 'Pas encore de compte ?',
     'login.register': 'Créer un compte',
     'login.or': 'Ou continuez avec',
     'login.google': 'Google',
     'login.facebook': 'Facebook',
     'login.success': 'Connexion réussie !',
     'login.error.email.required': 'Veuillez saisir votre email',
     'login.error.email.invalid': 'Email invalide',
     'login.error.password.required': 'Veuillez saisir votre mot de passe',
     'login.error.password.short': 'Le mot de passe doit contenir au moins 6 caractères',
     'login.error.general': 'Échec de la connexion. Veuillez réessayer.',
     
     // Register Page
     'register.title': 'Créer un compte',
     'register.subtitle': 'Rejoignez LAWNET et accédez à nos services',
     'register.back': 'Retour',
     'register.name': 'Nom complet',
     'register.name.placeholder': 'Votre nom complet',
     'register.email': 'Email',
     'register.email.placeholder': 'votre@email.com',
     'register.phone': 'Téléphone',
     'register.phone.placeholder': '+33 1 23 45 67 89',
     'register.password': 'Mot de passe',
     'register.password.placeholder': 'Votre mot de passe',
     'register.password.show': 'Afficher le mot de passe',
     'register.password.hide': 'Cacher le mot de passe',
     'register.password.weak': 'Faible',
     'register.password.medium': 'Moyen',
     'register.password.strong': 'Fort',
     'register.confirmPassword': 'Confirmer le mot de passe',
     'register.confirmPassword.placeholder': 'Confirmez votre mot de passe',
     'register.terms': 'J\'accepte les',
     'register.terms.link': 'Conditions d\'utilisation',
     'register.terms.and': 'et',
     'register.privacy': 'Politique de confidentialité',
     'register.submit': 'Créer un compte',
     'register.loading': 'Création du compte...',
     'register.have.account': 'Déjà un compte ?',
     'register.login': 'Se connecter',
     'register.or': 'Ou continuez avec',
     'register.google': 'Google',
     'register.facebook': 'Facebook',
     'register.success': 'Compte créé avec succès !',
     'register.error.name.required': 'Veuillez saisir votre nom complet',
     'register.error.name.short': 'Le nom doit contenir au moins 2 caractères',
     'register.error.email.required': 'Veuillez saisir votre email',
     'register.error.email.invalid': 'Email invalide',
     'register.error.phone.required': 'Veuillez saisir votre numéro de téléphone',
     'register.error.phone.invalid': 'Numéro de téléphone invalide',
     'register.error.password.required': 'Veuillez saisir un mot de passe',
     'register.error.password.short': 'Le mot de passe doit contenir au moins 6 caractères',
     'register.error.confirmPassword.required': 'Veuillez confirmer votre mot de passe',
     'register.error.confirmPassword.mismatch': 'Les mots de passe ne correspondent pas',
     'register.error.terms.required': 'Veuillez accepter les conditions d\'utilisation',
     'register.error.general': 'Échec de la création du compte. Veuillez réessayer.',
   },
   en: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.lawyers': 'Lawyers',
    'nav.contact': 'Contact',
    'nav.dashboard': 'Dashboard',
    'nav.search': 'Search',
    
    // Company Name
    'company.name': 'LAWNET - Legal Assistance & Welfare Networking',
    'company.shortname': 'LAWNET',
    
    // Hero Section
    'hero.subtitle': 'Innovative legal solutions for everyone',
    'hero.description': 'We connect people who need legal help with qualified lawyers for online consultations.',
    'hero.feature.expertise': 'Certified Lawyers',
    'hero.feature.results': 'Secure Consultations',
    'hero.feature.support': 'Personalized Support',
    'hero.cta.discover': 'Book Appointment',
    'hero.cta.contact': 'Contact Us',
    
    // Services
    'services.title': 'Practice Areas',
    'services.subtitle': 'Legal experts for all your legal needs',
    'service.consulting': 'Legal Consulting',
    'service.consulting.desc': 'Personalized support to optimize your legal strategy.',
    'service.consulting.more': 'Learn More',
    'service.innovation': 'Online Consultation',
    'service.innovation.desc': 'Digital solutions to access legal advice remotely.',
    'service.innovation.more': 'Learn More',
    'service.performance': 'Representation',
    'service.performance.desc': 'Professional representation in court.',
    'service.performance.more': 'Learn More',
    'service.analytics': 'Legal Analysis',
    'service.analytics.desc': 'Detailed assessment of your legal situation.',
    'service.analytics.more': 'Learn More',
    
    // Footer
    'footer.description': 'Your trusted platform to find qualified lawyers and get legal assistance.',
    'footer.quicklinks': 'Quick Links',
    'footer.services': 'Practice Areas',
    'footer.contact': 'Contact',
    'footer.copyright': 'Copyright {year}. All rights reserved.',
    
    // Contact Info
    'contact.address': '123 Legal Street, New York, NY 10001',
    'contact.phone': '1-800-LAWNET',
    'contact.email': 'info@lawnet.com',
    
    // CTA Section
    'cta.title': 'Ready to find your lawyer?',
    'cta.description': 'Join thousands of satisfied clients who found the right lawyer on LAWNET.',
    'cta.button': 'Get Started',
    
    // Mobile Footer
    'mobile.call.us': 'Call us',
    'mobile.send.email': 'Send an email',
    'mobile.our.address': 'Our address',
    'mobile.privacy': 'Privacy',
    'mobile.terms': 'Terms',
     'mobile.all.rights': 'All rights reserved.',
     
     // Login Page
     'login.title': 'Login',
     'login.subtitle': 'Sign in to your LAWNET account',
     'login.back': 'Back',
     'login.email': 'Email',
     'login.email.placeholder': 'your@email.com',
     'login.password': 'Password',
     'login.password.placeholder': 'Your password',
     'login.password.show': 'Show password',
     'login.password.hide': 'Hide password',
     'login.remember': 'Remember me',
     'login.forgot': 'Forgot password?',
     'login.submit': 'Sign in',
     'login.loading': 'Signing in...',
     'login.no.account': 'Don\'t have an account?',
     'login.register': 'Create an account',
     'login.or': 'Or continue with',
     'login.google': 'Google',
     'login.facebook': 'Facebook',
     'login.success': 'Login successful!',
     'login.error.email.required': 'Please enter your email',
     'login.error.email.invalid': 'Invalid email',
     'login.error.password.required': 'Please enter your password',
     'login.error.password.short': 'Password must be at least 6 characters',
     'login.error.general': 'Login failed. Please try again.',
     
     // Register Page
     'register.title': 'Create Account',
     'register.subtitle': 'Join LAWNET and access our services',
     'register.back': 'Back',
     'register.name': 'Full Name',
     'register.name.placeholder': 'Your full name',
     'register.email': 'Email',
     'register.email.placeholder': 'your@email.com',
     'register.phone': 'Phone',
     'register.phone.placeholder': '+1 234 567 8900',
     'register.password': 'Password',
     'register.password.placeholder': 'Your password',
     'register.password.show': 'Show password',
     'register.password.hide': 'Hide password',
     'register.password.weak': 'Weak',
     'register.password.medium': 'Medium',
     'register.password.strong': 'Strong',
     'register.confirmPassword': 'Confirm Password',
     'register.confirmPassword.placeholder': 'Confirm your password',
     'register.terms': 'I accept the',
     'register.terms.link': 'Terms of Service',
     'register.terms.and': 'and',
     'register.privacy': 'Privacy Policy',
     'register.submit': 'Create Account',
     'register.loading': 'Creating account...',
     'register.have.account': 'Already have an account?',
     'register.login': 'Sign in',
     'register.or': 'Or continue with',
     'register.google': 'Google',
     'register.facebook': 'Facebook',
     'register.success': 'Account created successfully!',
     'register.error.name.required': 'Please enter your full name',
     'register.error.name.short': 'Name must be at least 2 characters',
     'register.error.email.required': 'Please enter your email',
     'register.error.email.invalid': 'Invalid email',
     'register.error.phone.required': 'Please enter your phone number',
     'register.error.phone.invalid': 'Invalid phone number',
     'register.error.password.required': 'Please enter a password',
     'register.error.password.short': 'Password must be at least 6 characters',
     'register.error.confirmPassword.required': 'Please confirm your password',
     'register.error.confirmPassword.mismatch': 'Passwords do not match',
     'register.error.terms.required': 'Please accept the terms of service',
     'register.error.general': 'Account creation failed. Please try again.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return (saved === 'fr' || saved === 'en') ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
