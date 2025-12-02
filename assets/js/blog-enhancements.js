(() => {
  const copyToClipboard = (text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise((resolve, reject) => {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);

      const selection = document.getSelection();
      const range = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
      textarea.select();

      try {
        document.execCommand("copy");
        resolve();
      } catch (err) {
        reject(err);
      }

      textarea.remove();
      if (range && selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    });
  };

  const addCopyButtons = () => {
    document.querySelectorAll(".post-content pre code, .markdown-body pre code").forEach((code) => {
      const block = code.parentElement;
      if (!block || block.querySelector(".copy-code-button")) return;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "copy-code-button";
      button.textContent = "Copy";

      button.addEventListener("click", () => {
        copyToClipboard(code.textContent || "").then(() => {
          button.textContent = "Copied";
          button.dataset.state = "copied";
          setTimeout(() => {
            button.textContent = "Copy";
            button.removeAttribute("data-state");
          }, 2000);
        });
      });

      block.style.position = block.style.position || "relative";
      block.insertBefore(button, code);
    });
  };

  if (typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", addCopyButtons);
  }
})();
