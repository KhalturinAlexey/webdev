function isTimeRangesIntersect(timeRange1, timeRange2) {
  var timeRange1Start = Math.min(toMinutes(timeRange1[0]), toMinutes(timeRange1[1]));
  var timeRange1End = Math.max(toMinutes(timeRange1[0]), toMinutes(timeRange1[1]));
  var timeRange2Start = Math.min(toMinutes(timeRange2[0]), toMinutes(timeRange2[1]));
  var timeRange2End = Math.max(toMinutes(timeRange2[0]), toMinutes(timeRange2[1]));
  return timeRange1Start <= timeRange2End && timeRange1End >= timeRange2Start;
}
function toMinutes(time) {
  var timeParts = time.split(':');
  return parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);
}

isTimeRangesIntersect(['08:30', '09:30'], ['10:30', '12:00']); // return false
isTimeRangesIntersect(['18:30', '19:30'], ['19:00', '21:00']); // return true
