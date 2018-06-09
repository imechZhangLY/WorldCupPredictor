const app = getApp()

Page({
	data: {
		match: null,
		date: '',
		path: '../../images/a_',
		flags: [],
		mostPopularPrediction: []
	},
	onReady: function() {
		var currentMatch = app.globalData.currentMatch
		var day = currentMatch.time.day
		var hour = currentMatch.time.hour
		var temp1 = day.split('-')
		var tempdate = temp1[0] + '月' + temp1[1] + '日' + hour
		console.log(tempdate)
		this.setData({
			match: app.globalData.currentMatch,
			date: tempdate,
			flags: [app.globalData.flags[currentMatch.name[0]], app.globalData.flags[currentMatch.name[1]]],
			mostPopularPrediction: currentMatch.mostPopularPrediction
		})
	}
})