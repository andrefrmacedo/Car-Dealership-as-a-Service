var React = require('react');
var CarTag = require('./carTag.jsx');
var DeleteModal = require('./deleteModal.jsx');

var CarProfile = React.createClass({
	
	getInitialState: function() {
		return {
			isDeleting: false 
		};
	},

	handleClick: function() {
		this.setState({
			isDeleting: !this.state.isDeleting
		})
	},

	render: function() {
		return (
			<div>
				<h1 className="title">{this.props.car.name}</h1>
				
					{this.props.fromSearch ? 
						<div className="control">
							<button className="button" onClick={this.props.changePage.bind(null, 'list')}>Back</button>
						</div>
					:
						<div className="control is-grouped">
							<button className="button" onClick={this.props.changePage.bind(null, 'edit')}>Edit Car</button>
							<button className="button" onClick={this.props.changePage.bind(null, 'list')}>Back</button>
							<button className="button is-danger" onClick={this.handleClick} >Delete Car</button>
						</div>
					}
					
				<figure className="image is-4by3">
  					<img src={this.props.car.img} />
				</figure>
				<p><strong>Brand</strong><span className="profile-info"> {this.props.car.brand}</span></p>
				<p><strong>Model</strong><span className="profile-info"> {this.props.car.model}</span></p>
				<p><strong>License</strong><span className="profile-info"> {this.props.car.license}</span></p>
				<p><strong>Color</strong><span className="profile-info"> {this.props.car.color}</span></p>
				<p><strong>Mileage</strong><span className="profile-info"> {this.props.car.mileage}</span></p>
				<p><strong>Fuel</strong><span className="profile-info"> {this.props.car.fuel}</span></p>
				<p><strong>Year</strong><span className="profile-info"> {this.props.car.year}</span></p>
				<p><strong>Location</strong><span className="profile-info"> {this.props.car.location}</span></p>
				<p><strong>Price</strong><span className="profile-info"> {this.props.car.price}</span></p>
				<p><strong>Dealerships</strong>
					{this.props.car.dealerships.map(function(dealership){
						return 	<CarTag key={dealership.id} dealership={dealership}/>
					})}
				</p>
				{this.props.fromSearch ? 
					<div />
				:
					<DeleteModal isDeleting={this.state.isDeleting} handleClick={this.handleClick} carID={this.props.car.id} changePage={this.props.changePage} params={this.props.params} />
				}
			</div>
		);
	}

});

module.exports = CarProfile;