import { configure, addDecorator } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs/vue'

setOptions( {
  name: 'VUI Stories',
  goFullScreen: false,
  showAddonsPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: true,
  enableShortcuts: true,
} )

addDecorator( withKnobs )

const req = require.context( '../src', true, /stories.js$/ )

function loadStories() {
  req.keys().forEach( filename => {
    req( filename )
  } )
}

configure( loadStories, module )
