if (JournalEntries.find().count() === 0) {

    Meteor.users.remove({});

    var smarshUserId = Accounts.createUser({
        email: 'smarsh@test.com',
        password: 'asdfasdf'
    });

  var samiUserId = Accounts.createUser({
    email: 'sami@test.com',
    password: 'asdfasdf'
  });

  var joeUserId = Accounts.createUser({
        email: 'joe@test.com',
        password: 'asdfasdf'
    });

    var je1 = new JournalEntry();
    je1.set('ownerId', smarshUserId);
    je1.set('entryDate', new Date(2015, 8, 23));  // note/remember, month is zero based
    je1.set('caption', 'good day.');
    je1.save();

    var je2 = new JournalEntry();
    je2.set({
        'ownerId': samiUserId,
        'entryDate': new Date(2015, 11, 21),
        'caption': 'First day of logging.'
    });
    je2.set({
        'sleep.hours': 6,
        'sleep.quality': JournalEntries.sleepQualityList[3]
    });
    je2.set({
        'breakfast.food': 'toast, eggs',
        'breakfast.time': new Date(2015, 11, 21, 7, 30),
        'breakfast.satisfying': true,
        'breakfast.snackAfter': false,
        'breakfast.cravings': 'chocolate, wine',
        'breakfast.mood': JournalEntries.moodList[1],
        'breakfast.energyLevel': 8,
        'breakfast.clarityLevel': 7
    });
    je2.save();

    var je3 = new JournalEntry();
    je3.set({
        'ownerId': smarshUserId,
        'entryDate': new Date(2015, 8, 22),
        'caption': 'getting started again.'
    });
    je3.set({
        'sleep.hours': 7,
        'sleep.quality': JournalEntries.sleepQualityList[0]
    });
    je3.save();

    var je4 = new JournalEntry();
    je4.set({
        'ownerId': smarshUserId,
        'entryDate': new Date(2015, 7, 20),
        'caption': 'beginning cleanse.'
    });
    je4.save();

    var je5 = new JournalEntry();
    je5.set({
        'ownerId': smarshUserId,
        'entryDate': new Date(2015, 7, 11),
        'caption': 'standard diet.'
    });
    je5.save();

    for (var i=1; i <= 10; i++) {
        var je = new JournalEntry();
        je.set({
            'ownerId': smarshUserId,
            'entryDate': new Date(2015, 6, i),
            'caption': 'day ' + i + ' on the diet.'
        });
        je.save();
    }

    var je6 = new JournalEntry();
    je6.set({
        'ownerId': joeUserId,
        'entryDate': new Date(2016, 3, 10),
        'caption': "I'm in on this game."
    });
    je6.save();
}
