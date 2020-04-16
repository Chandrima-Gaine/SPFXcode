import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ChandReactWpWebPartStrings';
import ChandReactWp from './components/ChandReactWp';
import { IChandReactWpProps } from './components/IChandReactWpProps';

export interface IChandReactWpWebPartProps {
  description: string;
}

export default class ChandReactWpWebPart extends BaseClientSideWebPart<IChandReactWpWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IChandReactWpProps > = React.createElement(
      ChandReactWp,
      {
        description: this.properties.description,
        siteurl: this.context.pageContext.web.absoluteUrl
      }
    );

    ReactDom.render(element, this.domElement);
  }

}
