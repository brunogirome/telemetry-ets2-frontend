import THEME from '../theme';

const defaultButtonSettings = {
  hazard: {
    name: 'Hazard',
    varName: 'hazard',
    key: 0,
    color: THEME.COLORS.hazard,
    inputKey: 'F',
  },
  cruiseControl: {
    name: 'Cruise Control',
    varName: 'cruiseControl',
    key: 1,
    color: THEME.COLORS.cruise_control,
    inputKey: 'C',
  },
  highLight: {
    name: 'High Light',
    varName: 'highLight',
    key: 2,
    color: THEME.COLORS.high_light,
    inputKey: 'K',
  },
  engineBreak: {
    name: 'Engine Break',
    varName: 'engineBreak',
    key: 3,
    color: THEME.COLORS.engine_break,
    inputKey: 'B',
  },
  differential: {
    name: 'Differential',
    varName: 'differential',
    key: 4,
    color: THEME.COLORS.differential,
    inputKey: 'V',
  },
  light: {
    name: 'Light',
    varName: 'light',
    key: 5,
    color: THEME.COLORS.light,
    inputKey: 'L',
  },
  parking: {
    name: 'Parking',
    varName: 'parking',
    key: 6,
    color: THEME.COLORS.parking,
    inputKey: ' ',
  },
  retarder: {
    key: 7,
    color: THEME.COLORS.retarder,
    inputKey: 'R',
  },
};

export default defaultButtonSettings;
