
// Sistema de tokens específicos para cada template da biblioteca estendida
export interface TemplateTokens {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily: string;
  borderRadius: string;
  background: string;
  textColor?: string;
  gradients?: {
    hero?: string;
    section?: string;
  };
}

export const TEMPLATE_TOKENS: Record<string, TemplateTokens> = {
  // Templates da biblioteca estendida - todos os 50 templates
  'toscana-elegante': {
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF',
    accentColor: '#8B8B8B',
    fontFamily: 'Playfair Display',
    borderRadius: '8px',
    background: '#F5F5F5',
    textColor: '#000000',
    gradients: {
      hero: 'linear-gradient(135deg, #000000 0%, #8B8B8B 100%)',
      section: 'linear-gradient(to right, #F5F5F5 0%, #FFFFFF 100%)'
    }
  },
  'minimalista-marmore': {
    primaryColor: '#FFFFFF',
    secondaryColor: '#F8F8F8',
    accentColor: '#D3D3D3',
    fontFamily: 'Dancing Script',
    borderRadius: '8px',
    background: '#E8E8E8',
    textColor: '#000000',
    gradients: {
      hero: 'linear-gradient(135deg, #FFFFFF 0%, #D3D3D3 100%)',
      section: 'linear-gradient(to right, #E8E8E8 0%, #F8F8F8 100%)'
    }
  },
  'romantico-floral-escuro': {
    primaryColor: '#000000',
    secondaryColor: '#2D2D2D',
    accentColor: '#8B4B8B',
    fontFamily: 'Cormorant Garamond',
    borderRadius: '8px',
    background: '#000000',
    textColor: '#FFFFFF',
    gradients: {
      hero: 'linear-gradient(135deg, #000000 0%, #8B4B8B 100%)',
      section: 'linear-gradient(to right, #2D2D2D 0%, #000000 100%)'
    }
  },
  'vintage-floral': {
    primaryColor: '#F0E6D2',
    secondaryColor: '#C8D5B9',
    accentColor: '#FAB7B7',
    fontFamily: 'Great Vibes',
    borderRadius: '8px',
    background: '#E8D5C4',
    textColor: '#8B4513',
    gradients: {
      hero: 'linear-gradient(135deg, #F0E6D2 0%, #FAB7B7 100%)',
      section: 'linear-gradient(to right, #E8D5C4 0%, #C8D5B9 100%)'
    }
  },
  'tropical-praia-branca': {
    primaryColor: '#FFFFFF',
    secondaryColor: '#F5DEB3',
    accentColor: '#4682B4',
    fontFamily: 'Caveat',
    borderRadius: '8px',
    background: '#87CEEB',
    textColor: '#2F4F4F',
    gradients: {
      hero: 'linear-gradient(135deg, #FFFFFF 0%, #4682B4 100%)',
      section: 'linear-gradient(to right, #87CEEB 0%, #F5DEB3 100%)'
    }
  },
  'classico-europeu': {
    primaryColor: '#F5DEB3',
    secondaryColor: '#DAA520',
    accentColor: '#8B4513',
    fontFamily: 'Playfair Display',
    borderRadius: '8px',
    background: '#FFFACD',
    textColor: '#8B4513',
    gradients: {
      hero: 'linear-gradient(135deg, #F5DEB3 0%, #8B4513 100%)',
      section: 'linear-gradient(to right, #FFFACD 0%, #DAA520 100%)'
    }
  },
  'jardim-boho': {
    primaryColor: '#D2B48C',
    secondaryColor: '#F5DEB3',
    accentColor: '#CD853F',
    fontFamily: 'Satisfy',
    borderRadius: '8px',
    background: '#DEB887',
    textColor: '#8B4513',
    gradients: {
      hero: 'linear-gradient(135deg, #D2B48C 0%, #CD853F 100%)',
      section: 'linear-gradient(to right, #DEB887 0%, #F5DEB3 100%)'
    }
  },
  'industrial-minimal': {
    primaryColor: '#2F4F4F',
    secondaryColor: '#FFFFFF',
    accentColor: '#B87333',
    fontFamily: 'Oswald',
    borderRadius: '8px',
    background: '#708090',
    textColor: '#FFFFFF',
    gradients: {
      hero: 'linear-gradient(135deg, #2F4F4F 0%, #B87333 100%)',
      section: 'linear-gradient(to right, #708090 0%, #FFFFFF 100%)'
    }
  },
  'arte-contemporanea': {
    primaryColor: '#4169E1',
    secondaryColor: '#FF7F50',
    accentColor: '#FFD700',
    fontFamily: 'Montserrat',
    borderRadius: '8px',
    background: '#FFFFFF',
    textColor: '#4169E1',
    gradients: {
      hero: 'linear-gradient(135deg, #4169E1 0%, #FFD700 100%)',
      section: 'linear-gradient(to right, #FFFFFF 0%, #FF7F50 100%)'
    }
  },
  'minimal-chic': {
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF',
    accentColor: '#C0C0C0',
    fontFamily: 'Inter',
    borderRadius: '8px',
    background: '#F5DEB3',
    textColor: '#000000',
    gradients: {
      hero: 'linear-gradient(135deg, #000000 0%, #C0C0C0 100%)',
      section: 'linear-gradient(to right, #F5DEB3 0%, #FFFFFF 100%)'
    }
  },
  'campo-rustico': {
    primaryColor: '#8FBC8F',
    secondaryColor: '#8B4513',
    accentColor: '#F5DEB3',
    fontFamily: 'Fredoka One',
    borderRadius: '8px',
    background: '#DEB887',
    textColor: '#8B4513',
    gradients: {
      hero: 'linear-gradient(135deg, #8FBC8F 0%, #F5DEB3 100%)',
      section: 'linear-gradient(to right, #DEB887 0%, #8B4513 100%)'
    }
  },
  'cinema-noir': {
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF',
    accentColor: '#8B0000',
    fontFamily: 'Cinzel',
    borderRadius: '8px',
    background: '#2F2F2F',
    textColor: '#FFFFFF',
    gradients: {
      hero: 'linear-gradient(135deg, #000000 0%, #8B0000 100%)',
      section: 'linear-gradient(to right, #2F2F2F 0%, #FFFFFF 100%)'
    }
  },
  'ceu-estrelado': {
    primaryColor: '#191970',
    secondaryColor: '#FFD700',
    accentColor: '#C0C0C0',
    fontFamily: 'Cinzel Decorative',
    borderRadius: '8px',
    background: '#4682B4',
    textColor: '#FFFFFF',
    gradients: {
      hero: 'linear-gradient(135deg, #191970 0%, #C0C0C0 100%)',
      section: 'linear-gradient(to right, #4682B4 0%, #FFD700 100%)'
    }
  },
  'boho-tropical': {
    primaryColor: '#228B22',
    secondaryColor: '#DDA0DD',
    accentColor: '#98FB98',
    fontFamily: 'Lobster',
    borderRadius: '8px',
    background: '#F5DEB3',
    textColor: '#228B22',
    gradients: {
      hero: 'linear-gradient(135deg, #228B22 0%, #98FB98 100%)',
      section: 'linear-gradient(to right, #F5DEB3 0%, #DDA0DD 100%)'
    }
  },
  'monocromatico-luxo': {
    primaryColor: '#808080',
    secondaryColor: '#000000',
    accentColor: '#C0C0C0',
    fontFamily: 'Abril Fatface',
    borderRadius: '8px',
    background: '#F5F5F5',
    textColor: '#000000',
    gradients: {
      hero: 'linear-gradient(135deg, #808080 0%, #C0C0C0 100%)',
      section: 'linear-gradient(to right, #F5F5F5 0%, #000000 100%)'
    }
  },
  'primavera-delicada': {
    primaryColor: '#FFB6C1',
    secondaryColor: '#98FB98',
    accentColor: '#F0E68C',
    fontFamily: 'Sacramento',
    borderRadius: '8px',
    background: '#E6E6FA',
    textColor: '#8B4B8B',
    gradients: {
      hero: 'linear-gradient(135deg, #FFB6C1 0%, #F0E68C 100%)',
      section: 'linear-gradient(to right, #E6E6FA 0%, #98FB98 100%)'
    }
  },
  'urbano-moderno': {
    primaryColor: '#2F4F4F',
    secondaryColor: '#FFFFFF',
    accentColor: '#808080',
    fontFamily: 'Roboto Condensed',
    borderRadius: '8px',
    background: '#D3D3D3',
    textColor: '#2F4F4F',
    gradients: {
      hero: 'linear-gradient(135deg, #2F4F4F 0%, #808080 100%)',
      section: 'linear-gradient(to right, #D3D3D3 0%, #FFFFFF 100%)'
    }
  },
  'outono-dourado': {
    primaryColor: '#DAA520',
    secondaryColor: '#8B4513',
    accentColor: '#CD853F',
    fontFamily: 'Playfair Display',
    borderRadius: '8px',
    background: '#F4A460',
    textColor: '#8B4513',
    gradients: {
      hero: 'linear-gradient(135deg, #DAA520 0%, #CD853F 100%)',
      section: 'linear-gradient(to right, #F4A460 0%, #8B4513 100%)'
    }
  },
  'lago-sereno': {
    primaryColor: '#4682B4',
    secondaryColor: '#87CEEB',
    accentColor: '#98FB98',
    fontFamily: 'Cormorant Garamond',
    borderRadius: '8px',
    background: '#F0F8FF',
    textColor: '#4682B4',
    gradients: {
      hero: 'linear-gradient(135deg, #4682B4 0%, #98FB98 100%)',
      section: 'linear-gradient(to right, #F0F8FF 0%, #87CEEB 100%)'
    }
  },
  'festa-latina': {
    primaryColor: '#FF6347',
    secondaryColor: '#FFD700',
    accentColor: '#32CD32',
    fontFamily: 'Salsa',
    borderRadius: '8px',
    background: '#FF1493',
    textColor: '#FFFFFF',
    gradients: {
      hero: 'linear-gradient(135deg, #FF6347 0%, #32CD32 100%)',
      section: 'linear-gradient(to right, #FF1493 0%, #FFD700 100%)'
    }
  },
  'montanha-majestosa': {
    primaryColor: '#8B4513',
    secondaryColor: '#2F4F4F',
    accentColor: '#F5DEB3',
    fontFamily: 'Fjalla One',
    borderRadius: '8px',
    background: '#CD853F',
    textColor: '#FFFFFF',
    gradients: {
      hero: 'linear-gradient(135deg, #8B4513 0%, #F5DEB3 100%)',
      section: 'linear-gradient(to right, #CD853F 0%, #2F4F4F 100%)'
    }
  },
  'jardim-secreto': {
    primaryColor: '#228B22',
    secondaryColor: '#8FBC8F',
    accentColor: '#DDA0DD',
    fontFamily: 'Cinzel Decorative',
    borderRadius: '8px',
    background: '#F0E68C',
    textColor: '#228B22',
    gradients: {
      hero: 'linear-gradient(135deg, #228B22 0%, #DDA0DD 100%)',
      section: 'linear-gradient(to right, #F0E68C 0%, #8FBC8F 100%)'
    }
  },
  'pordosol-infinito': {
    primaryColor: '#FF6347',
    secondaryColor: '#FFD700',
    accentColor: '#FF69B4',
    fontFamily: 'Pacifico',
    borderRadius: '8px',
    background: '#FFA500',
    textColor: '#8B4513',
    gradients: {
      hero: 'linear-gradient(135deg, #FF6347 0%, #FF69B4 100%)',
      section: 'linear-gradient(to right, #FFA500 0%, #FFD700 100%)'
    }
  },
  // Templates adicionais (24-50)
  'toscana-elegante-2': {
    primaryColor: '#1A1A1A',
    secondaryColor: '#FAFAFA',
    accentColor: '#7A7A7A',
    fontFamily: 'Playfair Display',
    borderRadius: '6px',
    background: '#EFEFEF',
    textColor: '#1A1A1A',
    gradients: {
      hero: 'linear-gradient(135deg, #1A1A1A 0%, #7A7A7A 100%)',
      section: 'linear-gradient(to right, #EFEFEF 0%, #FAFAFA 100%)'
    }
  },
  'minimal-marron': {
    primaryColor: '#FFFFFF',
    secondaryColor: '#F0EDE8',
    accentColor: '#B0A89E',
    fontFamily: 'Dancing Script',
    borderRadius: '6px',
    background: '#E5E0D6',
    textColor: '#8B4513',
    gradients: {
      hero: 'linear-gradient(135deg, #FFFFFF 0%, #B0A89E 100%)',
      section: 'linear-gradient(to right, #E5E0D6 0%, #F0EDE8 100%)'
    }
  },
  'floral-romantico-claro': {
    primaryColor: '#FFF8F0',
    secondaryColor: '#FFEFE6',
    accentColor: '#DCA2A2',
    fontFamily: 'Cormorant Garamond',
    borderRadius: '10px',
    background: '#FFF8F0',
    textColor: '#8B4B8B',
    gradients: {
      hero: 'linear-gradient(135deg, #FFF8F0 0%, #DCA2A2 100%)',
      section: 'linear-gradient(to right, #FFF8F0 0%, #FFEFE6 100%)'
    }
  },
  'vintage-gold': {
    primaryColor: '#E6D3B3',
    secondaryColor: '#A68C63',
    accentColor: '#D4AF37',
    fontFamily: 'Great Vibes',
    borderRadius: '6px',
    background: '#F5EDE1',
    textColor: '#8B4513',
    gradients: {
      hero: 'linear-gradient(135deg, #E6D3B3 0%, #D4AF37 100%)',
      section: 'linear-gradient(to right, #F5EDE1 0%, #A68C63 100%)'
    }
  },
  'praia-solar': {
    primaryColor: '#FFF9E6',
    secondaryColor: '#FAF3DD',
    accentColor: '#4EA9D9',
    fontFamily: 'Caveat',
    borderRadius: '6px',
    background: '#E3F2FD',
    textColor: '#4682B4',
    gradients: {
      hero: 'linear-gradient(135deg, #FFF9E6 0%, #4EA9D9 100%)',
      section: 'linear-gradient(to right, #E3F2FD 0%, #FAF3DD 100%)'
    }
  },
  'europeu-sofisticado': {
    primaryColor: '#F7EBDD',
    secondaryColor: '#CCAA7A',
    accentColor: '#8B5E3C',
    fontFamily: 'Playfair Display',
    borderRadius: '6px',
    background: '#FFF5E6',
    textColor: '#8B5E3C',
    gradients: {
      hero: 'linear-gradient(135deg, #F7EBDD 0%, #8B5E3C 100%)',
      section: 'linear-gradient(to right, #FFF5E6 0%, #CCAA7A 100%)'
    }
  },
  'boho-garden': {
    primaryColor: '#C8A97E',
    secondaryColor: '#F1E6D1',
    accentColor: '#B17B4E',
    fontFamily: 'Satisfy',
    borderRadius: '6px',
    background: '#EEE2D0',
    textColor: '#8B4513',
    gradients: {
      hero: 'linear-gradient(135deg, #C8A97E 0%, #B17B4E 100%)',
      section: 'linear-gradient(to right, #EEE2D0 0%, #F1E6D1 100%)'
    }
  },
  'industrial-urbano': {
    primaryColor: '#3A3A3A',
    secondaryColor: '#EDEDED',
    accentColor: '#A05A2C',
    fontFamily: 'Oswald',
    borderRadius: '4px',
    background: '#C0C0C0',
    textColor: '#3A3A3A',
    gradients: {
      hero: 'linear-gradient(135deg, #3A3A3A 0%, #A05A2C 100%)',
      section: 'linear-gradient(to right, #C0C0C0 0%, #EDEDED 100%)'
    }
  },
  'arte-pop': {
    primaryColor: '#FF1493',
    secondaryColor: '#1E90FF',
    accentColor: '#FFD700',
    fontFamily: 'Montserrat',
    borderRadius: '4px',
    background: '#FFFFFF',
    textColor: '#FF1493',
    gradients: {
      hero: 'linear-gradient(135deg, #FF1493 0%, #FFD700 100%)',
      section: 'linear-gradient(to right, #FFFFFF 0%, #1E90FF 100%)'
    }
  },
  'luxe-minimal': {
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF',
    accentColor: '#C0C0C0',
    fontFamily: 'Inter',
    borderRadius: '4px',
    background: '#F7F7F7',
    textColor: '#000000',
    gradients: {
      hero: 'linear-gradient(135deg, #000000 0%, #C0C0C0 100%)',
      section: 'linear-gradient(to right, #F7F7F7 0%, #FFFFFF 100%)'
    }
  },
  'campo-vintage': {
    primaryColor: '#A0A070',
    secondaryColor: '#8B572A',
    accentColor: '#E6D6B3',
    fontFamily: 'Fredoka One',
    borderRadius: '10px',
    background: '#EEE4D5',
    textColor: '#8B572A',
    gradients: {
      hero: 'linear-gradient(135deg, #A0A070 0%, #E6D6B3 100%)',
      section: 'linear-gradient(to right, #EEE4D5 0%, #8B572A 100%)'
    }
  },
  'noir-cinema': {
    primaryColor: '#141414',
    secondaryColor: '#FBFBFB',
    accentColor: '#A20000',
    fontFamily: 'Cinzel',
    borderRadius: '4px',
    background: '#2A2A2A',
    textColor: '#FBFBFB',
    gradients: {
      hero: 'linear-gradient(135deg, #141414 0%, #A20000 100%)',
      section: 'linear-gradient(to right, #2A2A2A 0%, #FBFBFB 100%)'
    }
  },
  'ceu-noturno': {
    primaryColor: '#101030',
    secondaryColor: '#FFD600',
    accentColor: '#C0C0C0',
    fontFamily: 'Cinzel Decorative',
    borderRadius: '10px',
    background: '#294A74',
    textColor: '#FFFFFF',
    gradients: {
      hero: 'linear-gradient(135deg, #101030 0%, #C0C0C0 100%)',
      section: 'linear-gradient(to right, #294A74 0%, #FFD600 100%)'
    }
  },
  'tropicalia-boho': {
    primaryColor: '#388E3C',
    secondaryColor: '#E1BEE7',
    accentColor: '#A5D6A7',
    fontFamily: 'Lobster',
    borderRadius: '10px',
    background: '#FFF3E0',
    textColor: '#388E3C',
    gradients: {
      hero: 'linear-gradient(135deg, #388E3C 0%, #A5D6A7 100%)',
      section: 'linear-gradient(to right, #FFF3E0 0%, #E1BEE7 100%)'
    }
  },
  'cinzento-luxo': {
    primaryColor: '#707070',
    secondaryColor: '#000000',
    accentColor: '#A0A0A0',
    fontFamily: 'Abril Fatface',
    borderRadius: '8px',
    background: '#F0F0F0',
    textColor: '#000000',
    gradients: {
      hero: 'linear-gradient(135deg, #707070 0%, #A0A0A0 100%)',
      section: 'linear-gradient(to right, #F0F0F0 0%, #000000 100%)'
    }
  },
  'primavera-light': {
    primaryColor: '#FFD1DC',
    secondaryColor: '#C1EDC1',
    accentColor: '#F2E394',
    fontFamily: 'Sacramento',
    borderRadius: '8px',
    background: '#E6E6FA',
    textColor: '#8B4B8B',
    gradients: {
      hero: 'linear-gradient(135deg, #FFD1DC 0%, #F2E394 100%)',
      section: 'linear-gradient(to right, #E6E6FA 0%, #C1EDC1 100%)'
    }
  },
  'urbano-chic': {
    primaryColor: '#3A3A3A',
    secondaryColor: '#FFFFFF',
    accentColor: '#9E9E9E',
    fontFamily: 'Roboto Condensed',
    borderRadius: '8px',
    background: '#E0E0E0',
    textColor: '#3A3A3A',
    gradients: {
      hero: 'linear-gradient(135deg, #3A3A3A 0%, #9E9E9E 100%)',
      section: 'linear-gradient(to right, #E0E0E0 0%, #FFFFFF 100%)'
    }
  },
  'outono-quente': {
    primaryColor: '#C67E17',
    secondaryColor: '#7A3E1A',
    accentColor: '#A97439',
    fontFamily: 'Playfair Display',
    borderRadius: '8px',
    background: '#F4A460',
    textColor: '#7A3E1A',
    gradients: {
      hero: 'linear-gradient(135deg, #C67E17 0%, #A97439 100%)',
      section: 'linear-gradient(to right, #F4A460 0%, #7A3E1A 100%)'
    }
  },
  'lago-calmante': {
    primaryColor: '#4A90E2',
    secondaryColor: '#AEDFF7',
    accentColor: '#9CC0E7',
    fontFamily: 'Cormorant Garamond',
    borderRadius: '8px',
    background: '#EAF6FF',
    textColor: '#4A90E2',
    gradients: {
      hero: 'linear-gradient(135deg, #4A90E2 0%, #9CC0E7 100%)',
      section: 'linear-gradient(to right, #EAF6FF 0%, #AEDFF7 100%)'
    }
  },
  'festa-alegre': {
    primaryColor: '#FF4500',
    secondaryColor: '#FFD700',
    accentColor: '#32CD32',
    fontFamily: 'Salsa',
    borderRadius: '8px',
    background: '#FF69B4',
    textColor: '#FFFFFF',
    gradients: {
      hero: 'linear-gradient(135deg, #FF4500 0%, #32CD32 100%)',
      section: 'linear-gradient(to right, #FF69B4 0%, #FFD700 100%)'
    }
  },
  'montanha-natureza': {
    primaryColor: '#7A4513',
    secondaryColor: '#3A3F44',
    accentColor: '#D9B48F',
    fontFamily: 'Fjalla One',
    borderRadius: '10px',
    background: '#D2A679',
    textColor: '#FFFFFF',
    gradients: {
      hero: 'linear-gradient(135deg, #7A4513 0%, #D9B48F 100%)',
      section: 'linear-gradient(to right, #D2A679 0%, #3A3F44 100%)'
    }
  },
  'jardim-encantado': {
    primaryColor: '#2E8B57',
    secondaryColor: '#A2CD5A',
    accentColor: '#DDA0DD',
    fontFamily: 'Cinzel Decorative',
    borderRadius: '10px',
    background: '#F0E68C',
    textColor: '#2E8B57',
    gradients: {
      hero: 'linear-gradient(135deg, #2E8B57 0%, #DDA0DD 100%)',
      section: 'linear-gradient(to right, #F0E68C 0%, #A2CD5A 100%)'
    }
  },
  'pordosol-suave': {
    primaryColor: '#FF7F50',
    secondaryColor: '#FFDAB9',
    accentColor: '#FF69B4',
    fontFamily: 'Pacifico',
    borderRadius: '10px',
    background: '#FFEFD5',
    textColor: '#8B4513',
    gradients: {
      hero: 'linear-gradient(135deg, #FF7F50 0%, #FF69B4 100%)',
      section: 'linear-gradient(to right, #FFEFD5 0%, #FFDAB9 100%)'
    }
  },
  'monet-garden': {
    primaryColor: '#8FAABB',
    secondaryColor: '#F3EADC',
    accentColor: '#EBCFC2',
    fontFamily: 'Montserrat',
    borderRadius: '6px',
    background: '#FFFFFF',
    textColor: '#8FAABB',
    gradients: {
      hero: 'linear-gradient(135deg, #8FAABB 0%, #EBCFC2 100%)',
      section: 'linear-gradient(to right, #FFFFFF 0%, #F3EADC 100%)'
    }
  },
  'chic-urbano': {
    primaryColor: '#2A2A2A',
    secondaryColor: '#FFFFFF',
    accentColor: '#B0B0B0',
    fontFamily: 'Inter',
    borderRadius: '6px',
    background: '#F0F0F0',
    textColor: '#2A2A2A',
    gradients: {
      hero: 'linear-gradient(135deg, #2A2A2A 0%, #B0B0B0 100%)',
      section: 'linear-gradient(to right, #F0F0F0 0%, #FFFFFF 100%)'
    }
  },
  'rustic-autumn': {
    primaryColor: '#B87333',
    secondaryColor: '#8B4513',
    accentColor: '#D2B48C',
    fontFamily: 'Merriweather',
    borderRadius: '8px',
    background: '#F4A460',
    textColor: '#8B4513',
    gradients: {
      hero: 'linear-gradient(135deg, #B87333 0%, #D2B48C 100%)',
      section: 'linear-gradient(to right, #F4A460 0%, #8B4513 100%)'
    }
  },
  'starry-night': {
    primaryColor: '#0B1E3A',
    secondaryColor: '#FEDD6A',
    accentColor: '#A8C0E6',
    fontFamily: 'Cinzel Decorative',
    borderRadius: '10px',
    background: '#2E4A7E',
    textColor: '#FFFFFF',
    gradients: {
      hero: 'linear-gradient(135deg, #0B1E3A 0%, #A8C0E6 100%)',
      section: 'linear-gradient(to right, #2E4A7E 0%, #FEDD6A 100%)'
    }
  },

  // Fallbacks para templates antigos
  'Modern Elegance': {
    primaryColor: '#1E1E1E',
    secondaryColor: '#FFFFFF',
    accentColor: '#C0C0C0',
    fontFamily: 'Inter',
    borderRadius: '4px',
    background: '#F9F9F9',
    textColor: '#1E1E1E'
  },
  'Boho Romance': {
    primaryColor: '#8C4B2D',
    secondaryColor: '#FFF6F0',
    accentColor: '#DDB892',
    fontFamily: 'Josefin Sans',
    borderRadius: '8px',
    background: '#FDF5F0',
    textColor: '#3c2f2f'
  },
  'Garden Romance': {
    primaryColor: '#3E5F56',
    secondaryColor: '#EDF5EF',
    accentColor: '#A3C9A8',
    fontFamily: 'Lora',
    borderRadius: '6px',
    background: '#F5FBF7',
    textColor: '#2c2c2c'
  },
  'Pure Minimalist': {
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF',
    accentColor: '#777777',
    fontFamily: 'Inter',
    borderRadius: '0px',
    background: '#FAFAFA',
    textColor: '#000000'
  },
  'Forest Bohemian': {
    primaryColor: '#4A6741',
    secondaryColor: '#EDF7ED',
    accentColor: '#A2CFA5',
    fontFamily: 'Merriweather',
    borderRadius: '8px',
    background: '#F4FBF5',
    textColor: '#2c2c2c'
  },
  'Cathedral Elegance': {
    primaryColor: '#4A3A2D',
    secondaryColor: '#FDFBF3',
    accentColor: '#C49A6C',
    fontFamily: 'Georgia',
    borderRadius: '6px',
    background: '#FFF8E7',
    textColor: '#2c2c2c'
  },
  'Vintage Mansion': {
    primaryColor: '#6A4E42',
    secondaryColor: '#EFE5DC',
    accentColor: '#D9A5B3',
    fontFamily: 'EB Garamond',
    borderRadius: '6px',
    background: '#F7F2F0',
    textColor: '#3c2c2c'
  }
};

export const getTemplateTokens = (templateId: string): TemplateTokens => {
  const tokens = TEMPLATE_TOKENS[templateId];
  
  if (!tokens) {
    console.warn(`⚠️ Tokens não encontrados para template: ${templateId}`);
    // Fallback para um template padrão
    return TEMPLATE_TOKENS['minimal-chic'];
  }
  
  return tokens;
};

export const applyTemplateTokensToCSS = (tokens: TemplateTokens, templateId: string): string => {
  return `
    /* Template-specific tokens for ${templateId} */
    .template-${templateId} {
      --primary-color: ${tokens.primaryColor};
      --secondary-color: ${tokens.secondaryColor};
      --accent-color: ${tokens.accentColor};
      --background-color: ${tokens.background};
      --text-color: ${tokens.textColor || tokens.primaryColor};
      --font-family-main: ${tokens.fontFamily}, serif;
      --border-radius: ${tokens.borderRadius};
      --hero-gradient: ${tokens.gradients?.hero || `linear-gradient(135deg, ${tokens.primaryColor} 0%, ${tokens.accentColor} 100%)`};
      --section-gradient: ${tokens.gradients?.section || `linear-gradient(to right, ${tokens.background} 0%, ${tokens.secondaryColor} 100%)`};
    }
    
    .template-${templateId} .template-preview-hero {
      background: var(--hero-gradient);
      color: white;
      font-family: var(--font-family-main);
    }
    
    .template-${templateId} .template-preview-content {
      background: var(--background-color);
      color: var(--text-color);
      font-family: var(--font-family-main);
    }
    
    .template-${templateId} .template-accent {
      color: var(--accent-color);
    }
    
    .template-${templateId} .template-button {
      background: var(--primary-color);
      color: white;
      border-radius: var(--border-radius);
      font-family: var(--font-family-main);
    }
    
    .template-${templateId} .template-card {
      background: var(--secondary-color);
      border-radius: var(--border-radius);
      border: 1px solid ${tokens.accentColor}20;
    }
  `;
};
