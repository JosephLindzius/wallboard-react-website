import React from "react";


interface IButton {
    href: string
    text: string
}
export function Button (props: IButton){
    return(
        <a href={props.href} className="btn btn-primary mx-1 mb-2">{props.text}</a>
    )


}
