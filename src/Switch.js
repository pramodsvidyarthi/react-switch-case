import React from "react";
import PropTypes from "prop-types";

function Switch({ children, ...props }) {
  let found = null;
  let element;

  React.Children.forEach(children, child => {
    if (child.type.name !== "Case") {
      throw new Error(
        "only components of type Case should be used inside Switch Component"
      );
    }
    if (!found && React.isValidElement(child)) {
      element = child;
      found = child.props.when;
    }
  });

  return element;
  // return React.cloneElement(element);
}

function Case({
  render,
  component,
  when = true,
  children: childrenProp,
  ...restProps
}) {
  if (when) {
    let children =
      typeof childrenProp === "function"
        ? childrenProp(restProps)
        : childrenProp;
    if (children === undefined) {
      children = null;
    }
    if (children) return children;
    if (component) return React.createElement(component, restProps);
    if (render) return render(restProps);
  }
  return null;
}

Case.propTypes = {
  when: PropTypes.bool,
  render: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
};

export { Switch, Case };
