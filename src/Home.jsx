import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Styles.css';
import './home.css';
import search from './search.png'
import sort from './sort.png'

class Home extends Component {
    render() {
        return (
           
            <div className="container" style={{borderLeft:'5px black',borderRight:'5px black'}}>
            <div className="row">
            <div className="col-12">
                <br/>
                <h1 style={{color:'antiquewhite'}}><center>Sorting & Searching Visualizer</center></h1>
                <br/>
            </div>
            </div>
            <div className="row">
               
                <div className="col">
                <center>
                <div className="card box " style={{width: '26rem', height:'30rem'}}>
                <img className="card-img-top" style={{height:'155px'}} src={sort} alt="Sort image"/>
                <div className="card-body">
                <br/>
                    <h3 className="card-title" style={{fontFamily:'Georgia'}}>Sorting Visualizer</h3><br/>
                    <p style={{fontFamily: 'Georgia'}} className="card-text">Visualization of Bubble Sort, Selection Sort, Insertion Sort, Merge Sort and Quick Sort on randomly chosen data values.</p>
                    <center><br/>
                    <NavLink to='/sort'  className="button button4">Sorting Visualizations</NavLink>
                    </center>
                </div>
                </div>
                </center>
                </div>
                <div className="col">
                <center>
                <div className="card box" style={{width: '26rem',height:'30rem'}}>
                <img className="card-img-top" style={{height:'122px'}} src={search} alt="Searching image"/>
                <div className="card-body">
                <br/>
                    <h3 className="card-title" style={{fontFamily:'Georgia'}}><br/>Searching Visualizer</h3><br/>
                    <p style={{fontFamily: 'Georgia'}} className="card-text">Visualization of Linear Search and Binary Search on an array of integers meant for understanding them better.</p>
                    <center><br/>
                    <NavLink to='/search'  className="button button4">Searching Visualizations</NavLink>
                    </center>
                </div>
                </div>
                </center>
                </div>
                </div>
            
                </div>
                

        )
    }
}

export default Home;
