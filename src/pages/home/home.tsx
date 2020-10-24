import React, { FC } from 'react';
import { Section } from 'common/sections/section';

type HomepageProps = {};

export const Homepage: FC<HomepageProps> = ({ }) => {
  return (
    <Section>
      <h1>Hi Everybody</h1>
    </Section>
  );
};
