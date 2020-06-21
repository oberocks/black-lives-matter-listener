var BLML_domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

BLML_domReady(function() {
    
    // Set an empty var to hold currently logged keystrokes
    let logged = '';

    const banned = [
        {
            keywords: ['burrhead', 'burr-head', 'burr head', 'coon', 'golliwogg', 'jigaboo', 'jiggabo', 'jijjiboo', 'zigabo', 'jig', 'jigg', 'jiggy', 'jigga', 'jim crow', 'jim fish', 'jungle bunny', 'kaffir', 'kaffer', 'kafir', 'kaffre', 'mosshead', 'nig-nog', 'nignog', 'nig nog', 'nigger', 'nigor', 'nigra', 'nigre', 'nigar', 'niggur', 'nigga', 'niggah', 'niggar', 'nigguh', 'niggress', 'nigette', 'niglet', 'nigglet', 'nigra', 'negra', 'niggra', 'nigrah', 'nigruh', 'pickaninny', 'porch monkey', 'powder burn', 'quashie', 'sambo', 'smoked irishman', 'sooty', 'spade', 'spook', 'thicklips', 'bootlips'],
            statement: 'Lorum ispum dolar si ahmet.'
        }
    ];

    const chars = 'abcdefghijklmnopqrstuvwxyz- ';

    // add an event listener to the document
    document.addEventListener('keydown', function(event){

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
            // loop through the banned array of objects
            for (var i = 0; i < banned.length; i++)
            {
                // loop through each objects keywords array
                for (var j = 0; j < banned[i].keywords.length; j++)
                {
                    // handle an exact match to a banned keyword
                    if (logged === banned[i].keywords[j])
                    {
                        alert(banned[i].statement + ' (The insensitive phrase you typed was: ' + logged + ')');
                        logged = '';
                    }
                }
            }

            console.log('Post-Loops Log: ' + logged);

            // handle resetting the log whenever a user types more than two spaces
            for (var k = 0; k < logged.length; k++)
            {
                // if two seperate spaces are detected in the current log
                if ( logged.indexOf(' ') !== logged.lastIndexOf(' ') )
                {
                    // then reset the log 
                    logged = '';
                }
            }
        }

    });

});