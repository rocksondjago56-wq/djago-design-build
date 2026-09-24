export type PageId =
  | 'home'
  | 'about'
  | 'sectors'
  | 'disciplines'
  | 'work'
  | 'transformations'
  | 'map'
  | 'workflow'
  | 'contact';

export interface NavigationProps {
  currentPage: PageId;
  navigateTo: (page: PageId, options?: { serviceId?: string }) => void;
  onOpenBrochure?: () => void;
}
