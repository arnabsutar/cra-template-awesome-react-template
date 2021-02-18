/**
 * @Description Menu configuartion for module home
 * @FileName menuConfig.js
 * @Author awesome-react-cli
 * @CreatedOn 08 February, 2021 16:39:31
 * @IssueID NA
 */
const menus = () => [{
  id: 'home',
  sequence: 1,
  icon: null,
  label: 'home',
  url: '#',
  action: null,
  aclKey: 'home',
  acl: true,
  subMenu: [],
}];
const mobileMenus = menus;
export { menus, mobileMenus };
