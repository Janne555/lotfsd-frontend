import fs from 'fs'

async function writeComponent(htmlElement: HTMLElement) {
  const html = `
    <html>
      <body>
        ${htmlElement.innerHTML}
      </body>
    </html>
  `
  fs.writeFile('debugging/output.html', html, console.log)
}

export {
  writeComponent
}