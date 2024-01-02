$(document).ready(function() {
    // List of values to populate the dropdown
    let natchathiraNames = [
        'அச்சுவினி',
        'பரணி',
        'கிருத்திகை',
        'ரோகிணி',
        'மிருகசீரிடம்',
        'திருவாதிரை',
        'புனர்பூசம்',
        'பூசம்',
        'ஆயிலியம்',
        'மகம்',
        'பூரம்',
        'உத்தரம்',
        'அத்தம்',
        'சித்திரை',
        'சுவாதி',
        'விசாகம்',
        'அனுசம்',
        'கேட்டை',
        'மூலம்',
        'பூராடம்',
        'உத்திராடம்',
        'திருவோணம்',
        'அவிட்டம்',
        'சதயம்',
        'பூரட்டாதி',
        'உத்திரட்டாதி',
        'ரேவதி'
    ];
    //results
    let resultsList = [
      'டென்சன்',
      'அனுகூலம் / சௌபாக்கியம்',
      'இழப்பு / நிலைகுலைர்து',
      'வஞ்சக சுகம்',
      'காரியநாசம்',
      'அனுகூலம்',
      'வேதனை',
      'தெளிவடைய செய்யும்',
      'அளவுக்கு மீரினால் அமிர்தமும் நஞ்சு',
      'காரிய தடை / மரணம்',
      'உறவுகள் துண்டிக்கப்படும்',
      'உடல்நிலை பாதிப்பு / பொருளாதாரம் பாதிப்பு',
      'அதிக சிறப்பு',
      'கஷ்டம் / அஷ்டம இடம்',
      'உறவுகள் வந்து போகும்',
      'சண்டை',
      'நன்மை',
      'பணப்பகை',
      'ஆதங்கம்',
      'சுபம்',
      'வேண்டாத சாதனை',
      'எல்லாதையும் இழந்து நடுரோட்டில் நிற்பது',
      'காரியம் கேட்டு போதல்',
      'இடம் / அந்தஸ்து',
      'முடிவு எடுக்க முடியாத நிலை',
      'ஜாதி',
      'வணக்கம்'
    ];

    // Reference to the dropdown by its ID
    var baseStarDropdown = $('#baseStar');
    var actualStarDropdown = $('#actualStar');
    var resultBlock = $("#results");
    var actualStarNames = [];

   

    $.each(natchathiraNames, function(index, value) {
      baseStarDropdown.append($('<option></option>').attr('value', value).text(value));
    });



    $('#baseStar').on('change', function() {
      var baseStarValue = natchathiraNames.indexOf($(this).val()); // Get index of selected value in the array
      if (baseStarValue !== -1) {
        //console.log(natchathiraNames)
        var namesBeforeIndex = natchathiraNames.slice(0, baseStarValue); // Slice the array from start to selectedIndex (inclusive)
        var namesAfterIndex = natchathiraNames.slice(baseStarValue); // Slice the array from selectedIndex to end
        //console.log(namesBeforeIndex)
        //console.log(namesAfterIndex)

        actualStarNames = namesAfterIndex.concat(namesBeforeIndex);
        console.log(actualStarNames)
        actualStarDropdown.empty();
        actualStarDropdown.append($('<option value="">தேர்வு செய்</option>'));
        $.each(actualStarNames, function(index, value) {
          actualStarDropdown.append($('<option></option>').attr('value', value).text(value));
        });
      } else {}
    });
   
    $('#actualStar').on('change', function() {
      op = actualStarNames.indexOf($(this).val());
      res = resultsList[op];
      // console.log(res)
      op_int = op+1
      resultBlock.html(' '+op_int+'. '+res);
      resultBlock.show();
    });
  });