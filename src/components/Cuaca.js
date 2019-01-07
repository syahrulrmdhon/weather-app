import React from 'react'

class Cuaca extends React.Component {
    render () {
        return (
            <div>
                <table className="table table-dark">
                    <thead>
                    { this.props.cityName && 
                            <tr>
                                <th scope="col">{this.props.cityName.name}</th>
                                <th scope="col">Suhu</th>
                                <th scope="col">Perbedaan</th>
                            </tr>
                    }
                    </thead>
                    <tbody>
                    { this.props.main.map(item =>(
                            <tr key={item.dt}>
                                <td>{item.dt_txt}</td>
                                <td>{item.main.temp}&#8451;</td>
                                <td>{item.main.temp_kf}</td>
                            </tr>
                    ))}
                    </tbody>
                </table>
                { this.props.error &&
                    <p className='weather__key'>{this.props.error}</p>
                }
            </div>
        );
    }
}

export default Cuaca