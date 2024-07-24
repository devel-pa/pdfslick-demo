import { StoryObj } from "@storybook/react";

import PdfViewDialog from "./PdfViewDialog";

export default {
  title: "Pdf View Dialog",
  component: PdfViewDialog,
  tags: ["autodocs"],
  argTypes: {},
};

export const PdfViewDialogStory: StoryObj<typeof PdfViewDialog> = {
  render: (args) => (
    <div style={{ padding: "10px" }}>
      <PdfViewDialog {...args} />
    </div>
  ),
  args: {},
};
