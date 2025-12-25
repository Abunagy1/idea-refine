const enhancementTemplates = [
    "Create a modern, responsive website for {idea} that focuses on user experience and conversion optimization. Key features should include:",
    "Build a web application for {idea} with the following specifications:",
    "Design and develop a website for {idea} that targets [specific audience] and includes:"
];

const sections = [
    "1. Hero section with clear value proposition",
    "2. Features/benefits section",
    "3. Testimonials or social proof",
    "4. Call-to-action section",
    "5. Contact/lead capture form",
    "6. Mobile-responsive design",
    "7. Fast loading performance",
    "8. SEO-optimized content structure",
    "9. Accessibility compliance (WCAG 2.1)",
    "10. Analytics integration"
];

const enhancePrompt = (userIdea) => {
    // Clean the input
    const cleanIdea = userIdea.trim();

    // Select a random template
    const template = enhancementTemplates[
        Math.floor(Math.random() * enhancementTemplates.length)
    ].replace('{idea}', cleanIdea);

    // Select 4-6 random sections
    const selectedSections = [...sections]
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.floor(Math.random() * 3) + 4);

    // Add additional enhancements based on idea content
    let enhancements = '';

    if (cleanIdea.toLowerCase().includes('ecommerce') || cleanIdea.includes('shop')) {
        enhancements = '\n\nAdditional e-commerce features:\n- Product catalog with filters\n- Shopping cart and checkout\n- Payment gateway integration\n- Customer account dashboard';
    } else if (cleanIdea.toLowerCase().includes('blog') || cleanIdea.includes('content')) {
        enhancements = '\n\nAdditional content features:\n- Blog/CMS system\n- Search functionality\n- Social sharing\n- Newsletter subscription';
    } else if (cleanIdea.toLowerCase().includes('saas') || cleanIdea.includes('service')) {
        enhancements = '\n\nAdditional SaaS features:\n- User authentication\n- Dashboard/analytics\n- Subscription management\n- API integration capabilities';
    }

    // Add technical requirements
    const techStack = [
        '\n\nTechnical requirements:',
        '- Modern framework (React/Vue.js)',
        '- Responsive design (mobile-first)',
        '- Performance optimized (Lighthouse score >90)',
        '- Secure backend with proper validation',
        '- Cross-browser compatibility'
    ].join('\n');

    return template + '\n\n' + selectedSections.join('\n') + enhancements + techStack;
};

module.exports = { enhancePrompt };