import React from 'react'

class Cuaca extends React.Component {
    render () {
        return (
            <div>
                { this.props.city && this.props.country && 
                    <p className='weather__key'>
                        Location : 
                        <span className='weather__value'>
                            {this.props.city} , {this.props.country} 
                        </span>
                    </p> 
                }
                { this.props.temprature && this.props.humidity && 
                    <p className='weather__key'>
                        Temparature : 
                        <span className='weather__value'>
                            {this.props.temprature} &deg;C
                        </span> 
                    </p>
                }
                { this.props.description && 
                    <p className='weather__key'>
                        Description : 
                        <span className='weather__value'>
                            {this.props.description}
                        </span>
                    </p>
                }
                { this.props.error &&
                    <p className='weather__key'>{this.props.error}</p>
                }
            </div>
        );
    }
}

export default Cuaca