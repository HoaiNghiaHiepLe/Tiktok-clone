import { forwardRef } from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

const Button = forwardRef(
  (
    {
      to,
      href,
      onClick,
      children,
      className,
      prefixIcon,
      sufixIcon,
      badge,
      ...restProps
    },
    ref
  ) => {
    const ComponentType = to ? Link : href ? "a" : "button";
    const StyledComponent =
      ComponentType === "button"
        ? S.Button
        : ComponentType === Link
        ? S.LinkButton
        : S.AButton;
    const props = { onClick, ...restProps };

    if (props.disable) {
      Object.keys(props).forEach((key) => {
        // console.log(
        //   key,
        //   key.startsWith("on") && typeof props[key] === "function"
        // );
        if (key.startsWith("on") && typeof props[key] === "function") {
          delete props[key];
        }
      });
    }

    if (to) {
      props.to = to;
    } else if (href) {
      props.href = href;
    }
    return (
      <StyledComponent ref={ref} className={className} {...props}>
        {prefixIcon && <span className="icon"> {prefixIcon}</span>}
        <span className="title">{children}</span>
        {sufixIcon && <span className="icon"> {prefixIcon}</span>}
        {badge && <span className="badge"> {badge}</span>}
      </StyledComponent>
    );
  }
);

export default Button;
