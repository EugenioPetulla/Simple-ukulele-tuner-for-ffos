
NotesFrequencies = {

    findNoteByFrequency: function(frequency) {

        var roundedFrequency = Math.floor(frequency);

        var foundNoteUp = null;
        var upFrequencyIndex = roundedFrequency;
        var done = false;
        while(!done) {
            if(this.absNotesFrequencies[upFrequencyIndex] !== undefined) {
                foundNoteUp = this.absNotesFrequencies[upFrequencyIndex];
                done = true;
            } else {
                upFrequencyIndex++;
            }
            if (upFrequencyIndex>=7902) {
                done = true;
            }
        }

        var foundNoteDown = null;
        var downFrequencyIndex = roundedFrequency;
        done = false;
        while(!done) {
            if(this.absNotesFrequencies[downFrequencyIndex] !== undefined) {
                foundNoteDown = this.absNotesFrequencies[downFrequencyIndex];
                done = true;
            } else {
                downFrequencyIndex--;
            }
            if (downFrequencyIndex<=0) {
                done = true;
            }
        }

        
        logRoundedNote = 12*Math.log2(roundedFrequency/440.);
        logUpNote = 12*Math.log2(upFrequencyIndex/440.);
        logDownNote = 12*Math.log2(downFrequencyIndex/440.);
        
        if ( (logUpNote - logRoundedNote) < (logRoundedNote - logDownNote) ) {
            return foundNoteUp + " (offset: "+ Math.round((logRoundedNote - logUpNote)*100)/100 +")";
        } else {
            return foundNoteDown + " (offset: "+ Math.round((logRoundedNote - logDownNote)*100)/100 +")";
        }
    },

    absNotesFrequencies: {
        16:"C0",
        17:"C#0",
        18:"D0",
        19:"D#0",
        20:"E0",
        21:"F0",
        23:"F#0",
        24:"G0",
        25:"G#0",
        27:"A0",
        29:"A#0",
        30:"B0",
        32:"C1",
        34:"C#1",
        36:"D1",
        38:"D#1",
        41:"E1",
        43:"F1",
        46:"F#1",
        49:"G1",
        51:"G#1",
        55:"A1",
        58:"A#1",
        61:"B1",
        66:"C2",
        70:"C#2",
        74:"D2",
        78:"D#2",
        83:"E2",
        88:"F2",
        93:"F#2",
        98:"G2",
        104:"G#2",
        110:"A2",
        117:"A#2",
        124:"B2",
        131:"C3",
        139:"C#3",
        147:"D3",
        156:"D#3",
        165:"E3",
        175:"F3",
        185:"F#3",
        196:"G3",
        208:"G#3",
        220:"A3",
        233:"A#3",
        247:"B3",
        262:"C4",
        277:"C#4",
        294:"D4",
        311:"D#4",
        330:"E4",
        349:"F4",
        370:"F#4",
        392:"G4",
        415:"G#4",
        440:"A4",
        466:"A#4",
        494:"B4",
        523:"C5",
        554:"C#5",
        587:"D5",
        622:"D#5",
        659:"E5",
        698:"F5",
        740:"F#5",
        784:"G5",
        831:"G#5",
        880:"A5",
        932:"A#5",
        988:"B5",
        1046:"C6",
        1109:"C#6",
        1175:"D6",
        1245:"D#6",
        1319:"E6",
        1397:"F6",
        1480:"F#6",
        1568:"G6",
        1661:"G#6",
        1760:"A6",
        1865:"A#6",
        1976:"B6",
        2093:"C7",
        2217:"C#7",
        2349:"D7",
        2489:"D#7",
        2637:"E7",
        2794:"F7",
        2960:"F#7",
        3136:"G7",
        3322:"G#7",
        3520:"A7",
        3729:"A#7",
        3951:"B7",
        4186:"C8",
        4434:"C#8",
        4698:"D8",
        4978:"D#8",
        5274:"E8",
        5587:"F8",
        5919:"F#8",
        6271:"G8",
        6644:"G#8",
        7040:"A8",
        7458:"A#8",
        7902:"B8"
    }

}