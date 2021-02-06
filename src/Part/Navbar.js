import React from 'react';
import Button from "../Element/Button";
import  {connect} from  'react-redux';

function Navbar(props) {
    const getNavLinkClass = (path) => {
        return props.location === path ? " active" : "";
    };

    if(props.isCentered)
        return (
            <header className="spacing-sm">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Button className="brand-text-icon mx-auto" href="" type="link">
                            DW<span className="text-gray-900"> Bike</span>
                        </Button>
                    </nav>
                </div>
            </header>
        );

    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Button className="brand-text-icon" href="/" type="link">
                        DW<span className="text-gray-900"> Bike</span>
                    </Button>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item${getNavLinkClass("/order")}`}>
                                <Button isPrimary className="btn btn-care" type="link" href="/order">
                                    My Order
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

const mapStateToProps = state =>{
    return{
        numberCart:state.data.numberCart
    }
}

export default connect(mapStateToProps, null) (Navbar)
