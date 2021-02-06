import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default function Button(props) {
    // menerima array dari property className itu sendiri
    const className = [props.className];
    if(props.isPrimary) className.push("btn-primary"); // misal props itu menerima isPrimary maka di push btn-primary
    if(props.isLarge) className.push("btn-lg");
    if(props.isSmall) className.push("btn-sm");
    if(props.isBlock) className.push("btn-block");
    if(props.hasShadow) className.push("btn-shadow");
    
    // handle onClick
    const onClick = () => {
        if(props.onClick) props.onClick() //cek apakah onClick tersedia
    };

    // kondisi saat disabled dan Loading
    if(props.isDisabled || props.isLoading) {
        if(props.isDisabled) className.push("disabled")
        return <span className={className.join(" ")} style={props.style}>
            {
                props.isLoading ? ( <>
                    <span className="spinner-border spinner-border-sm mx-5"></span>
                    <span className="sr-only">Loading...</span>
                </> ) : (
                    props.children
                )
            }
        </span>
    };

    // cek rendering dengan type link ke external dan internal aplikasinya
    if(props.type === "link") {
        if(props.isExternal) {
            return (
                <a href={props.href} className={className.join(" ")} style={props.style} target={props.target === "_blank" ? "_blank" : undefined} rel={props.target === "_blank" ? "noopener noreferrer" : undefined}>
                    {props.children}
                </a>
            )
        } else {
            return (
                <Link to={props.href} className={className.join(" ")} style={props.style} onClick={onClick}>
                    {props.children}
                </Link>
            )
        }
    };

    return (
        <button className={className.join(" ")} style={props.style} onClick={onClick}>
            {props.children}
        </button>
    )
}

Button.propTypes = {
    type: propTypes.oneOf(["button", "Link"]), //Hanya Terima salah satu dari button atau Link
    onClick: propTypes.func,
    target: propTypes.string,
    href: propTypes.string,
    className: propTypes.string,
    isDisabled: propTypes.bool,
    isPrimary: propTypes.bool,
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isBlock: propTypes.bool,
    isExternal: propTypes.bool,
    hasShadow: propTypes.bool
};
