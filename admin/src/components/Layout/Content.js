import React from 'react';

const Content = ({tag: Tag, className, ...restProps}) => {
  return <Tag className={className} {...restProps} />;
};

export default Content;
