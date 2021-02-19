import homeResources from "../../app/modules/home/i18n/english";

const defaultMessage = {
  'default.welcome': 'Welcome',
}
const enLang = {
  static: {
    ...defaultMessage,
    ...homeResources,
  },
};
export default enLang;
