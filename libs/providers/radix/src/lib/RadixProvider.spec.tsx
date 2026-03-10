import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/react';
import { RadixProvider } from './RadixProvider';

describe('RadixProvider', () => {
  it('renders children inside Radix Theme', () => {
    const { getByText } = render(
      <RadixProvider>
        <span>Test Child</span>
      </RadixProvider>,
    );

    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('renders Theme without own background to prevent black box in previews', () => {
    const { container } = render(
      <RadixProvider>
        <span>Content</span>
      </RadixProvider>,
    );

    const themeDiv = container.querySelector('.radix-themes');
    expect(themeDiv).toBeInTheDocument();
    expect(themeDiv).not.toHaveAttribute('data-has-background', 'true');
  });
});
