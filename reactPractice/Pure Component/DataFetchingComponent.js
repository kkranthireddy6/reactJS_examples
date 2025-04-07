import React, { PureComponent } from 'react';
import axios from 'axios';

class DataFetchingComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoading: true,
            error: null,
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')  
            .then((response) => {
                this.setState({ data: response.data, isLoading: false });
            })
            .catch((error) => {
                this.setState({ error, isLoading: false });
            });
    }

    componentDidUpdate(prevProps, prevState) {
        // Check if the 'count' state has changed
        if (prevState.data !== this.state.data) {
          console.log('The count has changed:', this.state.data);
        }
      }

    render() {
        const { data, isLoading, error } = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <div>
                <h1>Fetched Data</h1>
                <ul>
                    {data && data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default DataFetchingComponent;
