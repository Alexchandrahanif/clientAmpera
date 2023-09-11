import React, { useState } from "react";
import { Button } from "antd";

const ButtonGroup = ({
  title,
  type,
  size,
  isBlock,
  isDisable,
  isDanger,
  icon,
  isShape,
  className,
  onClick,
  onSubmit,
}) => {
  return (
    <div>
      <Button
        className={className ? className : ""}
        size={size ? size : "small"}
        type={type ? type : "text"}
        block={isBlock ? isBlock : false}
        disabled={isDisable ? isDisable : false}
        danger={isDanger ? isDanger : false}
        icon={icon ? icon : ""}
        shape={isShape || isShape !== "" ? isShape : "default"}
        onClick={onClick ? onClick : ""}
        onSubmit={onSubmit ? onSubmit : ""}
      >
        {title ? title : "Button"}
      </Button>
    </div>
  );
};

export default ButtonGroup;
