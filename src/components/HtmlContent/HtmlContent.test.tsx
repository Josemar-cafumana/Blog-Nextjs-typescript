/* eslint-disable no-unused-vars */
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { HtmlContent } from '.';
import React from 'react';

describe('<HtmlContent />', () => {
  it('should render a text', () => {
    renderTheme(<HtmlContent html={'<b>Children</b>'} />);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
