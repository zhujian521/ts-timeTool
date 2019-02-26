/**
 * 时间工具模块
 */
export declare module TimeUtilsModule {
    /**
     * 时间戳转换时间
     * @param timeStamp 10位或者13位数字时间戳
     * @param format 日期格式
     */
    function timeStampToTime(timeStamp: number, format?: string): string;
    /**
     * 时间转时间戳
     * @param time 日期
     */
    function timeToTimeStamp(time: string): number;
    /**
     * 计算时间戳之间的差值
     * @param startTime
     * @param endTime
     */
    function calculateDiffTimeStamp(startTime: number, endTime: number): number[];
    /**
     * 计算两个日期之间的差值
     * @param startTime
     * @param endTime
     */
    function calculateDiffTime(startTime: string, endTime: string): number[];
    /**
     * 获取当前时间
     */
    function getCurrentTime(): string;
}
