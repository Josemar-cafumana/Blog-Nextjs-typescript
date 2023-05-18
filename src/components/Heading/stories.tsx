import { Meta, Story } from '@storybook/react/types-6-0';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Component-utils/Heading',
  component: Heading,
  args: {
    children: 'Não sei',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Template: Story<HeadingProps> = (args) => <Heading {...args} />;
export const Template2: Story<HeadingProps> = (args) => <Heading {...args} />;

Template2.args = {
  children: 'Não sei 2',
  colorDark: true,
};
Template2.parameters = {
  backgrounds: {
    default: 'light',
  },
};
