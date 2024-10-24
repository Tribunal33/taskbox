import { fn } from '@storybook/test'
import MyButton from './Button.vue'


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Button',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button'
  }
}

export const Secondary = {
  args: {
    label: 'Button'
  }
}

export const Large = {
  args: {
    size: 'large',
    label: 'Button'
  },
  parameters: {
    design: {
      type: "figma",
      url: 'https://www.figma.com/design/Wf7sDlUg2372jaKKTJ0Mgz/OJS-3.4-3.5?node-id=3377-5846&t=lht7l6tRhELFIBAQ-4',
    },
  },
}

export const Small = {
  args: {
    size: 'small',
    label: 'Button'
  },
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/design/Wf7sDlUg2372jaKKTJ0Mgz/OJS-3.4-3.5?node-id=3406-6105&t=lht7l6tRhELFIBAQ-4',
      accessToken: 'figd_QptPXkChK_XffLchclE3TyWmMsKhI7uRQ21LcER4'
    }
  }
}
