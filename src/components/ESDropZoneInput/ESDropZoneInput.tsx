import React, { Component, createRef } from 'react';
import { ESDropZoneInputProps } from './ESDropZoneInput.types';

class ESDropZoneInput extends Component<ESDropZoneInputProps, never> {
  private fileInputNode = createRef<HTMLInputElement>();

  componentDidMount() {
    const { openFileDialog } = this.props;
    if (openFileDialog) {
      this.triggerFileDialog();
    }
  }

  componentDidUpdate() {
    const { openFileDialog } = this.props;
    if (openFileDialog) {
      this.triggerFileDialog();
    }
  }

  private triggerFileDialog = () => {
    const { onFileDialogClose } = this.props;
    this.open();
    if (onFileDialogClose) {
      onFileDialogClose();
    }
  };

  private open = () => {
    if (this.fileInputNode.current) {
      this.fileInputNode.current.click();
    }
  };

  render() {
    const { openFileDialog, onFileDialogClose, ...inputProps } = this.props;

    return (
      <input {...inputProps} ref={this.fileInputNode} autoComplete="off" />
    );
  }
}

export default ESDropZoneInput;
