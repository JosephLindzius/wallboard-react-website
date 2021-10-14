import React from "react";
import Carousel from "react-multi-carousel";

interface IQuote {
    content: string
    author: string
}
export function Card(quote: IQuote) {

return (
    <div className="card">
        <div className="card-header text-center">
            Random quotes of inspiration
        </div>
        <div className="card-body px-5">
            <blockquote className="blockquote mb-0">
                <p>“{quote.content}”</p>
                <footer className="blockquote-footer">{quote.author}</footer>
            </blockquote>
        </div>

    </div>
)
}
