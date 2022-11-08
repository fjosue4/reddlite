import React from "react";
import './Trending.css';

function Trending () {

    let backgroundImage1 = "https://i.stack.imgur.com/sXK51.png";
    let backgroundImage2 = "https://i.stack.imgur.com/sXK51.png";
    let backgroundImage3 = "https://i.stack.imgur.com/sXK51.png";
    let backgroundImage4 = "https://i.stack.imgur.com/sXK51.png";

    let trend1 = "https://img.freepik.com/free-photo/dirty-pattern-paint-room-block_1203-5709.jpg";
    let trend2 = "https://img.freepik.com/free-photo/dirty-pattern-paint-room-block_1203-5709.jpg";
    let trend3 = "https://img.freepik.com/free-photo/dirty-pattern-paint-room-block_1203-5709.jpg";
    let trend4 = "https://img.freepik.com/free-photo/dirty-pattern-paint-room-block_1203-5709.jpg";

    return (
        <div className="trending-section">
             <div className="trending-title">
             <p>Trending</p>
             </div>
             
            <div className="trendings">
                <div className="trending" style={{ "backgroundImage": `url(${backgroundImage1})`}}>
                    <h3>Article Title</h3>
                    <p>Article brief in two lines second line</p>
                    <div className="trend">
                    <img src={trend1} alt="trendicon"/>
                    <a href=""><span>r/trend</span></a>
                    </div>
                </div>
                
                <div className="trending" style={{ "backgroundImage": `url(${backgroundImage2})`}}>
                    <h3>Title 2</h3>
                    <p>Small description of trending</p>
                    <div className="trend">
                    <img src={trend2} alt="trendicon"/>
                    <a href=""><span>r/trend</span></a>
                    </div>
                </div>

                <div className="trending" style={{ "backgroundImage": `url(${backgroundImage3})`}}>
                    <h3>Title 3</h3>
                    <p>Small description of trending</p>
                    <div className="trend">
                    <img src={trend3} alt="trendicon"/>
                    <a href=""><span>r/trend</span></a>
                    </div>
                </div>

                <div className="trending" style={{ "backgroundImage": `url(${backgroundImage4})`}}>
                    <h3>Title 4</h3>
                    <p>Small description of trending</p>
                    <div className="trend">
                    <img src={trend4} alt="trendicon"/>
                    <a href=""><span>r/trend</span></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Trending;