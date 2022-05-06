import { css } from 'styled-components';


const containerBase = css`
  width: 100%;

  margin: 0 auto;

  max-width: 1400px;
`;

export const hidden = css`
  position: absolute;
  top: -9999px;
  left: -9999px;
`;

const sm = css`
  ${containerBase};

  padding-left: 72px;
  padding-right: 72px;

  ${({ theme }) => theme.breakpoints.mq.min.sm} {
    padding-left: 112px;
    padding-right: 112px;
  }

  ${({ theme }) => theme.breakpoints.mq.min.lg} {
    padding-left: 280px;
    padding-right: 280px;
  }
`;

const lg = css`
  ${containerBase};

  padding-left: 16px;
  padding-right: 16px;

  ${({ theme }) => theme.breakpoints.mq.min.sm} {
    padding-left: 112px;
    padding-right: 112px;
  }
`;

export const container = { sm, lg };
