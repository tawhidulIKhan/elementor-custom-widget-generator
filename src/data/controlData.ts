import { ControlTabs, ControlTypes } from '../enums/controls';

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
export interface controlTypeInterface {
  id: ControlTypes;
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

export const controlTypes = [
  {
    id: ControlTypes.TEXT,
    label: 'Text',
  },
  {
    id: ControlTypes.TEXTAREA,
    label: 'Textarea',
  },
];
