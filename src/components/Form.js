import React from 'react'

class Form extends React.Component {

    render () {
        return (
            <form onSubmit = {this.props.getCuaca}>
                <input className='in' name='city' type='text' placeholder='Kota'/>
                <input className='in' name='country' type='text' placeholder='Negara'/>
                <button>Search</button>
            </form>
        );
    }
}

export default Form