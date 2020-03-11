function isTimeRangesIntersect(timeRange1, timeRange2) {
  if (!isValidTimeRange(timeRange1) || !isValidTimeRange(timeRange2)) {
    return false;
  }
  var timeRange1Start = getTimeRangeStart(timeRange1);
  var timeRange1End = getTimeRangeEnd(timeRange1);
  var timeRange2Start = getTimeRangeStart(timeRange2);
  var timeRange2End = getTimeRangeEnd(timeRange2);
  return timeRange1Start <= timeRange2End && timeRange1End >= timeRange2Start;
}
function isValidTimeRange(timeRange) {
  if (!Array.isArray(timeRange) || timeRange.length != 2) {
    return false;
  }
  return isValidTime(timeRange[0]) && isValidTime(timeRange[1]);
}
function isValidTime(time) {
  if (typeof time != 'string' || time.length != 5 || time.indexOf(':') == -1) {
    return false;
  }
  timeParts = time.split(':');
  return !isNaN(Number(timeParts[0])) && !isNaN(Number(timeParts[1]));
}
function toMinutes(time) {
  var timeParts = time.split(':');
  return parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);
}
function getTimeRangeStart(timeRange) {
  return Math.min(toMinutes(timeRange[0]), toMinutes(timeRange[1]));
}
function getTimeRangeEnd(timeRange) {
  return Math.max(toMinutes(timeRange[0]), toMinutes(timeRange[1]));
}

isTimeRangesIntersect(['08:30', '09:30'], ['10:30', '12:00']); // return false
isTimeRangesIntersect(['18:30', '19:30'], ['19:00', '21:00']); // return true
isTimeRangesIntersect(['18:30', '19:30'], ['17:00', '19:00']); // return true
isTimeRangesIntersect(['18:30', '19:30'], ['17:00', '18:00']); // return false
