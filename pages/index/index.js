//index.js
//获取应用实例
var occupation = require('../../data/occupation.js')
var attribute = require('../../data/attribute.js')
var app = getApp()
Page({
    data: {
        userInfo: {},
        effect_ratio: 0,
        round: 1,
        details: [],
        scrollTop: 0
    },
    //事件处理函数
    onLoad: function() {
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    },
    onReachBottom: function() {

    },
    onScroll: function(event) {
        console.log(event);
    },
    reset: function() {
        this.setData({
            round: 1,
            effect_ratio: 0,
            details: []
        });
    },
    getInfo: function() {
        var _this = this;
        switch (this.data.round) {
            case 1:
                // Get a random occupation
                wx.request({
                    url: 'https://skycity.joinp8.com/philosopher/getOccupation',
                    // data: {
                    //     title: e.detail.value.title,
                    //     details: e.detail.value.details,
                    //     uid: 1
                    // },
                    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                    //header: { 'content-type': 'application/x-www-form-urlencoded' }, // 设置请求的 header
                    success: function(res) {

                        _this.data.details.push({
                            name: 'div',
                            attrs: {
                                style: '',
                                class: 'name'
                            },
                            children: [{
                                type: 'text',
                                text: res.data[0].name
                            }]
                        })

                        _this.data.details.push({
                            name: 'div',
                            attrs: {
                                style: '',
                                class: 'details'
                            },
                            children: [{
                                type: 'text',
                                text: res.data[0].details
                            }]
                        })

                        _this.setData({
                            details: _this.data.details,
                            effect_ratio: res.data[0].effect_ratio
                        })
                    },
                    fail: function(res) {
                        wx.showToast({
                            title: '错误',
                            duration: 2000
                        });
                    },
                    complete: function(res) {
                        // complete
                    }
                })
                break
            case 2:
                // Depend on effect_ratio, get a random attribute
                wx.request({
                    url: 'https://skycity.joinp8.com/philosopher/getAttribute?effect_ratio=' + this.data.effect_ratio,
                    // data: {
                    //     title: e.detail.value.title,
                    //     details: e.detail.value.details,
                    //     uid: 1
                    // },
                    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                    //header: { 'content-type': 'application/x-www-form-urlencoded' }, // 设置请求的 header
                    success: function(res) {

                        _this.data.details.push({
                            name: 'div',
                            attrs: {
                                style: '',
                                class: 'name'
                            },
                            children: [{
                                type: 'text',
                                text: res.data[0].name
                            }]
                        })

                        _this.data.details.push({
                            name: 'div',
                            attrs: {
                                style: '',
                                class: 'details'
                            },
                            children: [{
                                type: 'text',
                                text: res.data[0].details
                            }]
                        })

                        _this.setData({
                            details: _this.data.details,
                            effect_ratio: res.data[0].effect_ratio
                        })
                    },
                    fail: function(res) {
                        wx.showToast({
                            title: '错误',
                            duration: 2000
                        });
                    },
                    complete: function(res) {
                        // complete
                    }
                })
                break
            case 3:
                // Depend on effect_ratio, get a random equipment
                wx.request({
                    url: 'https://skycity.joinp8.com/philosopher/getEquipment?effect_ratio=' + this.data.effect_ratio,
                    // data: {
                    //     title: e.detail.value.title,
                    //     details: e.detail.value.details,
                    //     uid: 1
                    // },
                    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                    //header: { 'content-type': 'application/x-www-form-urlencoded' }, // 设置请求的 header
                    success: function(res) {

                        _this.data.details.push({
                            name: 'div',
                            attrs: {
                                style: '',
                                class: 'name'
                            },
                            children: [{
                                type: 'text',
                                text: res.data[0].name
                            }]
                        })

                        _this.data.details.push({
                            name: 'div',
                            attrs: {
                                style: '',
                                class: 'details'
                            },
                            children: [{
                                type: 'text',
                                text: res.data[0].details
                            }]
                        })

                        _this.setData({
                            details: _this.data.details,
                            effect_ratio: res.data[0].effect_ratio
                        })
                    },
                    fail: function(res) {
                        wx.showToast({
                            title: '错误',
                            duration: 2000
                        });
                    },
                    complete: function(res) {
                        // complete
                    }
                })
                break
            default:
                wx.request({
                    url: 'https://skycity.joinp8.com/philosopher/getEvent',
                    // data: {
                    //     title: e.detail.value.title,
                    //     details: e.detail.value.details,
                    //     uid: 1
                    // },
                    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                    //header: { 'content-type': 'application/x-www-form-urlencoded' }, // 设置请求的 header
                    success: function(res) {

                        _this.data.details.push({
                            name: 'div',
                            attrs: {
                                style: '',
                                class: 'name'
                            },
                            children: [{
                                type: 'text',
                                text: res.data[0].name
                            }]
                        })

                        _this.data.details.push({
                            name: 'div',
                            attrs: {
                                style: '',
                                class: 'details'
                            },
                            children: [{
                                type: 'text',
                                text: res.data[0].details
                            }]
                        })

                        _this.setData({
                            details: _this.data.details,
                            effect_ratio: res.data[0].effect_ratio
                        })
                    },
                    fail: function(res) {
                        wx.showToast({
                            title: '错误',
                            duration: 2000
                        });
                    },
                    complete: function(res) {
                        // complete
                    }
                })
        }

        this.setData({
            round: this.data.round + 1,
            scrollTop: 5000
        })
    }
})