import React from 'react'

class AppTitle extends  React.Component {
    componentDidMount() {
        document.title = "New Title"
    }

    render() {
        return (
            <b> Hello from App Title </b>
        )
    }
}
export default AppTitle