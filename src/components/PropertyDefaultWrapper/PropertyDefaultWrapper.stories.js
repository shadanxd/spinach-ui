import { PropertyDefaultWrapper } from ".";

export default {
  title: "Components/PropertyDefaultWrapper",
  component: PropertyDefaultWrapper,
  argTypes: {
    property1: {
      options: [
        "hover-selected-about-us",
        "hover-selected-client-work",
        "hover-selected-expertise",
        "default",
        "hover-services",
        "selected-services",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "hover-selected-about-us",
    className: {},
    componentClassName: {},
    componentClassNameOverride: {},
    dropdown:
      "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/dropdown-2.svg",
  },
};
