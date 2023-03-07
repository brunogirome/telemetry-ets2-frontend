import THEME from '../theme';

const defaultButtonSettings = {
  hazard: {
    key: 1,
    color: THEME.COLORS.hazard,
    input_key: 'F',
  },
  cruiseControl: {
    key: 2,
    color: THEME.COLORS.cruise_control,
    input_key: 'C',
  },
  highLight: {
    key: 3,
    color: THEME.COLORS.high_light,
    input_key: 'K',
  },
  engineBreak: {
    key: 4,
    color: THEME.COLORS.engine_break,
    input_key: 'B',
  },
  differential: {
    key: 5,
    color: THEME.COLORS.differential,
    input_key: 'V',
  },
  light: {
    key: 6,
    color: THEME.COLORS.light,
    input_key: 'L',
  },
  parking: {
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
