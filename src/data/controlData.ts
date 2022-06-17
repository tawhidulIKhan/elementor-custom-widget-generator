import { ControlTabs } from '../enums/controls';

export default {
  id: '',
  label: '',
  type: '',
  placeholder: '',
};
export interface controlSectionTabsInterface {
  id: ControlTabs;
  label: string;
}
export const controlSectionTabs = [
  {
    id: ControlTabs.CONTENT,
    label: 'Content',
  },
  {
    id: ControlTabs.STYLE,
    label: 'Style',
  },
  {
    id: ControlTabs.ADVANCED,
    label: 'Advanced',
  },
  {
    id: ControlTabs.SETTINGS,
    label: 'Settings',
  },
];
