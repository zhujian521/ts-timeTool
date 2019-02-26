"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 时间工具模块
 */
var TimeUtilsModule;
(function (TimeUtilsModule) {
    /**
     * 时间戳转换时间
     * @param timeStamp 10位或者13位数字时间戳
     * @param format 日期格式
     */
    function timeStampToTime(timeStamp, format) {
        if (format === void 0) { format = "Y-M-D H:m:s"; }
        var formateArr = ["Y", "M", "D", "H", "m", "s"];
        var returnArr = [];
        var timeStampString = timeStamp.toString();
        timeStamp = timeStampString.length > 10 ? timeStamp : timeStamp * 1000;
        var date = new Date(timeStamp);
        returnArr.push(date.getFullYear());
        returnArr.push(formatNumber(date.getMonth() + 1));
        returnArr.push(formatNumber(date.getDate()));
        returnArr.push(formatNumber(date.getHours()));
        returnArr.push(formatNumber(date.getMinutes()));
        returnArr.push(formatNumber(date.getSeconds()));
        for (var i in returnArr) {
            format = format.replace(formateArr[i], returnArr[i]);
        }
        return format;
    }
    TimeUtilsModule.timeStampToTime = timeStampToTime;
    /**
     * 时间转时间戳
     * @param time 日期
     */
    function timeToTimeStamp(time) {
        return new Date(time.replace(/-/g, "/")).getTime() / 1000;
    }
    TimeUtilsModule.timeToTimeStamp = timeToTimeStamp;
    function formatNumber(n) {
        n = n.toString();
        return n[1] ? n : "0" + n;
    }
    /**
     * 计算时间戳之间的差值
     * @param startTime
     * @param endTime
     */
    function calculateDiffTimeStamp(startTime, endTime) {
        var start_time = 0;
        var end_time = 0;
        if (startTime < endTime) {
            start_time = startTime;
            end_time = endTime;
        }
        else {
            start_time = endTime;
            end_time = startTime;
        }
        var timeDiff = end_time - start_time;
        var hour = Math.floor(timeDiff / 3600);
        timeDiff = timeDiff % 3600;
        var minute = Math.floor(timeDiff / 60);
        timeDiff = timeDiff % 60;
        var second = timeDiff;
        return [hour, minute, second];
    }
    TimeUtilsModule.calculateDiffTimeStamp = calculateDiffTimeStamp;
    /**
     * 计算两个日期之间的差值
     * @param startTime
     * @param endTime
     */
    function calculateDiffTime(startTime, endTime) {
        return calculateDiffTimeStamp(timeToTimeStamp(startTime), timeToTimeStamp(endTime));
    }
    TimeUtilsModule.calculateDiffTime = calculateDiffTime;
    /**
     * 获取当前时间
     */
    function getCurrentTime() {
        var timestamp = Date.parse(new Date().toString());
        return timeStampToTime(timestamp);
    }
    TimeUtilsModule.getCurrentTime = getCurrentTime;
})(TimeUtilsModule = exports.TimeUtilsModule || (exports.TimeUtilsModule = {}));
