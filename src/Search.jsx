import React, { Component } from 'react';
import LinearParent from './LinearParent';
import BinaryParent from './BinaryParent';

import './Styles.css';

class Search extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <br/>
                        <h1 className="mainHeading">Linear Search</h1>
                        <br/>
                        <LinearParent/>
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                    <div className="col-12">
                        <br/>
                        <h1 className="mainHeading">Binary Search</h1>
                        <br/>
                        <BinaryParent/>
                    </div>
                </div>
           
            </div>
        )
    }
}

export default Search;