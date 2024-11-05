const dataFilter = (markdown: string) => {
    let parsedData;
    let markdownOutput = "";
    parsedData = JSON.parse(markdown);

    markdownOutput = `
# ${parsedData.name ? parsedData.name : 'Project name'}
${parsedData.description ? parsedData.description : 'No description available.'}

🚀 [Demo](https://www.example.com)

### 🛠️ Installation

\`\`\`js
git clone https://github.com/USER_NAME/${parsedData.name}.git
\`\`\`

\`\`\`js
cd /${parsedData.name}/
\`\`\`

\`\`\`js
npm i
\`\`\`

\`\`\`js
npm run dev
\`\`\`

### 📝 Scripts

${parsedData.scripts ? 
`| command | action |
|---------|--------|
${Object.entries(parsedData.scripts).map(([key, value]) => `| ${key} | ${value} |`).join('\n')}` : 
`No scripts available.`}

### 📦 Dependencies

${parsedData.dependencies ? 
  `| dependency | version |
  |---------|--------|
  ${Object.entries(parsedData.dependencies).map(([key, value]) => `| ${key} | ${value} |`).join('\n')}` : 
  `No dependencies available.`}

### 📦 Dev Dependencies

${parsedData.devDependencies ? 
`| dependency | version |
|---------|--------|
${Object.entries(parsedData.devDependencies).map(([key, value]) => `| ${key} | ${value} |`).join('\n')}` : 
`No dev dependencies available.`}

### ⚠️ License

${parsedData.license ?
`
This project is licensed under the ${parsedData.license} license.
`
: 'No license available.'}

`;
    return markdownOutput
}

export default dataFilter