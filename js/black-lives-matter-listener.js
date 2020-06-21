var BLML_domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

BLML_domReady(function() {
    
    // Set an empty var to hold currently logged keystrokes
    var logged = '';

    const banned = [
        {
            keywords: ['burrhead', 'burr-head', 'burr head', 'coon', 'golliwogg', 'jigaboo', 'jiggabo', 'jijjiboo', 'zigabo', 'jig', 'jigg', 'jiggy', 'jigga', 'jim crow', 'jim fish', 'jungle bunny', 'kaffir', 'kaffer', 'kafir', 'kaffre', 'mosshead', 'nig-nog', 'nignog', 'nig nog', 'nigger', 'nigor', 'nigra', 'nigre', 'nigar', 'niggur', 'nigga', 'niggah', 'niggar', 'nigguh', 'niggress', 'nigette', 'niglet', 'nigglet', 'nigra', 'negra', 'niggra', 'nigrah', 'nigruh', 'pickaninny', 'porch monkey', 'powder burn', 'quashie', 'sambo', 'smoked irishman', 'sooty', 'spade', 'spook', 'thicklips', 'bootlips'],
            statement: 'Black Lives Matter (BLM) is an organized movement favoring non-violent civil disobedience in protest against alleged incidents of police brutality against Afro-American people.\n\nThis alert is being shown to you, because you just typed a word that a majority of Afro-American people find both offensive and a reinforcement of the systemic racism problem overall. Please consider this as you move forward in your life.\n\nYour words have power, as do your thoughts. We can all choose to use that power with the very same compassion and dignity you would want for you and your loved ones.'
        }
    ];

    const chars = 'abcdefghijklmnopqrstuvwxyz- ';

    // utility func to query the banned keyword arrays and show the user an alert upon a match
    const check_against_banned = function (logString, banArray)
    {
        // loop through the banned array of objects
        for (var i = 0; i < banArray.length; i++)
        {
            // loop through each objects keywords array
            for (var j = 0; j < banArray[i].keywords.length; j++)
            {
                // create a regex expression using the current keyword
                var regexExp = new RegExp(banArray[i].keywords[j],'g');
                
                // check the log string for a match to the keyword
                if (logString.match(regexExp))
                {
                    logged = '';
                    return banArray[i].statement;
                }
                
                // handle a phrase (words with a space)
                if (logString.indexOf(' ') != logString.lastIndexOf(' '))
                {
                    let newLogArray = logString.split(' ');
                    newLogArray.shift();
                    logged = newLogArray.join(' ');
                }
            }
        }

        return false;
    };

    // add an event listener to the document
    document.addEventListener('keydown', function(event)
    {
        // on keydown grab the event key pressed and make it lowercase for processing
        const key = event.key.toLowerCase();

        // if the key pressed is in the allowed chars
        if (chars.indexOf(key) != -1)
        {
            // add the key pressed to the log
            logged += key;
            console.log('Current Log: ' + logged);
        }
        
        // if the log has a value to process
        if (logged.length > 0)
        {
            // check the log against the ban lists
            let response = check_against_banned(logged, banned);

            console.log('Post-Loops Log: ' + logged);

            if (response)
            {
                alert(response);
            }

        }

    });

});