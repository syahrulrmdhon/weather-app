import React from 'react'

class Form extends React.Component {

    render () {
        return (
            <form onSubmit = {this.props.getCuaca}>
                <select className="form-control" ref="city" onChange={this.props.handleChange}>
                    <option value={1642911}>Jakarta, ID</option>
                    <option value={1880252}>Singapore, SG</option>
                    <option value={1609350}>Bangkok, TH</option>
                    <option value={1733045}>Kuala Lumpur, MY</option>
                </select>
                <button>Search</button>
            </form>
        );
    }
}

export default Form