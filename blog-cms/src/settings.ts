/**
 * 默认设置接口
 * @property {string} title 页面标题
 * @property {string} logo logo URL
 * @property {boolean} fixedHeader 是否固定头部
 * @property {boolean} sidebarLogo 是否在侧边栏显示 logo
 * @property {Array} defaultOpeneds 默认展开的父级菜单
 */
export interface DefaultSettings {
    title: string;
    logo: string;
    fixedHeader: boolean;
    sidebarLogo: boolean;
    defaultOpends: string[];
}

const defaultSettings: DefaultSettings = {
    title: 'Naccl\'s Blog Admin',
    logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png',
    fixedHeader: true,
    sidebarLogo: true,
    defaultOpends: ['/blog', '/page', '/pictureHosting', '/system', '/log', '/statistics']
}
export default defaultSettings;