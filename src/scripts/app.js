import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import HomeView from './HomeView'
import InboxView from './InboxView'
import ComposeView from './ComposeView'
import {MsgCollection} from './models'

const app = function() {


	const MsgRouter = Backbone.Router.extend({
		routes: {
			"messages/read": "showMsgs",
			"messages/write": "showMsgEditor",
			"home": "showHome",
			"*catchall": "redirect"
		},

		redirect: function() {
			location.hash = "home"
		},

		showHome: function() {
			ReactDOM.render(<HomeView />, document.querySelector('.container'))
		},

		showMsgs: function() {
			var coll = new MsgCollection()
			coll.fetch()
			ReactDOM.render(<InboxView coll={coll} />, document.querySelector('.container'))
		},

		showMsgEditor: function() {
			ReactDOM.render(<ComposeView />, document.querySelector('.container'))
		},

		initialize: function() {
			Backbone.history.start()
		}
	})

	new MsgRouter()
}

app()