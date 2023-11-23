import React, { useEffect } from 'react';
import * as BYOC from '@sitecore/byoc';
import * as FEAAS from '@sitecore-feaas/clientside/react';
import '@sitecore/components/context';

interface IkiComponentProps {
  title: string;
  columnsCount: number;
}

export const IkiComponent = ({
  getSDK,
  title,
}: IkiComponentProps & BYOC.ContextProperties): JSX.Element => {
  useEffect(() => {
    getSDK('Events').then((events) => {
      events?.pageView({
        channel: 'WEB',
        currency: 'CAD',
        page: 'foo',
        language: 'en',
      });
    });
  }, [getSDK]);
  return <h1>{title}</h1>;
};

FEAAS.External.registerComponent(IkiComponent, {
  name: 'IkiComponent',
  properties: {
    title: {
      type: 'string',
    },
    columnsCount: {
      type: 'number',
    },
  },
});
