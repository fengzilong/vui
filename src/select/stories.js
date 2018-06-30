import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withNotes } from '@storybook/addon-notes'
import { text, boolean, number, select } from '@storybook/addon-knobs/vue'

import vuiSelect from './index.vue'
import vuiOption from '../option/index.vue'

const stories = storiesOf( 'Select', module )

stories.add(
  'Basic',
  function basic() {
    const placeholder = text( 'Placeholder', 'Please select city' )

    return {
      components: { vuiSelect, vuiOption },
      template: `
        <div>
          <vui-select placeholder="${ placeholder }">
            <vui-option value="1" label="Beijing"><span style="color: blue;">Beijing</span></vui-option>
            <vui-option value="2" label="Shanghai">Shanghai</vui-option>
            <vui-option value="3" label="Shenzhen">Shenzhen</vui-option>
          </vui-select>
        </div>
      `
    }
  }
)
