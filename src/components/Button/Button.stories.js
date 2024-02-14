import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: {
      options: ["black", "white"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    color: "black",
    size: "large",
    text: "Button",
    className: {},
  },
};
