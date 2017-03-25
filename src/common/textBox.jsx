import React from 'react';

class TextBox extends React.Component {
  handleChange = (ev) => {
    const { onChange, validate = () => true } = this.props;
    const value = ev.target.value;
    const isValueValid = validate(value);

    this.setState({ isValueValid });
    return onChange && onChange(value, isValueValid);
  }

  render() {
    const { label, children, value = '', ...rest } = this.props;
    const { handleChange } = this;

    return <label className="textbox__label">
      {label}
      <input type="text" 
             className="textbox__input" 
             value={value}
             {...rest}
             onChange={handleChange} >
        {children}
      </input>
    </label>;
  }
}

export default TextBox;