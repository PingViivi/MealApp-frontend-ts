import React from 'react';
import './Button.scss';

// Define icons here
// const icons = {
//   delete: <DeleteOutlineIcon />,
//   save: <SaveIcon />,
//   cancel: <CancelIcon />,
//   confirm: <ConfirmIcon />,
//   copy: <ContentCopyIcon />,
//   add: <AddIcon />,
//   personAdd: <PersonAddAltIcon />,
//   fileUpload: <FileUploadIcon />
// };

// Define the type for button styles
export type IButtonStyle =
  | "blue"
  | "outline-blue"
  | "red"
  | "outline-red"
  | "green"
  | "outline-green"
  | "purple"
  | "outline-purple"
  | "pink"
  | "outline-pink"
  | "subtle-blue";

// Define the props for the Button component
export interface IButton {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | any;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
  children?: React.ReactNode;
  disabled?: boolean;
  compact?: boolean;
  style?: IButtonStyle;
  fullWidth?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button: React.FC<IButton> = (props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!props.disabled && props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button
      type={props.type}
      onClick={handleClick}
      disabled={props.disabled}
      className={'button ' + props.style}
      style={{ width: props.fullWidth ? '100%' : 'auto' }}
    >
      {props.iconBefore && <span className='icon before'>{props.iconBefore}</span>}
      {props.children}
      {props.iconAfter && <span className='icon after'>{props.iconAfter}</span>}
    </button>
  );
};

export default Button;
