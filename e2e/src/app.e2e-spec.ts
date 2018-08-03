import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should find router-outlet html tag in DOM', () => {
    page.navigateTo();
    expect(page.getRouterOutletTag()).toBeTruthy();
  });
});
