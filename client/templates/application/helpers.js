Template.registerHelper('errorClass', function (field) {
  return !!Session.get('journalEntryFormFieldErrors')[field] ? 'has-error' : '';
});

Template.registerHelper('errorMessage', function (field) {
  return Session.get('journalEntryFormFieldErrors')[field];
});

Template.registerHelper('mood', function () {
    return JournalEntries.moodList;
});

Template.registerHelper('formattedTime', function (time) {
    return time ? timePickerFormat(time) : '';
});
