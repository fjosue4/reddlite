import React from "react";

function Trending () {

    let backgroundImage1 = "https://i.stack.imgur.com/sXK51.png";
    let backgroundImage2 = "https://i.stack.imgur.com/sXK51.png";
    let backgroundImage3 = "https://i.stack.imgur.com/sXK51.png";
    let backgroundImage4 = "https://i.stack.imgur.com/sXK51.png";

    let trend1;
    let trend2;
    let trend3;
    let trend4;

    return (
        <div className="trending-section">
            <h4>Trending</h4>
            <div className="trendings">
                <div className="trending" style={{ "backgroundImage": `url(${backgroundImage1})`}}>
                    <h3>Title 1</h3>
                    <p>Small description of trending</p>
                    <div className="trend">
                    <img src={trend1}/>
                    <a href=""><span>r/trend</span></a>
                    </div>
                </div>
                
                <div className="trending" style={{ "backgroundImage": `url(${backgroundImage2})`}}>
                    <h3>Title 2</h3>
                    <p>Small description of trending</p>
                    <div className="trend">
                    <img src={trend2}/>
                    <a href=""><span>r/trend</span></a>
                    </div>
                </div>

                <div className="trending" style={{ "backgroundImage": `url(${backgroundImage3})`}}>
                    <h3>Title 3</h3>
                    <p>Small description of trending</p>
                    <div className="trend">
                    <img src={trend3}/>
                    <a href=""><span>r/trend</span></a>
                    </div>
                </div>

                <div className="trending" style={{ "backgroundImage": `url(${backgroundImage4})`}}>
                    <h3>Title 4</h3>
                    <p>Small description of trending</p>
                    <div className="trend">
                    <img src={trend4}/>
                    <a href=""><span>r/trend</span></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Trending;