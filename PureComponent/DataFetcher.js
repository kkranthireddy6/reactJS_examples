import React from "react";

class DataFetcher extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = { 
        data: null
       };
  }

   componentDidMount(){
    this.fetchData();
   }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.propValue !== prevProps.propValue) {
      // Only fetch data when propValue changes
      this.fetchData();
    }
  }

  fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?id=${this.props.propValue}`);
    const result = await response.json();
    this.setState({ data: result[0].title });
  };

  handleData = event => {
    this.setState({propValue: event.target.value})
  }

  render() {
    return (
      <div>
        <h1>Data: {this.state.data ? this.state.data : 'Loading...'}</h1>
      </div>
    );
  }
}

export default DataFetcher;
