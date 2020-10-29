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
                this.setState({
                    data: 
                     [result[i].name],
                  })
              }
          })
          .catch((error) => {
              console.error(error)
          })
      }

    render() {
        const {data} = this.state;

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        })

        return <ul>{result}</ul>
    }
}

export default Repositories;