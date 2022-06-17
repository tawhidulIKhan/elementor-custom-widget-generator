import { ControlTabs } from '../enums/controls';

export interface Section {
  id: string;
  label: string;
  tab: ControlTabs;
  controls: any;
}

export interface ControlInterface {
  id: string;
  label: string;
  type: string;
}

export interface SectionInterface {
  id: string;
  label: string;
  tab: ControlTabs;
  controls: ControlInterface[];
}

export interface WidgetCategoriesInterface {
  id: string;
  label: string;
}
