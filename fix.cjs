const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/components/Navbar.tsx',
  'src/components/layouts/MemberLayout.tsx',
  'src/components/layouts/AdminLayout.tsx',
];

filesToFix.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Fix escaped backticks
    content = content.replace(/\\`/g, '`');
    // Fix escaped dollar signs
    content = content.replace(/\\\$\{/g, '${');

    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
});
