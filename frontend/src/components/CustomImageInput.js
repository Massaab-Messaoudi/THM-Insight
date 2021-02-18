import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Avatar from "@material-ui/core/Avatar";

import withStyles from "@material-ui/core/styles/withStyles";
import customImageInputStyle from "./CustomImageInputStyle";
import classnames from "classnames";

class CustomImageInput extends Component {
  constructor(props) {
    super(props);
    this.fileUpload = React.createRef();
    this.showFileUpload = this.showFileUpload.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  state = {
    file: undefined,
    imagePreviewUrl:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    
  };

  showFileUpload() {
    if (this.fileUpload) {
      this.fileUpload.current.click();
    }
  }

  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      };
      reader.readAsDataURL(file);
      this.props.setFieldValue(this.props.field.name, file);
    }
  }

  showPreloadImage() {
    const { errorMessage, classes } = this.props;
    const { name } = this.props.field;
    const { file, imagePreviewUrl } = this.state;

    let comp = null;

    if (file) {
      comp = (
        <img className={classes.avatarThumb} src={imagePreviewUrl} alt="..." />
      );
    } else {
      <img className={classes.avatarThumb} src={imagePreviewUrl} alt="..." />;
      //comp = <Icon style={{ fontSize: 36 }}>User</Icon>; https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }
    return comp;
  }

  componentDidMount() {
    console.log(this.fileUpload.current);
  }

  render() {
    const { errorMessage,title, classes } = this.props;
    const { name, onBlur } = this.props.field;

    const avatarStyle = classnames(
      classes.bigAvatar,
      this.state.file ? [classes.whiteBack] : [classes.primaryBack],
      { [classes.errorBack]: errorMessage }
    );

    return (
      <div className={classes.container}>
        <input
          accept="image/*" 
          className={classes.hidden}
          id={name}
          name={name}
          type="file"
          onChange={this.handleImageChange}
          ref={this.fileUpload}
          // onBlur={onBlur}
          //className="form-control"
        />
        <Typography className={classes.title} variant="h5">
          {title}
        </Typography>
        <Avatar className={avatarStyle} onClick={this.showFileUpload}>
          {this.showPreloadImage()}
        </Avatar>

        {errorMessage ? (
          <Typography variant="caption" >
            {errorMessage}
          </Typography>
        ) : null}
      </div>
    );
  }
}

export default withStyles(customImageInputStyle)(CustomImageInput);
