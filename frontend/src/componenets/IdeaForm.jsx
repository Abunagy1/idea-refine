import React, { useState } from "react";
import "./IdeaForm.css";

const IdeaForm = ({ onSubmit, isLoading }) => {
  const [idea, setIdea] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (idea.trim().length >= 3) {
      onSubmit(idea);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setIdea(value);
    setCharacterCount(value.length);
  };

  const placeholderIdeas = [
    "A portfolio site for a photographer",
    "E-commerce store for handmade crafts",
    "Booking system for a yoga studio",
    "Community forum for gardeners",
    "SaaS dashboard for project management",
  ];

  const randomPlaceholder =
    placeholderIdeas[Math.floor(Math.random() * placeholderIdeas.length)];

  return (
    <div className="idea-form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="idea-input" className="form-label">
          Describe your website idea
        </label>
        <textarea
          id="idea-input"
          className="idea-input"
          value={idea}
          onChange={handleChange}
          placeholder={`e.g., "${randomPlaceholder}"`}
          rows="4"
          minLength="3"
          maxLength="500"
          disabled={isLoading}
        />

        <div className="form-footer">
          <div className="char-count">{characterCount}/500 characters</div>
          <button
            type="submit"
            className="submit-btn"
            disabled={idea.trim().length < 3 || isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Refining Idea...
              </>
            ) : (
              "✨ Refine My Idea"
            )}
          </button>
        </div>

        {idea.trim().length < 3 && idea.length > 0 && (
          <div className="error-message">
            Please enter at least 3 characters
          </div>
        )}
      </form>

      <div className="tip-box">
        <strong>💡 Tip:</strong> Be specific about your goals and target
        audience for better results.
      </div>
    </div>
  );
};

export default IdeaForm;
