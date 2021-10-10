import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    return (
        <div className="App main-background">
            <header>
                <nav className="navbar navbar-light bg-light ">
                    <a className="navbar-brand ms-2" href="#">
                        <img src="/logo.svg" width="30" height="30" alt="" />
                    </a>
                </nav>
            </header>
            <main className="container">
                <header className="text-center py-5">
                        <h1>Wallboard</h1>
                        <h3>Online tools</h3>
                </header>
                <div className="row m-1 mb-5 justify-content-center gap-3 flex-wrap">
                    <section className="card px-sm-2 p-2 d-flex justify-content-center col-lg-4 col-sm-1">
                        <h5 className="card-title mx-1 mt-2">Try Kinetic Energy Now!</h5>
                        <p className="card-text mx-1">All your todos in one place and more!</p>
                        <Button text="Try now"  href="https://wallboard-ke.netlify.app/"/>
                    </section>
                </div>
                <div className="row m-1">
                    <div className="col-lg-5">
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-header">
                            A moment of inspiration
                        </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>“Invention is the most important product of man's creative brain. The ultimate purpose is the complete mastery of mind over the material world, the harnessing of human nature to human needs.”</p>
                                <footer className="blockquote-footer">Nikola Telsa <cite title="Source Title">My Inventions</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
