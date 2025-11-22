// Blog enhancements with reading time and code highlighting

export function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}

export function addReadingTimeEstimate() {
  const article = document.querySelector('.post .entry');
  const dateElement = document.querySelector('.date');
  
  if (!article || !dateElement) return;
  
  const text = article.textContent;
  const readingTime = calculateReadingTime(text);
  
  const readingTimeSpan = document.createElement('span');
  readingTimeSpan.className = 'reading-time';
  readingTimeSpan.textContent = ` · ${readingTime} min read`;
  
  dateElement.appendChild(readingTimeSpan);
}

export function enhanceCodeBlocks() {
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(block => {
    // Add copy button
    const button = document.createElement('button');
    button.className = 'copy-code-button';
    button.textContent = 'Copy';
    button.onclick = () => {
      navigator.clipboard.writeText(block.textContent);
      button.textContent = 'Copied!';
      setTimeout(() => button.textContent = 'Copy', 2000);
    };
    
    block.parentElement.style.position = 'relative';
    block.parentElement.insertBefore(button, block);
  });
}

// Auto-initialize on page load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    addReadingTimeEstimate();
    enhanceCodeBlocks();
  });
}
