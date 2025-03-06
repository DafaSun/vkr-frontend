import React, {ReactElement} from 'react';
import {BasicButton} from "../BasicButton/BasicButton";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    text?: string
    onClick?: () => void;
}

export const Button1: React.FC<IButtonProps> = (props) => {

    const {text, onClick=()=>{}} = props

    return (
        <BasicButton onClick={onClick} text={text} this_style={1}/>
    );
};
