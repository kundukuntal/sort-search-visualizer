import React, { Component } from "react";
import { Routes,Route} from "react-router-dom";
import Search from "./Search";
import Home from "./Home";
import Sort from "./Sort";

class Main extends Component {
    render() {
        const HomePage=()=>{
            return(
                <Home/>
            )
        }
        return (
                <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                    <Route path="/search" element={<Search/>}/>
                    <Route path="/sort" element={<Sort/>}/>
                
                </Routes>

        )
    }
}

export default Main;