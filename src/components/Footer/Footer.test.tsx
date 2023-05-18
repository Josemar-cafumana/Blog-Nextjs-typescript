/* eslint-disable no-unused-vars */
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render Footer', () => {
    const { container } = renderTheme(
      <Footer footerHtml={'<h1>Olá Mundo</h1>'} />,
    );
    expect(
      screen.getByRole('heading', { name: 'Olá Mundo' }),
    ).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c4 {
        font-size: calc(1.6rem + 0.2rem);
        line-height: 1.5;
      }

      .c4 p {
        margin: 2.4rem 0;
      }

      .c4 a,
      .c4 a:visited,
      .c4 a:link {
        color: #dc143c;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c4 a:hover {
        -webkit-filter: brightness(50%);
        filter: brightness(50%);
      }

      .c4 code {
        font-family: monospace;
        color: #dc143c;
        font-size: 1.6rem;
        background: #DDDDDD;
        padding: 0.2rem;
        margin: 0.2rem;
      }

      .c4 pre {
        background: #000;
        padding: 2.4rem;
        font-family: monospace;
        color: #FFFFFF;
        margin: 2.4rem 0;
        width: 100%;
        overflow-x: auto;
        font-size: 1.6rem;
      }

      .c4 pre code {
        color: inherit;
        background: inherit;
      }

      .c4 img {
        max-width: 100%;
      }

      .c4 .image {
        background: #DDDDDD;
        line-height: 0;
        margin: 4.0rem 0;
      }

      .c4 .image figcaption {
        font-size: 1.6rem;
        padding: 1.6rem;
        text-align: center;
        line-height: 1.3;
        margin: 2.4rem 0;
      }

      .c4 .image-style-side {
        max-width: 50%;
        float: right;
        margin: 2.4rem;
      }

      .c4 hr {
        border: none;
        border-bottom: 0.1rem solid #DDDDDD;
      }

      .c4 ul,
      .c4 ol {
        margin: 2.4rem 4.0rem;
      }

      .c4 .table {
        width: 100%;
        overflow: hidden;
        overflow-x: auto;
      }

      .c4 table {
        width: 100%;
        margin: 2.4rem 0;
        border-collapse: collapse;
      }

      .c4 table td,
      .c4 table th {
        padding: 1.6rem;
        border: 0.1rem solid #DDDDDD;
      }

      .c4 blockquote {
        border-left: 0.5rem solid #dc143c;
        color: #aaa;
        -webkit-filter: brightness(80%);
        filter: brightness(80%);
        padding-left: 2.4rem;
        font-style: italic;
        margin: 2.4rem;
      }

      .c2 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
        width: 100%;
      }

      .c0 {
        text-align: center;
        border-top: 0.1rem solid #DDDDDD;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 .c3 {
        font-size: 1.6rem;
      }

      .c0 .c1 {
        padding-top: 0;
        padding-bottom: 0;
      }

      @media (max-width:768px) {
        .c4 {
          font-size: 2rem;
        }

        .c4 .image-style-side {
          max-width: 100%;
          float: none;
          margin: 0;
        }
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1 c2"
          >
            <div
              class="c3 c4"
            >
              <h1>
                Olá Mundo
              </h1>
            </div>
          </div>
        </footer>
      </div>
    `);
  });
});
