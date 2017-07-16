import React from 'react';
import Popup from 'react-popup';

export default class Prompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.person.name,
            description: this.props.person.description,
            imageSuffix: this.props.person.imageSuffix,
            wikiSuffix: this.props.person.wikiSuffix
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeImageSuffix = this.handleChangeImageSuffix.bind(this);
        this.handleChangeWikiSuffix = this.handleChangeWikiSuffix.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }
    handleChangeDescription(event) {
        this.setState({ description: event.target.value });
    }
    handleChangeImageSuffix(event) {
        this.setState({ description: event.target.value });
    }
    handleChangeWikiSuffix(event) {
        this.setState({ description: event.target.value });
    }

    handleSubmit(event) {
        this.props.person.name = this.state.name;
        this.props.person.description = this.state.description;
        event.preventDefault();
    }

    render() {
        var descriptionStyles = {
			height: '50px'
		};
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <label>Name:</label>
                    </div>
                    <div>
                        <input type="text" value={this.state.name} onChange={this.handleChangeName} />
                    </div>
                </div>

                <div>
                    <div>
                        <label>Description:</label>
                    </div>
                    <div>
                        <textarea type="text" value={this.state.description} 
                        onChange={this.handleChangeDescription} ></textarea>
                    </div>
                </div>

                <div>
                    <div>
                        <label>Image Suffix:</label>
                    </div>
                    <div>
                        <input type="text" value={this.state.imageSuffix} onChange={this.handleChangeImageSuffix} />
                    </div>
                </div>

                <div>
                    <div>
                        <label> Wiki Suffix:</label>
                    </div>
                    <div>
                        <input type="text" value={this.state.wikiSuffix} onChange={this.handleChangeWikiSuffix} />
                    </div>
                </div>

                <br />
                <div>
                    <input type="submit" value="Submit" />
                </div>

            </form>
        );
    }
}

