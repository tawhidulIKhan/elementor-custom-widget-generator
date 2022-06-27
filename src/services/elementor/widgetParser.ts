/* eslint-disable no-console */
import {
  SECTION_TEMPLATE,
  TEXT_TEMPLATE,
} from '../../templates/widgetTemplate';

const controls: any = {
  '\\Elementor\\Controls_Manager::TEXT': TEXT_TEMPLATE,
};

export const getControl = (control: any) => {
  let controlItem: any = controls[control.type];
  controlItem = controlItem
    .replace(':controlId', control.id)
    .replace(':label', control.label)
    .replace(':placeholder', control.placeholder);
  return controlItem;
};

const parseItem = (item: any, replaceAbleActions: any) => {
  let tempItem: any = item;
  replaceAbleActions.forEach((element: any) => {
    tempItem = tempItem.replace(element.placeholder, element.replaceWith);
  });
  return tempItem;
};

const getControls = (controls: any) => {
  let controlOutput = '';
  controls.forEach((control: any) => {
    controlOutput += `${getControl(control)}`;
  });
  return controlOutput;
};

export const getSections = (sectionObj: any, sectionTemplate: string) => {
  const replaceAbleActions: any = [
    {
      placeholder: 'section_id',
      replaceWith: sectionObj.id,
    },
    {
      placeholder: 'section_label',
      replaceWith: sectionObj.label,
    },
    {
      placeholder: ':controls',
      replaceWith: getControls(sectionObj.controls),
    },
  ];

  return parseItem(sectionTemplate, replaceAbleActions);
};

export const getWidgetSections = (sections: any) => {
  let output = '';
  sections.forEach((itr: any) => {
    output += `${getSections(itr, SECTION_TEMPLATE)}`;
  });
  return output;
};

export const getCategories = (categories: any) => categories.join(',');

export const getCode = (widgetTemplate: any, widget: any) => {
  const replaceAbleActions: any = [
    {
      placeholder: ':widgetName',
      replaceWith: widget.name,
    },
    {
      placeholder: ':categories',
      replaceWith: getCategories(widget.categories),
    },
    {
      placeholder: ':sections',
      replaceWith: getWidgetSections(widget.sections),
    },
  ];
  return parseItem(widgetTemplate, replaceAbleActions);
};
