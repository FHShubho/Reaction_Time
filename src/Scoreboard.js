//import scores from './Home'

const Scoreboard = () => {
    const scores = localStorage.getItem('score');
    console.log(scores);

    const renderTable = (num, recTime) => {
        return (
            <tr>
                <td> {num} </td>
                <td> {recTime} </td>
            </tr>
        )
    }

    return (
        <div className="scorescreen">
            <table>
                <tbody>
                    <td id="score_card">
                        <tr>
                            <th>Attempt</th>
                            <th>Reaction Time</th>
                        </tr>
                        {() => {
                            for(var i=scores.length; i >= 0; i--) renderTable(i, scores[i]);
                        }}
                            
                        {/* <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td> */}
                        
                    </td>
                </tbody>
            </table>
        </div>  
    );
}
 
export default Scoreboard;