/**
 * Generates a URL for an icon using multiple fallback sources
 * @param icon - The icon name (e.g., 'html', 'javascript', 'css')
 * @param width - Icon width (default: 50)
 * @param height - Icon height (default: 50)
 * @returns The generated icon URL
 */
export const generateIconUrl = (
  icon: string,
  width: number = 50,
  height: number = 50
): string => {
  // DevIcons mapping (most reliable source)
  const devIconMappings: { [key: string]: string } = {
    "html": "html5/html5-original.svg",
    "css": "css3/css3-original.svg",
    "javascript": "javascript/javascript-original.svg",
    "typescript": "typescript/typescript-original.svg",
    "react": "react/react-original.svg",
    "nextjs": "nextjs/nextjs-original.svg",
    "tailwindcss": "tailwindcss/tailwindcss-original.svg",
    "python": "python/python-original.svg",
    "c": "c/c-original.svg",
    "nodejs": "nodejs/nodejs-original.svg",
    "mysql": "mysql/mysql-original.svg",
    "flask": "flask/flask-original.svg",
    "numpy": "numpy/numpy-original.svg",
    "pandas": "pandas/pandas-original.svg",
    "tensorflow": "tensorflow/tensorflow-original.svg",
    "git": "git/git-original.svg",
    "github": "github/github-original.svg",
    "vscode": "vscode/vscode-original.svg",
    "qt": "qt/qt-original.svg",
    "opencv": "opencv/opencv-original.svg"
  };

  // Simple Icons mapping for icons not in DevIcons
  const simpleIconMappings: { [key: string]: string } = {
    "matplotlib": "matplotlib",
    "scikit-learn": "scikitlearn",
    "canva": "canva",
    "altium": "altiumdesigner",
    "altium-designer": "altiumdesigner",
    "tinkercad": "tinkercad",
    "colab": "googlecolab",
    "blynk": "blynk",
    "stm32": "stmicroelectronics",
    "embedded": "cplusplus"
  };

  // Custom fallback mappings for specific technologies
  const customMappings: { [key: string]: string } = {
    "cnn": "https://img.shields.io/badge/CNN-Neural%20Network-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white",
    "database": "https://img.shields.io/badge/Database-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
    "gui": "https://img.shields.io/badge/GUI-Qt-41CD52?style=for-the-badge&logo=qt&logoColor=white"
  };

  const normalizedIcon = icon.toLowerCase().replace(/[\s.]/g, '');
  
  // Try custom mappings first (for special cases)
  if (customMappings[normalizedIcon]) {
    return customMappings[normalizedIcon];
  }
  
  // Try DevIcons
  if (devIconMappings[normalizedIcon]) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${devIconMappings[normalizedIcon]}`;
  }
  
  // Try Simple Icons
  if (simpleIconMappings[normalizedIcon]) {
    return `https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/${simpleIconMappings[normalizedIcon]}.svg`;
  }
  
  // Fallback to a generic tech icon
  return `data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${width}" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
      <text x="12" y="12" text-anchor="middle" font-size="6" fill="#3B82F6" font-family="Arial, sans-serif">${icon.slice(0, 3).toUpperCase()}</text>
    </svg>
  `)}`;
};

/**
 * Generates URLs for multiple icons
 * @param icons - Array of icon names
 * @param width - Icon width (default: 50)
 * @param height - Icon height (default: 50)
 * @returns Array of generated icon URLs
 */
export const generateIconUrls = (
  icons: string[],
  width: number = 50,
  height: number = 50
): string[] => {
  return icons.map((icon) => generateIconUrl(icon, width, height));
};
