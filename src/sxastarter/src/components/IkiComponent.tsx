import React, { useEffect } from 'react';
import * as BYOC from '@sitecore/byoc';
import '@sitecore/components/context';

interface IkiComponentProps {
  title: string;
  columnsCount: number;
}

export const IkiComponent = (props: IkiComponentProps & BYOC.ContextProperties): JSX.Element => {
  useEffect(() => {
    props.getSDK('Events').then((events) => {
      events?.pageView({
        channel: 'WEB',
        currency: 'CAD',
        page: 'foo',
        language: 'en',
      });
    });
  }, [props.getSDK]);
  return <h1>{props.title}</h1>;
};

BYOC.registerComponent(IkiComponent, {
  name: 'IkiComponent',
  group: 'Test',
  properties: {
    title: {
      type: 'string',
    },
  },
});
