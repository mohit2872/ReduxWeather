import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import _ from 'lodash'

function average (data) {
  return _.round(_.sum(data)/data.length);
}

export default class Chart extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <Sparklines height={120} width={180} data={this.props.data}>
          <SparklinesLine color={this.props.color}/>
          <SparklinesReferenceLine type="mean"/>
        </Sparklines>
        <div>{average(this.props.data)} {this.props.units}</div>
      </div>
    )
  }
}
