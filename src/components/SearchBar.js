import React from "react";
//client-id :-f02cf43439643698a41ea27d6ab6f8c6f23e5c5bda0b044a102352a5a08cc554
////secret key :-44c940b74bb2da6b9e328083abe95233f3e2ea002a2c59140ca89cb00edda829

export default class SearchBar extends React.Component {
	state = {
		term: ""
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearchSubmit(this.state.term);
	};
	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.handleSubmit}>
					<div className="field">
						<label htmlFor="search">Image search</label>
						<input
							type="text"
							placeholder="Image search"
							id="search"
							value={this.state.term}
							onChange={e =>
								this.setState({ term: e.target.value })
							}
							autofocus
						/>
					</div>
				</form>
			</div>
		);
	}
}
