import React, {useState, useEffect} from 'react';
import './App.css';
import {Button} from "./components/Button";
import logo from "./assets/logo.svg"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {getQuote} from "./services/quote-service";

function App() {

    const [quote, setQuote] = useState({
        author: "Plato",
        authorSlug: "plato",
        content: "The man who makes everything that leads to happiness depends upon himself, and not upon other men, has adopted the very best plan for living happily. This is the man of moderation, the man of manly character and of wisdom.",
        dateAdded: "2021-03-28",
        dateModified: "2021-03-28",
        length: 222,
        tags: ['wisdom'],
        _id: "PdcCF7bmZfA"})

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    useEffect(() => {

        getQuote()
            .then(item => {

                    setQuote(item)
                console.log(item)
                console.log(quote)
            })
    }, [])


    return (
        <div className="App main-background">
            <header>
                <nav className="navbar navbar-light bg-light ">
                    <a className="navbar-brand ms-2" href="#">
                        <img src={logo} width="30" height="30" alt="" />
                    </a>
                </nav>
            </header>
            <main className="container">
                <header className="text-center py-5">
                        <h1>Wallboard</h1>
                        <h3>Online tools</h3>
                </header>
                <div className="row m-1 mb-5 justify-content-center gap-3 flex-wrap">
                    <section className="card px-sm-2 p-2 d-flex justify-content-center col-lg-4">
                        <h5 className="card-title mx-1 mt-2">Try Kinetic Energy Now!</h5>
                        <p className="card-text mx-1">All your todos in one place and more!</p>
                        <Button text="Try now"  href="https://wallboard-ke.netlify.app/"/>
                    </section>
                </div>
                <Carousel className="row-fluid card-carousel pb-5" responsive={responsive} arrows={true}>
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
                    <div className="card pb-5">
                        <div className="card-header text-center">
                            A moment of inspiration
                        </div>
                        <div className="card-body px-5">
                            <blockquote className="blockquote mb-0">
                                <p>“Invention is the most important product of man's creative brain. The ultimate purpose is the complete mastery of mind over the material world, the harnessing of human nature to human needs.”</p>
                                <footer className="blockquote-footer">Nikola Telsa <cite title="Source Title">My Inventions</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="card bg-light px-5" id="qotd_t">
                        <div className="card-header text-center">
                            <p>Quote of the Day</p>
                        </div>
                    </div>
                </Carousel>
            </main>

        </div>
    );
}

export default App;
