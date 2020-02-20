/**
 * Sleep Utility Based On Promise
 * @param  ms
 * @return    Promise
 */
export function sleep(ms: number) {
    return new Promise(res => setTimeout(res, ms));
}

/**
 * Old Way of Sleeping
 * @param  ms      MicroSecond
 * @param  handler Function handler
 * @return
 */
export function oldSleep(ms: number, handler: Function) {
    setTimeout(handler, ms);
}
