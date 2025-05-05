export function setupEditor(
  defaultCode = '// Write C code here\n#include <stdio.h>\nint main() { return 0; }',
  expectedFiles = {}
) {
  const loaderScript = document.createElement('script');
  loaderScript.src = '../../node_modules/monaco-editor/min/vs/loader.js';
  loaderScript.onload = () => {
    window.require.config({ paths: { vs: '../../node_modules/monaco-editor/min/vs' } });
    window.require(['vs/editor/editor.main'], () => {
      window.monacoEditor = monaco.editor.create(document.getElementById('editor'), {
        value: defaultCode,
        language: 'cpp',
        theme: 'vs-dark',
      });
    });

    document.getElementById('run-btn')?.addEventListener('click', () => {
      const code = window.monacoEditor.getValue();
      window.electronAPI.runCCode(code, expectedFiles).then(result => {
        document.getElementById('output-area').textContent = result;
      });
    });
  };

  document.head.appendChild(loaderScript);
}
