import React from 'react';

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
  rounded?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | any;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
  children?: React.ReactNode;
  disabled?: boolean;
  compact?: boolean;
  style?: IButtonStyle;
  // icon?: IButtonIcon;
  fullWidth?: boolean;
  dataCy?: string;
}

const Button: React.FC<IButton> = (props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!props.disabled && props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={props.disabled}
      className={props.style}
      style={{ borderRadius: props.rounded ? '20px' : '5px', width: props.fullWidth ? '100%' : 'auto' }}
      data-cy={props.dataCy}
    >
      {props.iconBefore && <span>{props.iconBefore}</span>}
      {props.children}
      {props.iconAfter && <span>{props.iconAfter}</span>}
    </button>
  );
};

export default Button;
