import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Title from "./Title";

export default {
  title: "Components/Title",
  component: Title,
  argType: {
    title_string: { control: "text" },
    size: { control: "number" },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title_string: "기본 타이틀",
};

export const Big = Template.bind({});
Big.args = {
  title_string: "큰 타이틀",
  size: 42,
};
