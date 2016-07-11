import React from 'react'

var HomeView = React.createClass({
	render: function() {
		return (

			<div class="homeView">
				<a href='#messages/read'>View inbox</a>
				<a href='#messages/write'>Compose message</a>
			</div>
			)
	}
})

export default HomeView