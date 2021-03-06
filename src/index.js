/**
 * 目前存在的问题
 * UC浏览器安卓端不能设置icon
 * 百度浏览器安卓端不能指定分享
 */

import {shareToQQ, shareToQZone, shareToWeibo4Web, shareToQZone4Web} from './specifyShare'
import { isQQMBrowser, isUCMBrowser, isWechat, isBaiduMBrowser, isAndroid, isIos, isQQ, isQZone } from './utils'
import Share from './Share'
import QQMobileBrowser from './QQMobileBrowser'
import UCIosBrowser from './UCIosBrowser'
import UCAndroidBrowser from './UCAndroidBrowser'
import BaiduAndroidBrowser from './BaiduAndroidBrowser'
import Wechat from './Wechat'
import Others from './Others'
import QQ from './QQ'
import QZone from './QZone'

let NativeShare

if (isWechat) {
    NativeShare = Wechat
} else if (isQQ && isIos) {
    NativeShare = QQ
} else if (isQZone) {
    NativeShare = QZone
} else if (isQQMBrowser) {
    NativeShare = QQMobileBrowser
} else if (isUCMBrowser && isIos) {
    NativeShare = UCIosBrowser
} else if (isUCMBrowser && isAndroid) {
    NativeShare = UCAndroidBrowser
} else if (isBaiduMBrowser && isAndroid) {
    NativeShare = BaiduAndroidBrowser
} else {
    NativeShare = Others
}

window.NativeShare = NativeShare
export default NativeShare
