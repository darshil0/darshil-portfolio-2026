import { describe, it, expect } from 'vitest';
import { assistantData } from '../src/constants/assistantData';

describe('Jules AI Assistant Data', () => {
  it('should contain the welcome message', () => {
    expect(assistantData.welcomeMessage).toContain("Hi! I'm Darshil's AI assistant");
  });

  it('should have a personal background section', () => {
    expect(assistantData.personal).toBeDefined();
    expect(assistantData.personal.background).toContain('Global Healthcare QA Leader');
  });

  it('should have personal questions', () => {
    expect(assistantData.personalQuestions.length).toBeGreaterThan(0);
    expect(assistantData.personalQuestions).toContain("Tell me about Darshil's background");
  });

  it('should have correct details for the ATLAS Strategic Matrix repo', () => {
    const atlas = assistantData.repositories.find(r => r.id === 'atlas-strategic-matrix');
    expect(atlas).toBeDefined();
    expect(atlas.tech).toContain('Google Gemini Flash 1.5');
  });
});
