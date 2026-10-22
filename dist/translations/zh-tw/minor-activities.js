"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var minor_activities_exports = {};
__export(minor_activities_exports, {
  translations: () => translations
});
module.exports = __toCommonJS(minor_activities_exports);
const translations = {
  "The announcement has ended.": "\u5EE3\u64AD\u5DF2\u7D50\u675F",
  "Battles do not support announcements.": "\u5C0D\u6230\u88E1\u4E0D\u652F\u6301\u5EE3\u64AD",
  "You are not allowed to use filtered words in announcements.": "\u5EE3\u64AD\u88E1\u4E0D\u80FD\u4F7F\u7528\u88AB\u7981\u7684\u8A5E\u8A9E",
  "There is already a poll or announcement in progress in this room.": "\u672C\u623F\u5DF2\u6709\u6295\u7968\u6216\u5EE3\u64AD",
  "An announcement was started by {USER}.": "{USER}\u958B\u4E86\u4E00\u500B\u5EE3\u64AD",
  "There is no announcement running in this room.": "\u672C\u623F\u6C92\u6709\u5EE3\u64AD",
  "There is no timer to clear.": "\u7121\u5B9A\u6642\u5668\u53EF\u4EE5\u522A\u9664",
  "The announcement timer was turned off.": "\u5EE3\u64AD\u5B9A\u6642\u5668\u5DF2\u88AB\u95DC\u9589",
  "Invalid time given.": "\u6240\u5B9A\u7684\u6642\u9593\u7121\u6548",
  "The announcement timer is off.": "\u5EE3\u64AD\u5B9A\u6642\u5668\u5DF2\u95DC\u9589",
  "The announcement was ended by {USER}.": "\u5EE3\u64AD\u5DF2\u88AB{USER}\u7D42\u7D50",
  "Accepts the following commands:": "\u96BB\u63A5\u53D7\u4E0B\u5217\u7684\u6307\u4EE4",
  "That option is not selected.": "\u6C92\u6709\u9078\u64C7",
  "You have already voted for this poll.": "\u4F60\u6709\u5DF2\u7D93\u6295\u7968\u4E86",
  "No options selected.": "\u7121\u9078\u64C7",
  "you will not be able to vote after viewing results": "\u9EDE\u958B\u7D50\u679C\u540E\u5C31\u4E0D\u80FD\u518D\u6295\u7968",
  "View results": "\u770B\u7D50\u679C",
  "You can't vote after viewing results": "\u4F60\u5DF2\u770B\u4E86\u7D50\u679C\uFF0C\u7121\u6CD5\u6295\u7968",
  "The poll has ended &ndash; scroll down to see the results": "\u6295\u7968\u7D50\u675F&ndash;\u7D50\u8AD6\u5728\u6B64",
  "Vote for {NUMBER}": "\u6295\u7D66{NUMBER}",
  "Submit your vote": "\u63D0\u4EA4\u9078\u64C7",
  "Quiz": "\u6E2C\u9A57",
  "Poll": "\u6295\u7968",
  "Submit": "\u63D0\u4EA4",
  "ended": "\u7D42\u7D50\u4E86",
  "votes": "\u7968\u6578",
  "delete": "\u522A\u9664",
  "Poll too long.": "\u6295\u7968\u592A\u9577",
  "Battles do not support polls.": "\u5C0D\u6230\u88E1\u4E0D\u652F\u6301\u6295\u7968",
  "You are not allowed to use filtered words in polls.": "\u6295\u7968\u88E1\u4E0D\u80FD\u4F7F\u7528\u88AB\u7981\u7684\u8A5E\u8A9E",
  "Not enough arguments for /poll new.": "\u6295\u7968\u53C3\u6578\u4E0D\u5920\u4F7F\u7528/poll new",
  "Too many options for poll (maximum is 8).": "\u6295\u7968\u9078\u9805\u4E0D\u80FD\u8D85\u8D8A8\u500B",
  "There are duplicate options in the poll.": "\u6295\u7968\u9078\u9805\u88E1\u6709\u91CD\u5FA9",
  "{USER} queued a poll.": "{USER}\u5B89\u63D2\u4E86\u4E0B\u4E00\u500B\u6295\u7968",
  "A poll was started by {USER}.": "{USER}\u958B\u4E86\u4E00\u500B\u6295\u7968",
  "The queue is already empty.": "\u968A\u5217\u5DF2\u662F\u7A7A\u7684",
  "Cleared poll queue.": "\u6295\u7968\u968A\u5217\u88AB\u6E05\u7A7A",
  'Room "{ROOMID}" not found.': '\u627E\u4E0D\u5230"{ROOMID}"\u623F',
  'Can\'t delete poll at slot {SLOT} - "{SLOT2}" is not a number.': '{SLOT} - "{SLOT2}"\u4F4D\u7F6E\u4E0D\u662F\u6578\u5B57\uFF0C\u7121\u6CD5\u5F9E\u6295\u7968\u88E1\u522A\u9664',
  "There is no poll in queue at slot {SLOT}.": "\u9019\u500B\u4F4D\u7F6E\u6C92\u6709\u6295\u7968\u968A\u5217",
  "({USER} deleted the queued poll in slot {SLOT}.)": "({USER}\u5728{SLOT}\u4F4D\u7F6E\u522A\u9664\u4E86\u968A\u5217\u88E1\u7684\u6295\u7968",
  "There is no poll running in this room.": "\u968A\u5217\u7684\u9019\u500B\u4F4D\u7F6E\u6C92\u6709\u6295\u7968",
  "To vote, specify the number of the option.": "\u8ACB\u6307\u660E\u9078\u9805",
  "Option not in poll.": "\u6295\u7968\u88E1\u6C92\u6709\u9019\u500B\u9078\u9805",
  "The poll timer was turned off.": "\u6295\u7968\u5B9A\u6642\u5668\u5DF2\u88AB\u95DC\u9589",
  "The queued poll was started.": "\u4E0B\u4E00\u500B\u6295\u7968\u958B\u59CB\u4E86",
  "The poll timer was turned on: the poll will end in {TIME} minute(s).": "\u6295\u7968\u5C07\u5728{TIME}\u5206\u9418\u540E\u7D42\u7D50",
  "The poll timer was set to {TIME} minute(s) by {USER}.": "{USER}.\u8A2D\u5B9A\u4E86{TIME}\u5206\u9418\u7684\u6295\u7968\u5B9A\u6642\u5668",
  "The poll timer is on and will end in {TIME} minute(s).": "\u6295\u7968\u5C07\u5728{TIME}\u5206\u9418\u540E\u7D42\u7D50",
  "The poll timer is off.": "\u6295\u7968\u5B9A\u6642\u5668\u5DF2\u95DC\u9589",
  "The poll was ended by {USER}.": "\u6295\u7968\u5DF2\u88AB{USER}\u7D42\u7D50",
  "Queued polls:": "\u6295\u7968\u968A\u5217",
  "No polls queued.": "\u968A\u5217\u88E1\u7121\u6295\u7968",
  "#{NUMBER} in queue": "\u968A\u5217\u88E1\u7B2C{NUMBER}\u500B",
  "Time should be a number of minutes less than one week.": null,
  // NEEDS TRANSLATION
  "Extra escape character. To end a poll with '\\', enter it as '\\\\'": null,
  // NEEDS TRANSLATION
  "Too many options for poll (maximum is {MAX}).": null,
  // NEEDS TRANSLATION
  "The poll timer was turned on: the poll will end in {TIME}.": null,
  // NEEDS TRANSLATION
  "The poll timer is on and will end in {TIME}.": null,
  // NEEDS TRANSLATION
  "The announcement was edited by {USER}.": null,
  // NEEDS TRANSLATION
  "That option is already selected.": null
  // NEEDS TRANSLATION
};
//# sourceMappingURL=minor-activities.js.map
