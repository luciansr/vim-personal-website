import React from 'react';

import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const neonGreen = `rgb(120, 211, 76)`;
const yellow = `rgb(255, 208, 78)`;
const orange = `rgb(251, 70, 77)`;
const blue = `rgb(117, 156, 255)`;
const gray = `rgb(52, 52, 52)`;
const darkGray = `rgb(29, 29, 29)`;

const StatusCellModifiers = {
    Black: "black",
    Gray: "gray",
    NeonGreen: "neon-green",
    Yellow: "yellow",
    Orange: "orange",
    Blue: "blue",
};

const MODIFIER_CONFIG = {
    [StatusCellModifiers.Black]: () => `
      background-color: black;
    `,
    [StatusCellModifiers.Gray]: () => `
      background-color: ${gray};
    `,
    [StatusCellModifiers.NeonGreen]: () => `
      background-color: ${neonGreen};
      color: ${darkGray};
    `,
    [StatusCellModifiers.Yellow]: () => `
      background-color: ${yellow};
      color: ${darkGray};
    `,
    [StatusCellModifiers.Orange]: () => `
      background-color: ${orange};
      color: ${darkGray};
    `,
    [StatusCellModifiers.Blue]: () => `
      background-color: ${blue};
      color: ${darkGray};
    `,
};



const StatusCell = styled.span`
    background-color: ${darkGray};
    padding: 0 6px;
    color: ${neonGreen};
    font-family: 'Roboto Mono', monospace;
    font-weight:550;
    font-size: 14px;

    // Then apply the modifier configuration.
    ${applyStyleModifiers(MODIFIER_CONFIG)}
`;

export { StatusCell, StatusCellModifiers };
