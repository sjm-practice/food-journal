if (JournalEntries.find().count() === 0) {
    var je1 = new JournalEntry();
    je1.set('entryDate', new Date(2015, 8, 23));  // note/remember, month is zero based
    je1.set('caption', 'good day.');
    je1.save();

    var je2 = new JournalEntry();
    je2.set({
        entryDate: new Date(2015, 8, 21),
        caption: 'not a very good day.'
    });
    je2.save();

    var je3 = new JournalEntry();
    je3.set({
        entryDate: new Date(2015, 8, 22),
        caption: 'getting started again.'
    });
    je3.save();

    var je4 = new JournalEntry();
    je4.set({
        entryDate: new Date(2015, 7, 20),
        caption: 'beginning cleanse.'
    });
    je4.save();

    var je5 = new JournalEntry();
    je5.set({
        entryDate: new Date(2015, 7, 11),
        caption: 'standard diet.'
    });
    je5.save();
}
