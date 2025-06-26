
import { PreviewData } from "@/types/quiz";

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export const validateSiteData = (siteData: any): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Verificações críticas (impedem funcionamento)
  if (!siteData) {
    errors.push("Dados do site ausentes");
    return { isValid: false, errors, warnings };
  }

  if (!siteData.couple_names || siteData.couple_names.trim() === '') {
    errors.push("Nome do casal é obrigatório");
  }

  if (!siteData.wedding_date) {
    errors.push("Data do casamento é obrigatória");
  } else {
    // Validar se a data está no formato correto
    const dateTest = new Date(siteData.wedding_date);
    if (isNaN(dateTest.getTime())) {
      errors.push("Data do casamento inválida");
    }
  }

  // Verificações de advertência (não impedem funcionamento)
  if (!siteData.template_name) {
    warnings.push("Template não especificado - será usado template padrão");
  }

  if (!siteData.ai_welcome_message || siteData.ai_welcome_message.trim() === '') {
    warnings.push("Mensagem de boas-vindas ausente - será usada mensagem padrão");
  }

  if (!siteData.quiz_answers) {
    warnings.push("Respostas do quiz ausentes - algumas personalizações podem não funcionar");
  }

  const isValid = errors.length === 0;
  
  return { isValid, errors, warnings };
};

export const validatePreviewData = (previewData: PreviewData): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!previewData.coupleNames || previewData.coupleNames.trim() === '') {
    errors.push("Nome do casal é obrigatório");
  }

  if (!previewData.weddingDate) {
    errors.push("Data do casamento é obrigatória");
  }

  if (!previewData.templateName) {
    warnings.push("Template não especificado - será usado template padrão");
  }

  const isValid = errors.length === 0;
  
  return { isValid, errors, warnings };
};

export const logValidationResults = (validation: ValidationResult, context: string) => {
  if (!validation.isValid) {
    console.error(`❌ Validação falhou em ${context}:`, validation.errors);
  }
  
  if (validation.warnings.length > 0) {
    console.warn(`⚠️ Avisos em ${context}:`, validation.warnings);
  }
  
  if (validation.isValid && validation.warnings.length === 0) {
    console.log(`✅ Validação passou em ${context}`);
  }
};

// Testes preventivos para cenários comuns
export const runPreventiveTests = () => {
  console.log('🧪 Executando testes preventivos...');
  
  const testCases = [
    {
      name: 'template_name ausente',
      data: { couple_names: 'João & Maria', wedding_date: '2024-12-25', template_name: null }
    },
    {
      name: 'couple_names ausente',
      data: { couple_names: '', wedding_date: '2024-12-25', template_name: 'Modern Elegance' }
    },
    {
      name: 'wedding_date ausente',
      data: { couple_names: 'João & Maria', wedding_date: null, template_name: 'Modern Elegance' }
    },
    {
      name: 'dados completos',
      data: { 
        couple_names: 'João & Maria', 
        wedding_date: '2024-12-25', 
        template_name: 'Modern Elegance',
        ai_welcome_message: 'Bem-vindos!',
        quiz_answers: {}
      }
    }
  ];

  testCases.forEach(testCase => {
    const validation = validateSiteData(testCase.data);
    console.log(`🧪 Teste "${testCase.name}":`, validation.isValid ? '✅ PASSOU' : '❌ FALHOU');
    if (!validation.isValid) {
      console.log('   Erros:', validation.errors);
    }
    if (validation.warnings.length > 0) {
      console.log('   Avisos:', validation.warnings);
    }
  });
};

// Executar testes em desenvolvimento
if (process.env.NODE_ENV === 'development') {
  runPreventiveTests();
}
