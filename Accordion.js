import React from 'react';
import './Accordion.css'

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    }

    state = {
        clickedSection: null
    }

    handleButtonClick = (index) => {
        this.setState({
            clickedSection: index
        })
    }

    renderList = (section, index, clickedSection) => {
        return (
            <li
                key={index}
                className="list-item"
            >
                <button
                    onClick={ () => this.handleButtonClick(index)}
                >{section.title}</button>
                {clickedSection === index && <p>{section.content}</p>}
            </li>
        )
    }

    render() {
        return (
            <ul className="list-container">
                {this.props.sections.map( (section, index) => (
                    this.renderList(section, index, this.state.clickedSection)
                ))}
                
            </ul>
        )
    }
}

export default Accordion;