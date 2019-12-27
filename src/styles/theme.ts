const theme = {
  border: '2px solid black',
  borderColor: (color?: string) => `2px solid ${color ? color : 'black'}`,
  padding: 10,
  colorGrey: '#dadada',
  colorPurpleMid: '#582A72',
  colorPurpleDark: '#20082E',
  colorPurpleButton: '#a958d7',
  colorPurpleButtonFocus: '#9237c5',
  colorDark: '#3B1650',
  colorGreyLightest: '#f3f3f3',
  colorLight: '#dedede',
  componentBackgroundColor: 'white',
  minHeight: 250,
  transition: '0.1s cubic-bezier(0.68, -0.55, 0.27, 1.55)'
}

export { theme } 