/* eslint-disable no-unused-vars */
import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primary,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color and uppercase', () => {
    renderTheme(
      <Heading colorDark={false} uppercase>
        Texto
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading sizes', () => {
    renderTheme(<Heading size="small">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Texto</Heading>);
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
