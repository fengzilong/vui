import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withNotes } from '@storybook/addon-notes'
import { text, boolean, number, select } from '@storybook/addon-knobs/vue'

import vuiIcon from './index.vue'

const stories = storiesOf( 'Icon', module )

stories.add(
  'Basic',
  function basic() {
    return {
      components: { vuiIcon },
      template: `
        <div>
          <vui-icon type="search"></vui-icon>
          <vui-icon type="left"></vui-icon>
          <vui-icon type="right"></vui-icon>
          <vui-icon type="up"></vui-icon>
          <vui-icon type="down"></vui-icon>
        </div>
      `
    }
  }
)
