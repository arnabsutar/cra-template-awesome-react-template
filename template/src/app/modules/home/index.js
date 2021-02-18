/**
 * @Description Export all the module specific components/objects
 * @FileName index.js
 * @Author awesome-react-cli
 * @CreatedOn 08 February, 2021 16:38:13
 * @IssueID NA
 */
export { default as homeAPI } from './config/apiConfig';
export {
  menus as homeMenus,
  mobileMenus as homeMobileMenus,
} from './config/menuConfig';
export { default as homeRoutes } from './config/routeConfig';
export * from './redux';
export { default as Home } from './containers/home/home';
