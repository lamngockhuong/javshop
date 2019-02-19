import React from 'react';
import Content from "./Content";

const EmptyLayout = ({children, ...restProps}) => (
  <Content
    tag='div'
  >
    {children}
  </Content>
);

export default EmptyLayout;
