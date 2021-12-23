import LayoutHeader from "./LayoutHeader/LayoutHeader";
import LayoutMain from "./LayoutMain/LayoutMain";
import LayoutFooter from "./LayoutFooter/LayoutFooter";
import LayoutSidebar from "./LayoutSidebar";

function Layout({ children }) {
  return <>{children}</>;
}

Layout.LayoutHeader = LayoutHeader;
Layout.LayoutMain = LayoutMain;
Layout.LayoutFooter = LayoutFooter;
Layout.LayoutSidebar = LayoutSidebar;

export default Layout;
