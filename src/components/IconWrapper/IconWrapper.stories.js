import { IconWrapper } from ".";

export default {
  title: "Components/IconWrapper",
  component: IconWrapper,
  argTypes: {
    size: {
      options: ["large", "x-small", "small", "x-large", "medium"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    className: {},
  },
};
