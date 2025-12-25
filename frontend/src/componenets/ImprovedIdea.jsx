import React, { useState } from "react";
import "./ImprovedIdea.css";

const ImprovedIdea = ({ original, enhanced, timestamp }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(enhanced);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="improved-idea-container">
      <div className="result-header">
        <h3>🎉 Your Enhanced Prompt</h3>
        <span className="timestamp">Generated at {formatDate(timestamp)}</span>
      </div>

      <div className="comparison-section">
        <div className="original-section">
          <h4>Your Original Idea:</h4>
          <div className="original-content">"{original}"</div>
        </div>

        <div className="improved-section">
          <h4>Enhanced & Ready-to-Use:</h4>
          <div className="enhanced-content">
            <pre>{enhanced}</pre>
          </div>

          <button onClick={handleCopy} className="copy-btn">
            {isCopied ? "✅ Copied!" : "📋 Copy Prompt"}
          </button>

          <div className="next-steps">
            <p>
              <strong>Next steps:</strong>
            </p>
            <ul>
              <li>Use this prompt with your developer or AI tools</li>
              <li>Share with your team for feedback</li>
              <li>Save for future reference</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedIdea;
