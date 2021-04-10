const Scoreboard = () => {
    const scores = localStorage.getItem('score');
    const index = [];

    if(scores != null) {
        const items = scores.split(',');

        for(let i = items.length; i >0; i--) {
            index.push(i);
        }
        console.log(scores.length);

        return (
            <div className="scorescreen">
                <div id="wrap">
                    <div id="left_col">
                        <h2>Attempt</h2> <br/>
                        {index.map((item, key) => {
                            return <span key={key}>{item}<br/></span>
                        })}
                    </div>
                    <div id="right_col">
                        <h2>Reaction Time</h2> <br/>
                        {items.map((item, key) => {
                            return <span key={key}>{item}<br/></span>
                        })}
                    </div>
                </div>
            </div>  
        );
    }

    else {
        return (
            <div className="scorescreen">
                <div id="wrap">
                    <div id="left_col">
                        <h2>Attempt</h2> <br/>
                    </div>
                    <div id="right_col">
                        <h2>Reaction Time</h2> <br/>
                    </div>
                </div>
            </div>  
        );
    }
}
 
export default Scoreboard;