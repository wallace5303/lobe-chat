'use client';

import { ActionIcon, DiscordIcon } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { DISCORD } from '@/const/url';

const Footer = memo(() => {
  const theme = useTheme();

  return (
    <Flexbox align={'center'} horizontal justify={'space-between'} style={{ padding: 16 }}>
      <span style={{ color: theme.colorTextDescription }}>
        ©{new Date().getFullYear()} LobeHub
      </span>
      <Flexbox horizontal>
        <ActionIcon
          icon={DiscordIcon}
          onClick={() => window.open(DISCORD, '__blank')}
          size={'site'}
          title={'Discord'}
        />
      </Flexbox>
    </Flexbox>
  );
});

export default Footer;
