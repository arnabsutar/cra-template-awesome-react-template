import homeResources from "../../app/modules/home/i18n/french";

const defaultMessage = {
  'default.welcome': 'Welcome',
}
const frLang = {
  static: {
    ...defaultMessage,
    ...homeResources,
  },
};
export default frLang;
