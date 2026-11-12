/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2026-11-12
 */

// Add local dependencies.
import content from './software.json';

describe('software page content', () => {
  it('leads the projects with the enterprise AI work, in the agreed order', () => {
    expect(content.projects.map(project => project.id)).toEqual([
      'negotiation-platform',
      'rag-knowledge-assistant',
      'deep-ai',
      'drug-ai',
      'mfg-ai',
      'airline-optimization',
      'manufacturing-api',
      'inspection-tools',
    ]);
  });

  it('gives every project a complete case study and an outcome', () => {
    content.projects.forEach(project => {
      ['title', 'context', 'summary', 'challenge', 'role', 'result'].forEach(field => {
        expect(typeof project[field]).toBe('string');
        expect(project[field].length).toBeGreaterThan(0);
      });
      expect(project.solution.length).toBeGreaterThan(0);
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.technologies.length).toBeLessThanOrEqual(5);
      expect(Boolean(project.metric) || Boolean(project.outcome)).toBe(true);
      // A project without an image needs a label for its gradient panel.
      expect(Boolean(project.image) || Boolean(project.panelLabel)).toBe(true);
    });
  });

  it('does not present the Galatiq role as current', () => {
    const galatiq = content.experience.find(item => item.company === 'Galatiq');
    expect(galatiq.date).toBe('2026');
    expect(galatiq.date).not.toMatch(/present/i);

    const currentPositioning = [content.hero.intro, ...content.hero.codeLines, ...content.about.paragraphs].join(' ');
    expect(currentPositioning).not.toMatch(/Galatiq/);
  });

  it('keeps confidential and unverified details out of the page', () => {
    const everything = JSON.stringify(content);
    expect(everything).not.toMatch(/Dollar General/i);
    expect(everything).not.toMatch(/bge-m3|Granite|Slate|Chroma|Gradio|CrewAI/i);
  });

  it('points the résumé download at a file that exists', () => {
    // eslint-disable-next-line global-require
    const fs = require('fs');
    // eslint-disable-next-line global-require
    const path = require('path');
    expect(fs.existsSync(path.join(__dirname, '..', '..', 'public', content.resume.href))).toBe(true);
  });
});
