import React, { useState } from "react";
import IdeaForm from "./IdeaForm.jsx";
import ImprovedIdea from "./ImprovedIdea.jsx";
import "./HeroSection.css";

const HeroSection = () => {
  const [enhancedIdea, setEnhancedIdea] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleIdeaSubmit = async (idea) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/enhance-idea", {
        // http://localhost:5001/api/enhance-idea
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idea }),
      });

      const data = await response.json();
      setEnhancedIdea(data);
    } catch (error) {
      console.error("Error:", error);
      // Fallback to client-side enhancement if API fails
      setEnhancedIdea({
        original: idea,
        enhanced: `Create a website for: ${idea}\n\nKey features to include:\n1. Modern, responsive design\n2. Clear value proposition\n3. User-friendly navigation\n4. Contact/lead capture\n5. Fast loading performance`,
        timestamp: new Date().toISOString(),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="hero-container">
      <header className="hero-header">
        <h1 className="hero-title">✨ IdeaRefine</h1>
        <p className="hero-subtitle">
          Transform your rough website idea into a clear, actionable prompt
        </p>
      </header>

      <div className="hero-content">
        <div className="hero-left">
          <h2 className="section-title">From Fuzzy Idea → Clear Blueprint</h2>
          <p className="description">
            Struggling to explain your website vision? Our AI-powered tool helps
            you turn vague concepts into specific, developer-ready prompts.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Clarify Goals</h3>
              <p>Turn "I want a cool site" into specific requirements</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛠️</div>
              <h3>Add Structure</h3>
              <p>Get suggestions for essential sections and features</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Save Time</h3>
              <p>Reduce back-and-forth with developers and designers</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <IdeaForm onSubmit={handleIdeaSubmit} isLoading={isLoading} />

          {enhancedIdea && (
            <ImprovedIdea
              original={enhancedIdea.original}
              enhanced={enhancedIdea.enhanced}
              timestamp={enhancedIdea.timestamp}
            />
          )}
        </div>
      </div>

      <div className="example-section">
        <h3>Example Transformation</h3>
        <div className="example-grid">
          <div className="example-card">
            <h4>Before:</h4>
            <p>"I need a website for my bakery"</p>
          </div>
          <div className="example-arrow">→</div>
          <div className="example-card enhanced">
            <h4>After:</h4>
            <p>
              "Create a website for 'Sweet Treats Bakery' that includes: hero
              with daily specials, product gallery with online ordering, about
              section with story, contact with map integration, and blog for
              recipes. Mobile-responsive with warm, inviting design."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
