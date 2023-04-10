/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';


class Home extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */
    render() {
        return (
            <section id="home">
                <div className="content">
                    <div className='products'>
                        {this.props.results.map((result, index) => {
                            return <div key={index}>
                                <div className='image-wrapper'>
                                    <img src={result.picture} className="image" />
                                </div>
                                <div className='p-name'>{result.name}</div>
                                <div className='p-price'>{result.price}</div>
                                <div className='p-about'>{result.about}</div>
                                <div>
                                    <button>Add to Bag</button>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        );
    }


}

// Export out the React Component
export default Home;