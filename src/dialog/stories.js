import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withNotes } from '@storybook/addon-notes'
import { text, boolean, number, select } from '@storybook/addon-knobs/vue'

import vuiDialog from './index.vue'

const stories = storiesOf( 'Dialog', module )

stories.add(
  'Basic',
  function basic() {
    return {
      components: { vuiDialog },
      data() {
        return {
          show: true
        }
      },
      template: `
        <vui-dialog
          :show.sync="show"
          width="50%"
          title="Submit Your Order"
          confirmText="Submit"
        >
          Please confirm your order info
        </vui-dialog>
      `
    }
  }
)
