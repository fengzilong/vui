export default {
  size: {
    validator( value ) {
      return ~[
        'small',
        'medium',
        'large',
      ].indexOf( value )
    },
    default: 'medium',
  },

  rounded: {
    type: Boolean,
    default: false,
  },

  width: {
    type: String,
    default: ''
  },

  placeholder: {
    type: String,
    default: ''
  }
}
