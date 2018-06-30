import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withNotes } from '@storybook/addon-notes'
import { text, boolean, number, select } from '@storybook/addon-knobs/vue'

import vuiButton from './index.vue'
import vuiIcon from '../icon/index.vue'
import vuiButtonGroup from '../button-group/index.vue'

const stories = storiesOf( 'Button', module )

const typeOptions = {
  normal: 'normal',
  outline: 'outline',
  primary: 'primary',
  ghost: 'ghost',
  dashed: 'dashed',
}

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
    const disabled = boolean( 'Disabled', false )
    const full = boolean( 'Full Width', false )

    return {
      components: { vuiButton },
      template: `
        <div>
          <vui-button
            size="${ size }"
            :rounded="${ rounded }"
            :disabled="${ disabled }"
            :full="${ full }"
            @click="onClick"
          >normal</vui-button>

          <vui-button
            type="primary"
            size="${ size }"
            :rounded="${ rounded }"
            :disabled="${ disabled }"
            :full="${ full }"
            @click="onClick"
          >primary</vui-button>

          <vui-button
            type="outline"
            size="${ size }"
            :rounded="${ rounded }"
            :disabled="${ disabled }"
            :full="${ full }"
            @click="onClick"
          >outline</vui-button>

          <vui-button
            type="ghost"
            size="${ size }"
            :rounded="${ rounded }"
            :disabled="${ disabled }"
            :full="${ full }"
            @click="onClick"
          >ghost</vui-button>

          <vui-button
            type="dashed"
            size="${ size }"
            :rounded="${ rounded }"
            :disabled="${ disabled }"
            :full="${ full }"
            @click="onClick"
          >dashed</vui-button>

          <vui-button
            type="text"
            size="${ size }"
            :rounded="${ rounded }"
            :disabled="${ disabled }"
            :full="${ full }"
            @click="onClick"
          >text</vui-button>
        </div>
      `,
      methods: {
        onClick: action( 'click' )
      }
    }
  }
)

stories.add(
  'With Icon',
  function loading() {
    return {
      components: { vuiButton, vuiIcon },
      template: `
        <div>
          <vui-button>
            <vui-icon type="search"></vui-icon>
            search
          </vui-button>

          <vui-button type="primary">
            <vui-icon type="search"></vui-icon>
            search
          </vui-button>

          <vui-button type="outline">
            <vui-icon type="search"></vui-icon>
            search
          </vui-button>

          <vui-button type="ghost">
            <vui-icon type="search"></vui-icon>
            search
          </vui-button>

          <vui-button type="dashed">
            <vui-icon type="search"></vui-icon>
            search
          </vui-button>

          <vui-button type="text">
            <vui-icon type="search"></vui-icon>
            search
          </vui-button>
        </div>
      `,
    }
  }
)

stories.add(
  'Loading',
  function loading() {
    const isLoading = boolean( 'Loading', true )

    return {
      components: { vuiButton },
      template: `
        <div>
          <vui-button
            :loading="${ isLoading }"
          >normal</vui-button>

          <vui-button
            type="primary"
            :loading="${ isLoading }"
          >primary</vui-button>

          <vui-button
            type="outline"
            :loading="${ isLoading }"
          >outline</vui-button>

          <vui-button
            type="dashed"
            :loading="${ isLoading }"
          >dashed</vui-button>
        </div>
      `,
    }
  }
)

stories.add(
  'Group',
  function group() {
    const size = select( 'Size', sizeOptions, 'medium' )
    const rounded = boolean( 'Rounded', false )

    return {
      components: {
        vuiButton,
        vuiButtonGroup,
      },
      template: `
        <div>
          <vui-button-group
            type="normal"
            size="${ size }"
            :rounded="${ rounded }"
          >
            <vui-button>Beijing</vui-button>
            <vui-button>Shanghai</vui-button>
            <vui-button>Guangzhou</vui-button>
          </vui-button-group>

          <br />

          <vui-button-group
            type="primary"
            size="${ size }"
            :rounded="${ rounded }"
          >
            <vui-button>Beijing</vui-button>
            <vui-button>Shanghai</vui-button>
            <vui-button>Guangzhou</vui-button>
          </vui-button-group>

          <br />

          <vui-button-group
            type="outline"
            size="${ size }"
            :rounded="${ rounded }"
          >
            <vui-button>Beijing</vui-button>
            <vui-button>Shanghai</vui-button>
            <vui-button>Guangzhou</vui-button>
          </vui-button-group>

          <br />

          <vui-button-group
            type="dashed"
            size="${ size }"
            :rounded="${ rounded }"
          >
            <vui-button>Beijing</vui-button>
            <vui-button>Shanghai</vui-button>
            <vui-button>Guangzhou</vui-button>
          </vui-button-group>
        </div>
      `
    }
  }
)
