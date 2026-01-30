// Navigation data structure for the sidebar
export interface NavItem {
  title: string;
  href?: string;
  children?: NavItem[];
  emoji?: string;
  isPdf?: boolean;
}

export interface Semester {
  name: string;
  emoji: string;
  subjects: Subject[];
}

export interface Subject {
  code: string;
  name: string;
  namePt: string;
  emoji: string;
  path: string;
}

// Semester and subject data based on the repository structure
export const semesters: Semester[] = [
  {
    name: '1st Semester',
    emoji: '1',
    subjects: [
      { code: 'CDI', name: 'Differential and Integral Calculus', namePt: 'Cálculo Diferencial e Integral', emoji: '1', path: '1st-semester/cdi' },
      { code: 'TMD', name: 'Topics in Discrete Mathematics', namePt: 'Tópicos de Matemática Discreta', emoji: '2', path: '1st-semester/tmd' },
      { code: 'LSD', name: 'Logic and Digital Systems', namePt: 'Lógica e Sistemas Digitais', emoji: '3', path: '1st-semester/lsd' },
      { code: 'Pg', name: 'Programming', namePt: 'Programação', emoji: '4', path: '1st-semester/pg' },
      { code: 'El', name: 'Electronics', namePt: 'Eletrónica', emoji: '5', path: '1st-semester/el' },
    ],
  },
  {
    name: '2nd Semester',
    emoji: '2',
    subjects: [
      { code: 'ALGA', name: 'Linear Algebra and Analytic Geometry', namePt: 'Álgebra Linear e Geometria Analítica', emoji: '1', path: '2nd-semester/alga' },
      { code: 'AED', name: 'Algorithms and Data Structures', namePt: 'Algoritmos e Estruturas de Dados', emoji: '2', path: '2nd-semester/aed' },
      { code: 'AC', name: 'Computer Architecture', namePt: 'Arquitetura de Computadores', emoji: '3', path: '2nd-semester/ac' },
      { code: 'LIC', name: 'Informatics and Computer Laboratory', namePt: 'Laboratório de Informática e Computadores', emoji: '4', path: '2nd-semester/lic' },
      { code: 'RCp', name: 'Computer Networks', namePt: 'Redes de Computadores', emoji: '5', path: '2nd-semester/rcp' },
    ],
  },
  {
    name: '3rd Semester',
    emoji: '3',
    subjects: [
      { code: 'PE', name: 'Probability and Statistics', namePt: 'Probabilidade e Estatística', emoji: '1', path: '3rd-semester/pe' },
      { code: 'IPW', name: 'Introduction to Internet Programming', namePt: 'Introdução à Programação na Web', emoji: '2', path: '3rd-semester/ipw' },
      { code: 'ISI', name: 'Introduction to Information Systems', namePt: 'Introdução aos Sistemas de Informação', emoji: '3', path: '3rd-semester/isi' },
      { code: 'PSC', name: 'Computer Systems Programming', namePt: 'Programação de Sistemas Computacionais', emoji: '4', path: '3rd-semester/psc' },
      { code: 'TDS', name: 'Software Development Techniques', namePt: 'Técnicas de Desenvolvimento de Software', emoji: '5', path: '3rd-semester/tds' },
    ],
  },
  {
    name: '4th Semester',
    emoji: '4',
    subjects: [
      { code: 'CD', name: 'Digital Communication', namePt: 'Comunicação Digital', emoji: '1', path: '4th-semester/cd' },
      { code: 'LS', name: 'Software Laboratory', namePt: 'Laboratório de Software', emoji: '2', path: '4th-semester/ls' },
      { code: 'LAE', name: 'Languages and Managed Runtimes', namePt: 'Linguagens e Ambientes de Execução', emoji: '3', path: '4th-semester/lae' },
      { code: 'PC', name: 'Concurrent Programming', namePt: 'Programação Concorrente', emoji: '4', path: '4th-semester/pc' },
      { code: 'SI', name: 'Information Systems', namePt: 'Sistemas de Informação', emoji: '5', path: '4th-semester/si' },
    ],
  },
  {
    name: '5th Semester',
    emoji: '5',
    subjects: [
      { code: 'DAW', name: 'Web Application Development', namePt: 'Desenvolvimento de Aplicações Web', emoji: '1', path: '5th-semester/daw' },
      { code: 'PDM', name: 'Mobile Devices Programming', namePt: 'Programação em Dispositivos Móveis', emoji: '2', path: '5th-semester/pdm' },
      { code: 'SegInf', name: 'Computer Security', namePt: 'Segurança Informática', emoji: '3', path: '5th-semester/seginf' },
      { code: 'TVS', name: 'Systems Virtualization Techniques', namePt: 'Técnicas de Virtualização de Sistemas', emoji: '4', path: '5th-semester/tvs' },
      { code: 'Emp', name: 'Entrepreneurship', namePt: 'Empreendedorismo', emoji: '5', path: '5th-semester/emp' },
    ],
  },
  {
    name: '6th Semester',
    emoji: '6',
    subjects: [
      { code: 'CN', name: 'Cloud Computing', namePt: 'Computação na Nuvem', emoji: '1', path: '6th-semester/cn' },
      { code: 'IA', name: 'Artificial Intelligence', namePt: 'Inteligência Artificial', emoji: '2', path: '6th-semester/ia' },
    ],
  },
];

// GitHub repository URL for PDF links
export const GITHUB_REPO_URL = 'https://github.com/andre-j3sus/isel-leic-notes/blob/main';

// List of PDF files in the repository
export const pdfFiles = [
  '1st-semester/cdi/cdi.pdf',
  '1st-semester/el/el.pdf',
  '1st-semester/el/cheat-sheet.pdf',
  '1st-semester/lsd/lsd.pdf',
  '1st-semester/pg/cheat-sheet.pdf',
  '1st-semester/tmd/tmd.pdf',
  '2nd-semester/ac/p16-instructions-guide.pdf',
  '2nd-semester/ac/p16-instructions-quick-reference.pdf',
  '2nd-semester/ac/p16-quick-reference.pdf',
  '2nd-semester/ac/pTC-datasheet.pdf',
  '2nd-semester/ac/sdp16-usage-guide.pdf',
  '2nd-semester/aed/aed.pdf',
  '2nd-semester/alga/aplicações-lineares.pdf',
  '2nd-semester/alga/determinantes-e-espaços-vetoriais.pdf',
  '2nd-semester/alga/matrizes.pdf',
  '2nd-semester/alga/sistemas.pdf',
  '2nd-semester/alga/vetores.pdf',
  '2nd-semester/rcp/rcp.pdf',
  '3rd-semester/ipw/ipw.pdf',
  '3rd-semester/isi/isi.pdf',
  '3rd-semester/pe/pe.pdf',
  '3rd-semester/psc/1 - valores e expressões - 16 outubro 2021.pdf',
  '3rd-semester/psc/10 - cache.pdf',
  '3rd-semester/psc/2 - arrays; structs; ponteiros - 15 outubro 2021.pdf',
  '3rd-semester/psc/3 - standard input output.pdf',
  '3rd-semester/psc/4 - assembly x86_64 - 19 abril 2021.pdf',
  '3rd-semester/psc/5 - funções genéricas - novembro 2021.pdf',
  '3rd-semester/psc/6 - estruturas de dados-28 novembro 2021.pdf',
  '3rd-semester/psc/7 - linking - 10 dezembro 2021.pdf',
  '3rd-semester/psc/8 - bibliotecas - 17 dezembro 2021.pdf',
  '3rd-semester/psc/9 - makefile - 17 dezembro 2021.pdf',
  '3rd-semester/psc/Instruções x86-64.pdf',
  '3rd-semester/psc/unix_linha_comando.pdf',
  '3rd-semester/tds/cheat-sheet.pdf',
  '4th-semester/cd/cd.pdf',
  '4th-semester/si/si.pdf',
  '5th-semester/daw/DAW_Sheet.pdf',
  '5th-semester/pdm/PDM_Sheet.pdf',
  '5th-semester/seginf/SegInf_Sheet.pdf',
];

// Extract title from markdown content (first H1 or filename)
export function extractTitle(content: string, filename: string): string {
  // Try to find first H1 heading
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (h1Match) {
    // Remove markdown links and formatting
    return h1Match[1]
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
      .replace(/[*_`]/g, '') // Remove formatting
      .trim();
  }
  
  // Fall back to filename
  return formatFilename(filename);
}

// Format filename to readable title
export function formatFilename(filename: string): string {
  return filename
    .replace(/\.md$/, '')
    .replace(/^\d+[-.]?\s*/, '') // Remove leading numbers
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Get semester and subject from path
export function getPathInfo(path: string): { semester?: Semester; subject?: Subject } {
  for (const semester of semesters) {
    for (const subject of semester.subjects) {
      if (path.startsWith(subject.path)) {
        return { semester, subject };
      }
    }
  }
  return {};
}

// Sort notes by filename (respecting numeric prefixes)
export function sortNotes<T extends { id: string }>(notes: T[]): T[] {
  return notes.sort((a, b) => {
    const aPath = a.id.toLowerCase();
    const bPath = b.id.toLowerCase();
    
    // README should come first
    if (aPath.includes('readme')) return -1;
    if (bPath.includes('readme')) return 1;
    
    // Extract numeric prefix if present
    const aMatch = aPath.match(/(\d+(?:\.\d+)?)/);
    const bMatch = bPath.match(/(\d+(?:\.\d+)?)/);
    
    if (aMatch && bMatch) {
      const aNum = parseFloat(aMatch[1]);
      const bNum = parseFloat(bMatch[1]);
      if (aNum !== bNum) return aNum - bNum;
    }
    
    return aPath.localeCompare(bPath);
  });
}

// Sort paths by filename (respecting numeric prefixes) - for string arrays
export function sortPaths(paths: string[]): string[] {
  return [...paths].sort((a, b) => {
    const aPath = a.toLowerCase();
    const bPath = b.toLowerCase();
    
    // README should come first
    if (aPath.includes('readme')) return -1;
    if (bPath.includes('readme')) return 1;
    
    // Get filename for comparison
    const aFile = aPath.split('/').pop() || '';
    const bFile = bPath.split('/').pop() || '';
    
    // Extract numeric prefix if present
    const aMatch = aFile.match(/^(\d+(?:\.\d+)?)/);
    const bMatch = bFile.match(/^(\d+(?:\.\d+)?)/);
    
    if (aMatch && bMatch) {
      const aNum = parseFloat(aMatch[1]);
      const bNum = parseFloat(bMatch[1]);
      if (aNum !== bNum) return aNum - bNum;
    }
    
    return aPath.localeCompare(bPath);
  });
}

export interface NavLink {
  title: string;
  href: string;
}

export interface PrevNextNav {
  prev: NavLink | null;
  next: NavLink | null;
}

/**
 * Get all pages (markdown + PDF) for a given subject, sorted properly
 */
export function getSubjectPages(
  subjectPath: string,
  allMdPaths: { path: string; title: string }[],
  allPdfPaths: { path: string; title: string }[]
): { path: string; title: string }[] {
  // Filter to only pages in this subject
  const mdInSubject = allMdPaths.filter(p => p.path.startsWith(subjectPath + '/'));
  const pdfInSubject = allPdfPaths.filter(p => p.path.startsWith(subjectPath + '/'));
  
  // Combine and sort
  const allPages = [...mdInSubject, ...pdfInSubject];
  
  return allPages.sort((a, b) => {
    const aPath = a.path.toLowerCase();
    const bPath = b.path.toLowerCase();
    
    // README should come first
    if (aPath.includes('readme')) return -1;
    if (bPath.includes('readme')) return 1;
    
    // Get filename for comparison
    const aFile = aPath.split('/').pop() || '';
    const bFile = bPath.split('/').pop() || '';
    
    // Extract numeric prefix if present
    const aMatch = aFile.match(/^(\d+(?:\.\d+)?)/);
    const bMatch = bFile.match(/^(\d+(?:\.\d+)?)/);
    
    if (aMatch && bMatch) {
      const aNum = parseFloat(aMatch[1]);
      const bNum = parseFloat(bMatch[1]);
      if (aNum !== bNum) return aNum - bNum;
    }
    
    return aPath.localeCompare(bPath);
  });
}

/**
 * Get previous and next navigation links for a given page
 */
export function getPrevNextNav(
  currentPath: string,
  allMdPaths: { path: string; title: string }[],
  allPdfPaths: { path: string; title: string }[]
): PrevNextNav {
  // Find the subject this page belongs to
  const { subject } = getPathInfo(currentPath);
  
  if (!subject) {
    return { prev: null, next: null };
  }
  
  // Get all pages in this subject, sorted
  const subjectPages = getSubjectPages(subject.path, allMdPaths, allPdfPaths);
  
  // Find current page index
  const currentIndex = subjectPages.findIndex(p => p.path === currentPath);
  
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }
  
  const prev = currentIndex > 0 
    ? { title: subjectPages[currentIndex - 1].title, href: '/' + subjectPages[currentIndex - 1].path }
    : null;
    
  const next = currentIndex < subjectPages.length - 1
    ? { title: subjectPages[currentIndex + 1].title, href: '/' + subjectPages[currentIndex + 1].path }
    : null;
  
  return { prev, next };
}
