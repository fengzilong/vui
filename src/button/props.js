export default {
  type: {
    validator( value ) {
      return ~[
        'primary',
        'outline',
        'normal',
        'ghost',
        'text',
        'dashed',
      ].indexOf( value )
    },
    default: 'normal',
  },

  size: {
    type: String,
    default: 'medium',
  },

  rounded: {
    type: Boolean,
    default: false,
  },

  loading: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  full: {
    type: Boolean,
    default: false,
  },
}
