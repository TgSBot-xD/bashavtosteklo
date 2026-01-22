import { ButtonLinkToForm, CompanyNumber } from './company-contacts';
import { NavigationPanel } from './navigation-panel/navigation-panel';
import { SheetNavigationPanel } from './navigation-panel/sheet-navigation-panel';
import { Trademark } from './trademark';

function Header() {
  return (
    <header data-testid="header" className="flex flex-row">
      <div className="flex w-full flex-row justify-between p-2 px-4">
        {/* <Trademark /> */}
        {/* <NavigationPanel /> */}
        <SheetNavigationPanel sideOfSidebar="right" />
        {/* <CompanyContacts /> */}
      </div>
    </header>
  );
}

export { Header };
