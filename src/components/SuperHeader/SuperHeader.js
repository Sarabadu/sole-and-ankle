import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <RightHeader>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </RightHeader>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  display: flex;
  padding-inline: 32px;
  padding-block: 12px;
  justify-content: space-between;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
`;

const RightHeader = styled.span`
  display: flex;
  gap: 24px;
`;
const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;
  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
