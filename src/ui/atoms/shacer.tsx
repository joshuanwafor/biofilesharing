import styled from 'styled-components/native';
import React from 'react';

export const HSpacer = styled.View<{space?: number}>`
  width: ${({space}) => {
    return space ? `${space}px` : '16px';
  }};
`;

export const VSpacer = styled.View<{space?: number}>`
  height: ${({space}) => {
    return space ? `${space}px` : '16px';
  }};
`;
