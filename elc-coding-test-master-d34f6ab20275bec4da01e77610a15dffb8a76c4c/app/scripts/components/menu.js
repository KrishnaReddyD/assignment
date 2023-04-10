/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React from 'react';
import Home from './home';

class Menu extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor() {
        super();
        this.state = {
            showingSearch: false,
            results: []
        };
    }

    /**
     * Shows or hides the search container
     * @memberof Menu
     * @param e [Object] - the event from a click handler
     */
    showSearchContainer(e) {
        e.preventDefault();
        this.setState({
            showingSearch: !this.state.showingSearch
        });
    }

    /**
     * Calls upon search change
     * @memberof Menu
     * @param e [Object] - the event from a text change handler
     */
    onSearch(e) {
        const searchQuery = e.target.value;
        // Start Here
        fetch(`http://localhost:3035?query=${searchQuery}`)
            .then(data => {
                this.setState({
                    results: data
                });
            })
            .catch(err => {
                console.error('err in fetching the data', err);
            });
        // ...
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
        return (
            <React.Fragment>
                <header className="menu">
                    <div className="menu-container">
                        <div className="menu-holder">
                            <h1>ELC</h1>
                            <nav>
                                <a href="#" className="nav-item">HOLIDAY</a>
                                <a href="#" className="nav-item">WHAT'S NEW</a>
                                <a href="#" className="nav-item">PRODUCTS</a>
                                <a href="#" className="nav-item">BESTSELLERS</a>
                                <a href="#" className="nav-item">GOODBYES</a>
                                <a href="#" className="nav-item">STORES</a>
                                <a href="#" className="nav-item">INSPIRATION</a>

                                <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                                    <i className="material-icons search">search</i>
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
                        <input type="text" onChange={(e) => this.onSearch(e)} />
                        <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                            <i className="material-icons close">close</i>
                        </a>
                    </div>
                </header>
                <Home results={this.state.results} />
            </React.Fragment>
        );
    }


}

// Export out the React Component
export default Menu;