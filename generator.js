<html>
    <head>
        <title>FTJ Brainstormer</title>
        <link rel="stylesheet" href="stylesheets/style.css" /> 
        <script>
            var elements = {
                jokes: [],
                projects: [],
                stuff: [],
            };

            function getAnIdea() {
                function get(source) {
                    return source[Math.floor(Math.random() * source.length)];
                }
                return [get(elements.jokes), get(elements.projects), get(elements.stuff)].join(' ');
            }

            function brainstorm() {
                $("#idea").text(getAnIdea());
            }

            $(document).ready(function() {
                $('#shuffleBtn').click(brainstorm);

                $.ajax({
                    type: 'GET',
                    dataType: 'jsonp',
                    url: 'https://spreadsheets.google.com/feeds/list/1AgdN5Xs-_kLlGNXUQYCp-CBoosTRJ_y5VFeDBDeOLpk/od6/public/values?alt=json-in-script&callback=dataCallback',
                    jsonpCallback: 'dataCallback',
                });

            });

            function dataCallback(data) {
                var rows = data.feed.entry;
                for (var i = 0; i < rows.length; i++) {
                    var divers = rows[i].gsx$gamediversifier.$t.trim();
                    var gametype = rows[i].gsx$gametype.$t.trim();
                    var twist = rows[i].gsx$gametwist.$t.trim();

                    if (divers) elements.diversifiers.push(divers);
                    if (gametype) elements.gametypes.push(gametype);
                    if (twist) elements.twists.push(twist);
                }
                $('#shuffleBtn').show();
                brainstorm();
            }
        </script>
    </head>
    <body>
        <h1>Game Design Brainstormer</h1>

        <div id='idea'>Loading ideas...</div>
        <a href='javascript:void(0)' class='btn' id='shuffleBtn' style='display:none'>Give me another idea!</a>

        <div class='footer'>Powered by YOU! Enrich the brainstormer by adding ideas <a href='https://docs.google.com/spreadsheet/ccc?key=0AmfuCT5xFzgOdEw0OFJ5dS12Z2U5SUpRY3FEV1dRYXc'>here</a></div>
    </body>
</html>
