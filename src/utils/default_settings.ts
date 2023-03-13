import THEME from '../theme';

const defaultButtonSettings = {
  hazard: {
    name: 'Hazard',
    key: 1,
    color: THEME.COLORS.hazard,
    input_key: 'F',
  },
  cruiseControl: {
    name: 'Cruise Control',
    key: 2,
    color: THEME.COLORS.cruise_control,
    input_key: 'C',
  },
  highLight: {
    name: 'High Light',
    key: 3,
    color: THEME.COLORS.high_light,
    input_key: 'K',
  },
  engineBreak: {
    name: 'Engine Break',
    key: 4,
    color: THEME.COLORS.engine_break,
    input_key: 'B',
  },
  differential: {
    name: 'Differential',
    key: 5,
    color: THEME.COLORS.differential,
    input_key: 'V',
  },
  light: {
    name: 'Light',
    key: 6,
    color: THEME.COLORS.light,
    input_key: 'L',
  },
  parking: {
    name: 'Parking',
    key: 7,
    color: THEME.COLORS.parking,
    input_key: ' ',
  },
  retarder: {
    key: 8,
    color: THEME.COLORS.retarder,
    input_key: 'R',
  },
};

export default defaultButtonSettings;
