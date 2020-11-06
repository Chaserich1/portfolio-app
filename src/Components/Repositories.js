import React, { Component } from 'react';
import "../Tabs.css";

class Repositories extends Component {
    state = {
        data: [],        
    }

    componentDidMount() {
        const url =
          'https://api.github.com/users/chaserich1/repos'
    
        fetch(url)
          .then((result) => result.json())
          .then((result) => {
              console.log(result);
              for(var i = 0; i < result.length; i++){
                var newRepo = {
                    name: result[i].name, 
                    language: result[i].language,
                    description: result[i].description,
                    url: result[i].clone_url,
                }
                                
                this.setState( prevState => ({
                    data: [...prevState.data, newRepo],
                }))
              }
          })
          .catch((error) => {
              console.error(error)
          })
      }

    render() {
        const {data} = this.state;
        //console.log(data);

        return (
            <div className="col">
                <h1>GitHub Repositories</h1>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Description</th>
                        <th>URL</th>
                    </tr>
                    {data.map(data =>                         
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.language}</td>
                            <td>{data.description}</td>
                            <td>{data.url}</td>
                        </tr>
                    )}
                </table>
            </div>
        )
        
            
        /*const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        });

        const newResult = result.map((entry, index) => {
            return <table id="simple-table"><tbody key={index}>{entry}</tbody></table>
        });

        return <div>{newResult}</div>
        
        //return <ul>{result}</ul>*/
    }
}

export default Repositories;