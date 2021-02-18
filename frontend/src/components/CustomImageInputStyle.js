const customImageInputStyle = theme => ({
    hidden: { display: "none" },
  
    container: {
      margin: "auto"
    },
    title: {
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      //fontFamily: 'Roboto Slab',
      //fontWeight:'bold',
      padding: theme.spacing.unit
    },
    bigAvatar: {
      margin: "auto",
      width: 150,
      height: 150,
      borderColor: theme.palette.primary.main,
      borderStyle: "solid",
      borderSize: "1px"
    },
    avatarThumb: {
      maxWidth:150,
      maxHeight: 150
    },
    primaryBack: {
      background:theme.palette.primary.main
    },
    whiteBack: {
      background: "white"
    },
  
    errorBack: { background: theme.palette.error.main }
  });
  export default customImageInputStyle;