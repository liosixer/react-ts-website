import PropTypes from "prop-types";
import React from "react";
import "./Base.scss";

class BaseButton extends React.Component {
    static propTypes = {
        foo: PropTypes.number,
        params: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }
    static defaultProps = {
        foo: 42
    }

    render() {
        return <div className="Button">{() => BaseButton.defaultProps.foo}</div>
    }
}

export default BaseButton;