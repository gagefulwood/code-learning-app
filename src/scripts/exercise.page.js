import { setupEditor } from '../components/editor.component.js';

export function setupExercisePage(data) {
  const exerciseData = data || {};

  const title = exerciseData.title || 'Exercise';
  const desc = exerciseData.description || 'Complete the task below.';
  const defaultCode = exerciseData.defaultCode || '#include #include <stdio.h>\n\nint main() {\n  printf("Hello, world!\\n");\n  return 0;\n}';

  document.getElementById('exercise-title').textContent = title;
  document.getElementById('exercise-description').textContent = desc;

  setupEditor(defaultCode);
}
