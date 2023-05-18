import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionContainer, SectionContainerProps } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse totam
          facere aliquid velit hic molestias voluptate, tempore quidem
          recusandae dignissimos nobis ab earum illum adipisci nam expedita
          officiis, ipsam aut!
        </p>
      </div>
    ),
  },
} as Meta;

export const Template: Story<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
