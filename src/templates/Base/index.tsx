import { Footer } from 'components/Footer';
import { GoTop } from 'components/GoTop';
import { Header } from 'components/Header';
import { Menu } from 'components/Menu';
import { ToggleTheme } from 'components/ToggleTheme';
import config from 'config';
import { useRouter } from 'next/router';
import { SettingsStrapi } from 'shared-types/settings-strapi';
import * as Styled from './style';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  const router = useRouter();

  return (
    <Styled.Wrapper>
      <ToggleTheme />
      <Menu
        links={settings.menuLink}
        blogName={settings.blogName}
        logo={`${config.url}${settings.logo.url}`}
      />

      <Styled.HeaderContent>
        <Header
          blogName={settings.blogName}
          blogDescription={settings.blogDescription}
          logo={`${config.url}${settings.logo.url}`}
        />
      </Styled.HeaderContent>

      <Styled.SearchContainer>
        <form action="/search/" method="GET">
          <Styled.SearchInput
            type="search"
            placeholder="Encontre posts"
            name="q"
            defaultValue={router?.query?.q || ''}
          />
        </form>
      </Styled.SearchContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={settings.text} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Wrapper>
  );
};
