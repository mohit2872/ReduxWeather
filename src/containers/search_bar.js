simport React from 'react'
import { connect }  from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      term: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event){
    event.preventDefault(); // dont know the use so search it
    this.props.fetchWeather(this.state.term);
    this.setState({term: ""})
  }

  onInputChange(event){
    this.setState({term: event.target.value})
  }

  render(){
    return(
      <div>
        <form className="input-group" action="" onSubmit={this.onFormSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Search for the City"
            value={this.state.term}
            onChange={this.onInputChange}/>
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="submit">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)
