import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withNotes } from '@storybook/addon-notes'
import { text, boolean, number, select } from '@storybook/addon-knobs/vue'

import vuiInput from './index.vue'

const stories = storiesOf( 'Input', module )

const sizeOptions = {
  small: 'small',
  medium: 'medium',
  large: 'large',
}

stories.add(
  'Basic',
  function basic() {
    const size = select( 'Size', sizeOptions, 'medium' )
    const rounded = boolean( 'Rounded', false )
    const width = text( 'Width', '200px' )
    const placeholder = text( 'Placeholder', 'Type your name' )

    return {
      components: { vuiInput },
      template: `
        <div>
          <vui-input
            size="${ size }"
            width="${ width }"
            :rounded="${ rounded }"
            placeholder="${ placeholder }"
          ></vui-input>
        </div>
      `
    }
  }
)
