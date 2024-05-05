$(document).ready(function () {
    $('#generateBtn').click(function () {
        var inputText = $('#textInput').val();
        var outputList = $('#outputList');
        outputList.empty();

        for (var i = 0; i < inputText.length; i++) {
            var letter = inputText[i].toUpperCase();
            var phonetic = getPhonetic(letter);
            outputList.append('<li class="list-group-item">' + letter + ' - ' + phonetic + '</li>');
        }
    });

    $('#clearBtn').click(function () {
        $('#outputList').empty();
    });
    //Function for Phonetic
    function getPhonetic(letter) {
        switch (letter) {
            case 'A':
                return 'Alpha';
            case 'B':
                return 'Bravo';
            case 'C':
                return 'Charlie';
            case 'D':
                return 'Delta';
            case 'E':
                return 'Echo';
            case 'F':
                return 'Foxtrot';
            case 'G':
                return 'Golf';
            case 'H':
                return 'Hotel';
            case 'I':
                return 'India';
            case 'J':
                return 'Juliett';
            case 'K':
                return 'Kilo';
            case 'L':
                return 'Lima';
            case 'M':
                return 'Mike';
            case 'N':
                return 'November';
            case 'O':
                return 'Oscar';
            case 'P':
                return 'Papa';
            case 'Q':
                return 'Quebec';
            case 'R':
                return 'Romeo';
            case 'S':
                  return 'Sierra';
            case 'T':
                return 'Tango';
            case 'U':
                return 'Uniform';
            case 'V':
                return 'Victor';
            case 'W':
                return 'Whiskey';
            case 'X':
                return 'X-ray';
            case 'Y':
                return 'Yankee';
            case 'Z':
                return 'Zulu';
            default:
                return 'Unknown';
        }
    }
});