var BLML_domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

BLML_domReady(function() {
    
    // Set an empty var to hold currently logged keystrokes
    var logged = '';

    const banned = [
        {
            keywords: ['brownie', 'cameljockey', 'camel jockey', 'camel-jockey', 'sandnigger', 'sand nigger', 'sand-nigger', 'towelhead', 'towel head', 'towel-head', 'raghead', 'rag head', 'rag-head'],
            statement: 'Black Lives Matter (BLM) is an organized movement favoring non-violent civil disobedience in protest against alleged incidents of police brutality against Afro-American people.\n\nThis alert is being shown to you, because you just typed a word that a majority of Middle Eastern people find both offensive and a reinforcement of the systemic racism problem that the BLM movement focuses upon. Please consider this as you move forward in your life.\n\nYour words have power, as do your thoughts. We can all choose to use that power with the very same compassion and dignity we would want for ourselves and our loved ones. The choice is ours, together.'
        },
        {
            keywords: ['burrhead', 'burr-head', 'burr head', 'coon', 'golliwogg', 'jigaboo', 'jiggabo', 'jijjiboo', 'zigabo', 'jig', 'jigg', 'jiggy', 'jigga', 'jim crow', 'jim fish', 'jungle bunny', 'kaffir', 'kaffer', 'kafir', 'kaffre', 'mosshead', 'nig-nog', 'nignog', 'nig nog', 'nigger', 'nigor', 'nigra', 'nigre', 'nigar', 'niggur', 'nigga', 'niggah', 'niggar', 'nigguh', 'niggress', 'nigette', 'niglet', 'nigglet', 'nigra', 'negra', 'niggra', 'nigrah', 'nigruh', 'pickaninny', 'porch monkey', 'powder burn', 'quashie', 'sambo', 'smoked irishman', 'sooty', 'spade', 'spook', 'thicklips', 'bootlips'],
            statement: 'Black Lives Matter (BLM) is an organized movement favoring non-violent civil disobedience in protest against alleged incidents of police brutality against Afro-American people.\n\nThis alert is being shown to you, because you just typed a word that a majority of Afro-American people find both offensive and a reinforcement of the systemic racism problem overall. Please consider this as you move forward in your life.\n\nYour words have power, as do your thoughts. We can all choose to use that power with the very same compassion and we would want for ourselves and our loved ones. The choice is ours, together.'
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
                    // if a match is found then reset the log value
                    logged = '';

                    // and return the statement for the keyword match found
                    return banArray[i].statement;
                }
                
                // if there's more than two spaces
                if (logString.indexOf(' ') != logString.lastIndexOf(' '))
                {
                    // break the string into an array by space
                    let newLogArray = logString.split(' ');
                    // remove the first word in the array
                    newLogArray.shift();
                    // replace the current log without the first word
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
            //('Current Log: ' + logged);
        }
        
        // if the log has a value to process
        if (logged.length > 0)
        {
            // check the log against the ban lists
            let response = check_against_banned(logged, banned);

            //console.log('Post-Loops Log: ' + logged);

            if (response)
            {
                alert(response);
            }

        }

    });

});