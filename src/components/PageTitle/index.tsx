import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = '哆啦AI';
    console.log('pageTitle----------:', title);
  });

  return null;
});

export default PageTitle;
