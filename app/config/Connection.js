/*
 * @file: Connection.js
 * @description: Connection file for the application
 * @date: 14.12.2017
 * @author: Shiven Juneja
 * */

const localhost = '192.168.1.3:8585'
const live = 'www.google.com'
const runningUrl = localhost
const httpUrl = `http://${runningUrl}`
const socketUrl = `ws://${runningUrl}/websocket`
const apiBaseUrl = `http://${runningUrl}/api/`
const staticPagesUrl = `http://${runningUrl}/`
const mediaBaseUrl = `http://${runningUrl}/uploadedFiles/`

export default class Connection {
  static getResturl() {
    return apiBaseUrl
  }

  static getSocketResturl() {
    return socketUrl
  }

  static getBaseUrl() {
    return httpUrl
  }

  static getMedia(_id) {
    return mediaBaseUrl
  }

  static getStaticPage(url) {
    return staticPagesUrl + url
  }
}
