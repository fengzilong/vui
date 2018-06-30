export default {
  type: {
    validator( value ) {
      return ~[
        'primary',
        'outline',
        'normal',
        'ghost',
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
}
