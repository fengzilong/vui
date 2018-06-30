export default {
  size: {
    validator( value ) {
      return ~[
        'small',
        'medium',
        'large',
      ].indexOf( value )
    },
    default: 'medium'
  },

  placeholder: {
    type: String,
    default: ''
  },
}
