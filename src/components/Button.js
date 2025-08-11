import React from 'react'
import '../styles/Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline', 'btn--secondary'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    path,
    isExternal
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0];

    // Lógica para verificar se o link é externo
    if (isExternal) {
        return (
            <a 
                href={path} 
                className='btn-mobile' 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <button
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}
                >
                    {children}
                </button>
            </a>
        );
    }

    // Código original para links internos
    return (
        <Link to={path} className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};

export default Button;