import { StyleFilledWrapper } from ".";

export default {
  title: "Components/StyleFilledWrapper",
  component: StyleFilledWrapper,
  argTypes: {
    style: {
      options: ["filled", "filledgreytext", "stroke"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "filled",
    className: {},
    tagText: "SUBSCRIBE",
    tagLeadingIcon: true,
    tagTrailingIcon: true,
  },
};
