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
