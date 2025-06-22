
import { Heart, Sparkles, Leaf, Waves, Crown, Star } from "lucide-react";

export interface ShapeToken {
  elements: string[];
  iconComponent: any;
  opacity: number;
  size: string;
  position: 'top-right' | 'bottom-left' | 'center' | 'corners';
}

export const SHAPE_TOKENS: Record<string, ShapeToken> = {
  'romantic-garden': {
    elements: ['roses', 'petals', 'butterflies'],
    iconComponent: Heart,
    opacity: 0.08,
    size: 'h-8 w-8',
    position: 'top-right'
  },
  'romantic-beach': {
    elements: ['waves', 'seashells', 'starfish'],
    iconComponent: Waves,
    opacity: 0.08,
    size: 'h-8 w-8',
    position: 'corners'
  },
  'minimal-modern': {
    elements: ['geometric-lines', 'dots'],
    iconComponent: Star,
    opacity: 0.06,
    size: 'h-6 w-6',
    position: 'center'
  },
  'boho-forest': {
    elements: ['feathers', 'leaves', 'dreamcatcher'],
    iconComponent: Leaf,
    opacity: 0.08,
    size: 'h-8 w-8',
    position: 'bottom-left'
  },
  'classic-cathedral': {
    elements: ['ornaments', 'crowns', 'flourishes'],
    iconComponent: Crown,
    opacity: 0.08,
    size: 'h-8 w-8',
    position: 'top-right'
  },
  'vintage-mansion': {
    elements: ['vintage-frames', 'lace', 'ornaments'],
    iconComponent: Sparkles,
    opacity: 0.08,
    size: 'h-8 w-8',
    position: 'corners'
  }
};

export const getShapeToken = (templateId: string): ShapeToken => {
  return SHAPE_TOKENS[templateId] || SHAPE_TOKENS['minimal-modern'];
};

export const renderContextualShape = (templateId: string) => {
  const shapeToken = getShapeToken(templateId);
  const IconComponent = shapeToken.iconComponent;
  
  const positionClasses = {
    'top-right': 'top-32 right-24',
    'bottom-left': 'bottom-32 left-24', 
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    'corners': 'top-32 right-24'
  };

  return {
    component: IconComponent,
    className: `absolute ${positionClasses[shapeToken.position]} ${shapeToken.size}`,
    style: { opacity: shapeToken.opacity }
  };
};
