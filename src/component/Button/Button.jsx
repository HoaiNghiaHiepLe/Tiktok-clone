import { forwardRef } from "react";
import PropTypes from "prop-types";
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
      suffixIcon,
      badge,
      iconbtn,
      primary,
      outline,
      text,
      rounded,
      disable,
      small,
      large,
      $separate,
      $regular,
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
      <StyledComponent
        iconbtn={iconbtn}
        ref={ref}
        className={className}
        primary={primary}
        outline={outline}
        text={text}
        rounded={rounded}
        disable={disable}
        small={small}
        large={large}
        $separate={$separate}
        $regular={$regular}
        {...props}
      >
        {prefixIcon && <span className="icon"> {prefixIcon}</span>}
        <span className="title">{children}</span>
        {suffixIcon && <span className="icon"> {prefixIcon}</span>}
        {badge && <span className="badge"> {badge}</span>}
      </StyledComponent>
    );
  }
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  prefixIcon: PropTypes.node,
  suffixIcon: PropTypes.node,
  badge: PropTypes.node,
  iconbtn: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  disable: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  $separate: PropTypes.bool,
  $regularText: PropTypes.bool,
};

export default Button;
