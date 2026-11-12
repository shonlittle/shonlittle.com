/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2026-11-12
 */

// Add third-party dependencies.
import { render, screen, within, fireEvent } from '@testing-library/react';

// Add local dependencies.
import Themes from '../../Themes';
import Hero from './Hero';
import Projects from './Projects';
import Experience from './Experience';
import content from '../../../content/software.json';

/**
 * Render a component inside the site theme.
 * @param {React.ReactElement} ui - Component to render.
 * @returns {Object} Render result.
 */
const renderWithTheme = ui => render(<Themes>{ui}</Themes>);

describe('Hero', () => {
  it('shows the positioning headline and a résumé download', () => {
    renderWithTheme(<Hero />);

    expect(screen.getByRole('heading', { level: 1, name: 'Shon Little' })).toBeInTheDocument();
    content.hero.headline.forEach(line => {
      expect(screen.getByText(line)).toBeInTheDocument();
    });

    const resumeLink = screen.getByRole('link', { name: content.resume.label });
    expect(resumeLink).toHaveAttribute('href', content.resume.href);
    expect(resumeLink).toHaveAttribute('download');
  });
});

describe('Projects', () => {
  it('lists the negotiation platform first with its headline metric', () => {
    renderWithTheme(<Projects />);

    const cards = screen.getAllByRole('article');
    expect(cards).toHaveLength(content.projects.length);

    const first = within(cards[0]);
    expect(first.getByRole('heading', { level: 3 })).toHaveTextContent('Enterprise Multi-Agent Negotiation Platform');
    expect(first.getByText('21%')).toBeInTheDocument();
    expect(first.getByText('improvement in margins')).toBeInTheDocument();
  });

  it('expands and collapses a case study', () => {
    renderWithTheme(<Projects />);

    const first = within(screen.getAllByRole('article')[0]);
    const toggle = first.getByRole('button', { name: 'View case study' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    // The case study is in the page (so it is crawlable) but collapsed.
    const caseStudy = first.getByText(content.projects[0].role).closest('.MuiCollapse-root');
    expect(caseStudy).toHaveClass('MuiCollapse-hidden');

    fireEvent.click(toggle);

    expect(first.getByRole('button', { name: 'Hide case study' })).toHaveAttribute('aria-expanded', 'true');
    expect(caseStudy).not.toHaveClass('MuiCollapse-hidden');
  });
});

describe('Experience', () => {
  it('shows the Galatiq role as ended', () => {
    renderWithTheme(<Experience />);

    expect(screen.getByText('Galatiq')).toBeInTheDocument();
    expect(screen.getByText('2026')).toBeInTheDocument();
    expect(screen.queryByText('2026 – Present')).not.toBeInTheDocument();
  });
});
