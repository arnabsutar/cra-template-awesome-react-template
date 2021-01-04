import numeral from 'numeral';

numeral.register('locale', 'fr', {
  delimiters: {
    thousands: ' ',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  ordinal: (number) => (number === 1 ? 'er' : 'ème'),
  currency: {
    symbol: 'C$',
  },
});

const setLocale = (locale) => numeral.locale(locale);
const formatNumber = (val, formatStr = null) => numeral(val).format(formatStr || null);

export { setLocale, formatNumber };
