/* eslint-disable import/prefer-default-export */
import React from 'react';
import GavelIcon from '@material-ui/icons/Gavel';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Button } from '@material-ui/core';

import {
  CAFE,
  AZUL_MARINHO,
} from '../../../utils/colors';

export const content = [
  {
    topText: 'REACT',
    middleText: 'FRAMEWORK FRONTEND !!',
    bottomText: `Um dos três frameworks de frontend mais utilizados
    do mundo.`,
    buttomText: (
      <Button style={{ borderRadius: 30 }}>
        <GavelIcon />
        React !
      </Button>
    ),
    position: 'left',
    color: CAFE,
  },
  {
    topText: 'Redux',
    middleText: 'Uma boa forma de gerenciar estados!',
    bottomText: `Redux pode ser um pouco complexo,
     mas tem uma boa estrutura.`,
    buttomText: (
      <Button style={{ borderRadius: 30 }}>
        <AssignmentIcon />
        Redux !
      </Button>
    ),
    position: 'left',
    color: AZUL_MARINHO,
  },
];
