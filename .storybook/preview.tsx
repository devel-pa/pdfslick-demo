import React from "react";
import type { Preview } from "@storybook/react";
import PrintUtils from "../src/components/PrintUtils";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div>
          <Story />
          <PrintUtils />
        </div>
      );
    },
  ],
};

export default preview;
