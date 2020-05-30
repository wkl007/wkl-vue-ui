/**
 * 空数据格式化
 * @param text
 * @param extra
 * @param format
 * @returns {*|string}
 */
export function emptyFormat (text, extra = '', format = '暂无') {
  return text ? `${text}${extra}` : format
}
