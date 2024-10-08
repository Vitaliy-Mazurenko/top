import type { Preview } from "@storybook/react";
import {ThemeProvider} from '../src/app/providers/ThemeProvider/index'

const preview: Preview = {
  decorators: [
    (Story) => (
        <ThemeProvider>
          <Story />
        </ThemeProvider>
    )
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
