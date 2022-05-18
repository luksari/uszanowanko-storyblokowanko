import { PageProps } from '@/types/page';
import { Layout } from '@/components/layout/Layout';

import { Styled404, StyledLink, StyledTitle } from './404.styles';

export const NotFound = (props: PageProps) => {
  return (
    <Layout story={null} links={props.links}>
      <Styled404>
        <StyledTitle>
          <span>404</span> Not found, very sad :(
        </StyledTitle>
        <StyledLink href={'/'}>Go back home</StyledLink>
      </Styled404>
    </Layout>
  );
};
