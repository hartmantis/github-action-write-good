#!/usr/bin/env node
module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(475);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module) {

var weasels = [
  'are a number',
  'clearly',
  'completely',
  'exceedingly',
  'excellent',
  'extremely',
  'fairly',
  'few',
  'huge',
  'interestingly',
  'is a number',
  'largely',
  'many',
  'mostly',
  'obviously',
  'quite',
  'relatively',
  'remarkably',
  'several',
  'significantly',
  'substantially',
  'surprisingly',
  'tiny',
  'various',
  'vast',
  'very'
];

// Allow "too many" and "too few"
var exceptions = [
  'many',
  'few'
]

var re = new RegExp('\\b(' + weasels.join('|') + ')\\b', 'gi');

module.exports = function (text, opts) {
  var suggestions = [];
  while (match = re.exec(text)) {
    var weasel = match[0].toLowerCase();
    if (exceptions.indexOf(weasel) === -1 ||
        text.substr(match.index-4, 4) !== 'too ') {
      suggestions.push({
        index: match.index,
        offset: weasel.length,
      });
    }
  }
  return suggestions;
};


/***/ }),

/***/ 60:
/***/ (function(module, __unusedexports, __webpack_require__) {

const cliches = [
  'a chip off the old block',
  'a clean slate',
  'a dark and stormy night',
  'a far cry',
  'a fine kettle of fish',
  'a loose cannon',
  'a penny saved is a penny earned',
  'a tough row to hoe',
  'a word to the wise',
  'ace in the hole',
  'acid test',
  'add insult to injury',
  'against all odds',
  'air your dirty laundry',
  'all fun and games',
  'all in a day\'s work',
  'all talk, no action',
  'all thumbs',
  'all your eggs in one basket',
  'all\'s fair in love and war',
  'all\'s well that ends well',
  'almighty dollar',
  'American as apple pie',
  'an axe to grind',
  'another day, another dollar',
  'armed to the teeth',
  'as luck would have it',
  'as old as time',
  'as the crow flies',
  'at loose ends',
  'at my wits end',
  'avoid like the plague',
  'babe in the woods',
  'back against the wall',
  'back in the saddle',
  'back to square one',
  'back to the drawing board',
  'bad to the bone',
  'badge of honor',
  'bald faced liar',
  'ballpark figure',
  'banging your head against a brick wall',
  'baptism by fire',
  'barking up the wrong tree',
  'bat out of hell',
  'be all and end all',
  'beat a dead horse',
  'beat around the bush',
  'been there, done that',
  'beggars can\'t be choosers',
  'behind the eight ball',
  'bend over backwards',
  'benefit of the doubt',
  'bent out of shape',
  'best thing since sliced bread',
  'bet your bottom dollar',
  'better half',
  'better late than never',
  'better mousetrap',
  'better safe than sorry',
  'between a rock and a hard place',
  'beyond the pale',
  'bide your time',
  'big as life',
  'big cheese',
  'big fish in a small pond',
  'big man on campus',
  'bigger they are the harder they fall',
  'bird in the hand',
  'bird\'s eye view',
  'birds and the bees',
  'birds of a feather flock together',
  'bit the hand that feeds you',
  'bite the bullet',
  'bite the dust',
  'bitten off more than he can chew',
  'black as coal',
  'black as pitch',
  'black as the ace of spades',
  'blast from the past',
  'bleeding heart',
  'blessing in disguise',
  'blind ambition',
  'blind as a bat',
  'blind leading the blind',
  'blood is thicker than water',
  'blood sweat and tears',
  'blow off steam',
  'blow your own horn',
  'blushing bride',
  'boils down to',
  'bolt from the blue',
  'bone to pick',
  'bored stiff',
  'bored to tears',
  'bottomless pit',
  'boys will be boys',
  'bright and early',
  'brings home the bacon',
  'broad across the beam',
  'broken record',
  'brought back to reality',
  'bull by the horns',
  'bull in a china shop',
  'burn the midnight oil',
  'burning question',
  'burning the candle at both ends',
  'burst your bubble',
  'bury the hatchet',
  'busy as a bee',
  'by hook or by crook',
  'call a spade a spade',
  'called onto the carpet',
  'calm before the storm',
  'can of worms',
  'can\'t cut the mustard',
  'can\'t hold a candle to',
  'case of mistaken identity',
  'cat got your tongue',
  'cat\'s meow',
  'caught in the crossfire',
  'caught red-handed',
  'checkered past',
  'chomping at the bit',
  'cleanliness is next to godliness',
  'clear as a bell',
  'clear as mud',
  'close to the vest',
  'cock and bull story',
  'cold shoulder',
  'come hell or high water',
  'cool as a cucumber',
  'cool, calm, and collected',
  'cost a king\'s ransom',
  'count your blessings',
  'crack of dawn',
  'crash course',
  'creature comforts',
  'cross that bridge when you come to it',
  'crushing blow',
  'cry like a baby',
  'cry me a river',
  'cry over spilt milk',
  'crystal clear',
  'curiosity killed the cat',
  'cut and dried',
  'cut through the red tape',
  'cut to the chase',
  'cute as a bugs ear',
  'cute as a button',
  'cute as a puppy',
  'cuts to the quick',
  'dark before the dawn',
  'day in, day out',
  'dead as a doornail',
  'devil is in the details',
  'dime a dozen',
  'divide and conquer',
  'dog and pony show',
  'dog days',
  'dog eat dog',
  'dog tired',
  'don\'t burn your bridges',
  'don\'t count your chickens',
  'don\'t look a gift horse in the mouth',
  'don\'t rock the boat',
  'don\'t step on anyone\'s toes',
  'don\'t take any wooden nickels',
  'down and out',
  'down at the heels',
  'down in the dumps',
  'down the hatch',
  'down to earth',
  'draw the line',
  'dressed to kill',
  'dressed to the nines',
  'drives me up the wall',
  'dull as dishwater',
  'dyed in the wool',
  'eagle eye',
  'ear to the ground',
  'early bird catches the worm',
  'easier said than done',
  'easy as pie',
  'eat your heart out',
  'eat your words',
  'eleventh hour',
  'even the playing field',
  'every dog has its day',
  'every fiber of my being',
  'everything but the kitchen sink',
  'eye for an eye',
  'face the music',
  'facts of life',
  'fair weather friend',
  'fall by the wayside',
  'fan the flames',
  'feast or famine',
  'feather your nest',
  'feathered friends',
  'few and far between',
  'fifteen minutes of fame',
  'filthy vermin',
  'fine kettle of fish',
  'fish out of water',
  'fishing for a compliment',
  'fit as a fiddle',
  'fit the bill',
  'fit to be tied',
  'flash in the pan',
  'flat as a pancake',
  'flip your lid',
  'flog a dead horse',
  'fly by night',
  'fly the coop',
  'follow your heart',
  'for all intents and purposes',
  'for the birds',
  'for what it\'s worth',
  'force of nature',
  'force to be reckoned with',
  'forgive and forget',
  'fox in the henhouse',
  'free and easy',
  'free as a bird',
  'fresh as a daisy',
  'full steam ahead',
  'fun in the sun',
  'garbage in, garbage out',
  'gentle as a lamb',
  'get a kick out of',
  'get a leg up',
  'get down and dirty',
  'get the lead out',
  'get to the bottom of',
  'get your feet wet',
  'gets my goat',
  'gilding the lily',
  'give and take',
  'go against the grain',
  'go at it tooth and nail',
  'go for broke',
  'go him one better',
  'go the extra mile',
  'go with the flow',
  'goes without saying',
  'good as gold',
  'good deed for the day',
  'good things come to those who wait',
  'good time was had by all',
  'good times were had by all',
  'greased lightning',
  'greek to me',
  'green thumb',
  'green-eyed monster',
  'grist for the mill',
  'growing like a weed',
  'hair of the dog',
  'hand to mouth',
  'happy as a clam',
  'happy as a lark',
  'hasn\'t a clue',
  'have a nice day',
  'have high hopes',
  'have the last laugh',
  'haven\'t got a row to hoe',
  'head honcho',
  'head over heels',
  'hear a pin drop',
  'heard it through the grapevine',
  'heart\'s content',
  'heavy as lead',
  'hem and haw',
  'high and dry',
  'high and mighty',
  'high as a kite',
  'hit paydirt',
  'hold your head up high',
  'hold your horses',
  'hold your own',
  'hold your tongue',
  'honest as the day is long',
  'horns of a dilemma',
  'horse of a different color',
  'hot under the collar',
  'hour of need',
  'I beg to differ',
  'icing on the cake',
  'if the shoe fits',
  'if the shoe were on the other foot',
  'in a jam',
  'in a jiffy',
  'in a nutshell',
  'in a pig\'s eye',
  'in a pinch',
  'in a word',
  'in hot water',
  'in the gutter',
  'in the nick of time',
  'in the thick of it',
  'in your dreams',
  'it ain\'t over till the fat lady sings',
  'it goes without saying',
  'it takes all kinds',
  'it takes one to know one',
  'it\'s a small world',
  'it\'s only a matter of time',
  'ivory tower',
  'Jack of all trades',
  'jockey for position',
  'jog your memory',
  'joined at the hip',
  'judge a book by its cover',
  'jump down your throat',
  'jump in with both feet',
  'jump on the bandwagon',
  'jump the gun',
  'jump to conclusions',
  'just a hop, skip, and a jump',
  'just the ticket',
  'justice is blind',
  'keep a stiff upper lip',
  'keep an eye on',
  'keep it simple, stupid',
  'keep the home fires burning',
  'keep up with the Joneses',
  'keep your chin up',
  'keep your fingers crossed',
  'kick the bucket',
  'kick up your heels',
  'kick your feet up',
  'kid in a candy store',
  'kill two birds with one stone',
  'kiss of death',
  'knock it out of the park',
  'knock on wood',
  'knock your socks off',
  'know him from Adam',
  'know the ropes',
  'know the score',
  'knuckle down',
  'knuckle sandwich',
  'knuckle under',
  'labor of love',
  'ladder of success',
  'land on your feet',
  'lap of luxury',
  'last but not least',
  'last hurrah',
  'last-ditch effort',
  'law of the jungle',
  'law of the land',
  'lay down the law',
  'leaps and bounds',
  'let sleeping dogs lie',
  'let the cat out of the bag',
  'let the good times roll',
  'let your hair down',
  'let\'s talk turkey',
  'letter perfect',
  'lick your wounds',
  'lies like a rug',
  'life\'s a bitch',
  'life\'s a grind',
  'light at the end of the tunnel',
  'lighter than a feather',
  'lighter than air',
  'like clockwork',
  'like father like son',
  'like taking candy from a baby',
  'like there\'s no tomorrow',
  'lion\'s share',
  'live and learn',
  'live and let live',
  'long and short of it',
  'long lost love',
  'look before you leap',
  'look down your nose',
  'look what the cat dragged in',
  'looking a gift horse in the mouth',
  'looks like death warmed over',
  'loose cannon',
  'lose your head',
  'lose your temper',
  'loud as a horn',
  'lounge lizard',
  'loved and lost',
  'low man on the totem pole',
  'luck of the draw',
  'luck of the Irish',
  'make hay while the sun shines',
  'make money hand over fist',
  'make my day',
  'make the best of a bad situation',
  'make the best of it',
  'make your blood boil',
  'man of few words',
  'man\'s best friend',
  'mark my words',
  'meaningful dialogue',
  'missed the boat on that one',
  'moment in the sun',
  'moment of glory',
  'moment of truth',
  'money to burn',
  'more power to you',
  'more than one way to skin a cat',
  'movers and shakers',
  'moving experience',
  'naked as a jaybird',
  'naked truth',
  'neat as a pin',
  'needle in a haystack',
  'needless to say',
  'neither here nor there',
  'never look back',
  'never say never',
  'nip and tuck',
  'nip it in the bud',
  'no guts, no glory',
  'no love lost',
  'no pain, no gain',
  'no skin off my back',
  'no stone unturned',
  'no time like the present',
  'no use crying over spilled milk',
  'nose to the grindstone',
  'not a hope in hell',
  'not a minute\'s peace',
  'not in my backyard',
  'not playing with a full deck',
  'not the end of the world',
  'not written in stone',
  'nothing to sneeze at',
  'nothing ventured nothing gained',
  'now we\'re cooking',
  'off the top of my head',
  'off the wagon',
  'off the wall',
  'old hat',
  'older and wiser',
  'older than dirt',
  'older than Methuselah',
  'on a roll',
  'on cloud nine',
  'on pins and needles',
  'on the bandwagon',
  'on the money',
  'on the nose',
  'on the rocks',
  'on the spot',
  'on the tip of my tongue',
  'on the wagon',
  'on thin ice',
  'once bitten, twice shy',
  'one bad apple doesn\'t spoil the bushel',
  'one born every minute',
  'one brick short',
  'one foot in the grave',
  'one in a million',
  'one red cent',
  'only game in town',
  'open a can of worms',
  'open and shut case',
  'open the flood gates',
  'opportunity doesn\'t knock twice',
  'out of pocket',
  'out of sight, out of mind',
  'out of the frying pan into the fire',
  'out of the woods',
  'out on a limb',
  'over a barrel',
  'over the hump',
  'pain and suffering',
  'pain in the',
  'panic button',
  'par for the course',
  'part and parcel',
  'party pooper',
  'pass the buck',
  'patience is a virtue',
  'pay through the nose',
  'penny pincher',
  'perfect storm',
  'pig in a poke',
  'pile it on',
  'pillar of the community',
  'pin your hopes on',
  'pitter patter of little feet',
  'plain as day',
  'plain as the nose on your face',
  'play by the rules',
  'play your cards right',
  'playing the field',
  'playing with fire',
  'pleased as punch',
  'plenty of fish in the sea',
  'point with pride',
  'poor as a church mouse',
  'pot calling the kettle black',
  'pretty as a picture',
  'pull a fast one',
  'pull your punches',
  'pulling your leg',
  'pure as the driven snow',
  'put it in a nutshell',
  'put one over on you',
  'put the cart before the horse',
  'put the pedal to the metal',
  'put your best foot forward',
  'put your foot down',
  'quick as a bunny',
  'quick as a lick',
  'quick as a wink',
  'quick as lightning',
  'quiet as a dormouse',
  'rags to riches',
  'raining buckets',
  'raining cats and dogs',
  'rank and file',
  'rat race',
  'reap what you sow',
  'red as a beet',
  'red herring',
  'reinvent the wheel',
  'rich and famous',
  'rings a bell',
  'ripe old age',
  'ripped me off',
  'rise and shine',
  'road to hell is paved with good intentions',
  'rob Peter to pay Paul',
  'roll over in the grave',
  'rub the wrong way',
  'ruled the roost',
  'running in circles',
  'sad but true',
  'sadder but wiser',
  'salt of the earth',
  'scared stiff',
  'scared to death',
  'sealed with a kiss',
  'second to none',
  'see eye to eye',
  'seen the light',
  'seize the day',
  'set the record straight',
  'set the world on fire',
  'set your teeth on edge',
  'sharp as a tack',
  'shoot for the moon',
  'shoot the breeze',
  'shot in the dark',
  'shoulder to the wheel',
  'sick as a dog',
  'sigh of relief',
  'signed, sealed, and delivered',
  'sink or swim',
  'six of one, half a dozen of another',
  'skating on thin ice',
  'slept like a log',
  'slinging mud',
  'slippery as an eel',
  'slow as molasses',
  'smart as a whip',
  'smooth as a baby\'s bottom',
  'sneaking suspicion',
  'snug as a bug in a rug',
  'sow wild oats',
  'spare the rod, spoil the child',
  'speak of the devil',
  'spilled the beans',
  'spinning your wheels',
  'spitting image of',
  'spoke with relish',
  'spread like wildfire',
  'spring to life',
  'squeaky wheel gets the grease',
  'stands out like a sore thumb',
  'start from scratch',
  'stick in the mud',
  'still waters run deep',
  'stitch in time',
  'stop and smell the roses',
  'straight as an arrow',
  'straw that broke the camel\'s back',
  'strong as an ox',
  'stubborn as a mule',
  'stuff that dreams are made of',
  'stuffed shirt',
  'sweating blood',
  'sweating bullets',
  'take a load off',
  'take one for the team',
  'take the bait',
  'take the bull by the horns',
  'take the plunge',
  'takes one to know one',
  'takes two to tango',
  'the more the merrier',
  'the real deal',
  'the real McCoy',
  'the red carpet treatment',
  'the same old story',
  'there is no accounting for taste',
  'thick as a brick',
  'thick as thieves',
  'thin as a rail',
  'think outside of the box',
  'third time\'s the charm',
  'this day and age',
  'this hurts me worse than it hurts you',
  'this point in time',
  'three sheets to the wind',
  'through thick and thin',
  'throw in the towel',
  'tie one on',
  'tighter than a drum',
  'time and time again',
  'time is of the essence',
  'tip of the iceberg',
  'tired but happy',
  'to coin a phrase',
  'to each his own',
  'to make a long story short',
  'to the best of my knowledge',
  'toe the line',
  'tongue in cheek',
  'too good to be true',
  'too hot to handle',
  'too numerous to mention',
  'touch with a ten foot pole',
  'tough as nails',
  'trial and error',
  'trials and tribulations',
  'tried and true',
  'trip down memory lane',
  'twist of fate',
  'two cents worth',
  'two peas in a pod',
  'ugly as sin',
  'under the counter',
  'under the gun',
  'under the same roof',
  'under the weather',
  'until the cows come home',
  'unvarnished truth',
  'up the creek',
  'uphill battle',
  'upper crust',
  'upset the applecart',
  'vain attempt',
  'vain effort',
  'vanquish the enemy',
  'vested interest',
  'waiting for the other shoe to drop',
  'wakeup call',
  'warm welcome',
  'watch your p\'s and q\'s',
  'watch your tongue',
  'watching the clock',
  'water under the bridge',
  'weather the storm',
  'weed them out',
  'week of Sundays',
  'went belly up',
  'wet behind the ears',
  'what goes around comes around',
  'what you see is what you get',
  'when it rains, it pours',
  'when push comes to shove',
  'when the cat\'s away',
  'when the going gets tough, the tough get going',
  'white as a sheet',
  'whole ball of wax',
  'whole hog',
  'whole nine yards',
  'wild goose chase',
  'will wonders never cease?',
  'wisdom of the ages',
  'wise as an owl',
  'wolf at the door',
  'words fail me',
  'work like a dog',
  'world weary',
  'worst nightmare',
  'worth its weight in gold',
  'wrong side of the bed',
  'yanking your chain',
  'yappy as a dog',
  'years young',
  'you are what you eat',
  'you can run but you can\'t hide',
  'you only live once',
  'you\'re the boss ',
  'young and foolish',
  'young and vibrant',
];

const clicheRegex = new RegExp(`\\b(${cliches.join('|')})\\b`, 'gi');
const matcher = __webpack_require__(724);

module.exports = function clichesMatcher(text) {
  return matcher(clicheRegex, text);
};


/***/ }),

/***/ 129:
/***/ (function(module) {

module.exports = require("child_process");

/***/ }),

/***/ 240:
/***/ (function(module) {

function matcher(regex, text) {
  const results = [];
  let result = regex.exec(text);

  while (result) {
    results.push({ index: result.index, offset: result[0].length });
    result = regex.exec(text);
  }

  return results;
}

module.exports = matcher;


/***/ }),

/***/ 262:
/***/ (function(module, __unusedexports, __webpack_require__) {

const adverbs = [
  'absolutel',
  'accidentall',
  'additionall',
  'allegedl',
  'alternativel',
  'angril',
  'anxiousl',
  'approximatel',
  'awkwardl',
  'badl',
  'barel',
  'beautifull',
  'blindl',
  'boldl',
  'bravel',
  'brightl',
  'briskl',
  'bristl',
  'bubbl',
  'busil',
  'calml',
  'carefull',
  'carelessl',
  'cautiousl',
  'cheerfull',
  'clearl',
  'closel',
  'coldl',
  'completel',
  'consequentl',
  'correctl',
  'courageousl',
  'crinkl',
  'cruell',
  'crumbl',
  'cuddl',
  'currentl',
  'daringl',
  'deadl',
  'definitel',
  'deliberatel',
  'doubtfull',
  'dumbl',
  'eagerl',
  'earl',
  'easil',
  'elegantl',
  'enormousl',
  'enthusiasticall',
  'equall',
  'especiall',
  'eventuall',
  'exactl',
  'exceedingl',
  'exclusivel',
  'extremel',
  'fairl',
  'faithfull',
  'fatall',
  'fiercel',
  'finall',
  'fondl',
  'foolishl',
  'fortunatel',
  'frankl',
  'franticall',
  'generousl',
  'gentl',
  'giggl',
  'gladl',
  'gracefull',
  'greedil',
  'happil',
  'hardl',
  'hastil',
  'healthil',
  'heartil',
  'helpfull',
  'honestl',
  'hourl',
  'hungril',
  'hurriedl',
  'immediatel',
  'impatientl',
  'inadequatel',
  'ingeniousl',
  'innocentl',
  'inquisitivel',
  'interestingl',
  'irritabl',
  'jiggl',
  'joyousl',
  'justl',
  'kindl',
  'largel',
  'latel',
  'lazil',
  'likel',
  'literall',
  'lonel',
  'loosel',
  'loudl',
  'loudl',
  'luckil',
  'madl',
  'man',
  'mentall',
  'mildl',
  'mortall',
  'mostl',
  'mysteriousl',
  'neatl',
  'nervousl',
  'noisil',
  'normall',
  'obedientl',
  'occasionall',
  'onl',
  'openl',
  'painfull',
  'particularl',
  'patientl',
  'perfectl',
  'politel',
  'poorl',
  'powerfull',
  'presumabl',
  'previousl',
  'promptl',
  'punctuall',
  'quarterl',
  'quickl',
  'quietl',
  'rapidl',
  'rarel',
  'reall',
  'recentl',
  'recklessl',
  'regularl',
  'relativel',
  'reluctantl',
  'remarkabl',
  'repeatedl',
  'rightfull',
  'roughl',
  'rudel',
  'sadl',
  'safel',
  'selfishl',
  'sensibl',
  'seriousl',
  'sharpl',
  'shortl',
  'shyl',
  'significantl',
  'silentl',
  'simpl',
  'sleepil',
  'slowl',
  'smartl',
  'smell',
  'smoothl',
  'softl',
  'solemnl',
  'sparkl',
  'speedil',
  'stealthil',
  'sternl',
  'stupidl',
  'substantiall',
  'successfull',
  'suddenl',
  'surprisingl',
  'suspiciousl',
  'swiftl',
  'tenderl',
  'tensel',
  'thoughtfull',
  'tightl',
  'timel',
  'truthfull',
  'unexpectedl',
  'unfortunatel',
  'usuall',
  'ver',
  'victoriousl',
  'violentl',
  'vivaciousl',
  'warml',
  'waverl',
  'weakl',
  'wearil',
  'wildl',
  'wisel',
  'worldl',
  'wrinkl'
];

const weakens = [
  'just',
  'maybe',
  'stuff',
  'things'
];

const adverbRegex = new RegExp(
  `${'\\b('
  + '('}${adverbs.join('|')})(y)`
  + `|(${weakens.join('|')}))\\b`, 'gi'
);
const matcher = __webpack_require__(835);

module.exports = function matchAdverbs(text) {
  return matcher(adverbRegex, text);
};


/***/ }),

/***/ 362:
/***/ (function(module) {

var toBe = [
    'am',
    'are',
    'aren\'t',
    'be',
    'been',
    'being',
    'he\'s',
    'here\'s',
    'here\'s',
    'how\'s',
    'i\'m',
    'is',
    'isn\'t',
    'it\'s',
    'she\'s',
    'that\'s',
    'there\'s',
    'they\'re',
    'was',
    'wasn\'t',
    'we\'re',
    'were',
    'weren\'t',
    'what\'s',
    'where\'s',
    'who\'s',
    'you\'re'
];

var re = new RegExp('\\b(' + toBe.join('|') + ')\\b', 'gi');

module.exports = function (text) {
    var suggestions = [];
    if (!text || text.length === 0) return suggestions;
    text = text.replace(/[\u2018\u2019]/g, "'"); // convert smart quotes
    while (match = re.exec(text)) {
        var be = match[0].toLowerCase();
        suggestions.push({
            index: match.index,
            offset: be.length
        });
    }

    return suggestions;
};

/***/ }),

/***/ 415:
/***/ (function(module) {

/* eslint-disable no-cond-assign */

// Opinion: I think it's gross to start written English sentences with "there (is|are)"
//          (most of the time)

// this implementation is really naive
// eslint-disable-next-line no-control-regex
const re = new RegExp('([^\n\\.;!?]+)([\\.;!?]+)', 'gi');
const startsWithThereIsRegex = new RegExp('^(\\s)*there\\b\\s(is|are)\\b', 'i');

module.exports = function startsWithThereIs(text) {
  const suggestions = [];
  let match;
  let innerMatch;

  while (match = re.exec(text)) {
    if (innerMatch = startsWithThereIsRegex.exec(match[1])) {
      suggestions.push({
        index: match.index + (innerMatch[1] || '').length,
        offset: innerMatch[0].length - (innerMatch[1] || '').length
      });
    }
  }
  return suggestions;
};


/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var EventEmitter = __webpack_require__(614).EventEmitter;
var spawn = __webpack_require__(129).spawn;
var path = __webpack_require__(622);
var dirname = path.dirname;
var basename = path.basename;
var fs = __webpack_require__(747);

/**
 * Inherit `Command` from `EventEmitter.prototype`.
 */

__webpack_require__(669).inherits(Command, EventEmitter);

/**
 * Expose the root command.
 */

exports = module.exports = new Command();

/**
 * Expose `Command`.
 */

exports.Command = Command;

/**
 * Expose `Option`.
 */

exports.Option = Option;

/**
 * Initialize a new `Option` with the given `flags` and `description`.
 *
 * @param {String} flags
 * @param {String} description
 * @api public
 */

function Option(flags, description) {
  this.flags = flags;
  this.required = flags.indexOf('<') >= 0;
  this.optional = flags.indexOf('[') >= 0;
  this.bool = flags.indexOf('-no-') === -1;
  flags = flags.split(/[ ,|]+/);
  if (flags.length > 1 && !/^[[<]/.test(flags[1])) this.short = flags.shift();
  this.long = flags.shift();
  this.description = description || '';
}

/**
 * Return option name.
 *
 * @return {String}
 * @api private
 */

Option.prototype.name = function() {
  return this.long
    .replace('--', '')
    .replace('no-', '');
};

/**
 * Return option name, in a camelcase format that can be used
 * as a object attribute key.
 *
 * @return {String}
 * @api private
 */

Option.prototype.attributeName = function() {
  return camelcase(this.name());
};

/**
 * Check if `arg` matches the short or long flag.
 *
 * @param {String} arg
 * @return {Boolean}
 * @api private
 */

Option.prototype.is = function(arg) {
  return this.short === arg || this.long === arg;
};

/**
 * Initialize a new `Command`.
 *
 * @param {String} name
 * @api public
 */

function Command(name) {
  this.commands = [];
  this.options = [];
  this._execs = {};
  this._allowUnknownOption = false;
  this._args = [];
  this._name = name || '';
}

/**
 * Add command `name`.
 *
 * The `.action()` callback is invoked when the
 * command `name` is specified via __ARGV__,
 * and the remaining arguments are applied to the
 * function for access.
 *
 * When the `name` is "*" an un-matched command
 * will be passed as the first arg, followed by
 * the rest of __ARGV__ remaining.
 *
 * Examples:
 *
 *      program
 *        .version('0.0.1')
 *        .option('-C, --chdir <path>', 'change the working directory')
 *        .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
 *        .option('-T, --no-tests', 'ignore test hook')
 *
 *      program
 *        .command('setup')
 *        .description('run remote setup commands')
 *        .action(function() {
 *          console.log('setup');
 *        });
 *
 *      program
 *        .command('exec <cmd>')
 *        .description('run the given remote command')
 *        .action(function(cmd) {
 *          console.log('exec "%s"', cmd);
 *        });
 *
 *      program
 *        .command('teardown <dir> [otherDirs...]')
 *        .description('run teardown commands')
 *        .action(function(dir, otherDirs) {
 *          console.log('dir "%s"', dir);
 *          if (otherDirs) {
 *            otherDirs.forEach(function (oDir) {
 *              console.log('dir "%s"', oDir);
 *            });
 *          }
 *        });
 *
 *      program
 *        .command('*')
 *        .description('deploy the given env')
 *        .action(function(env) {
 *          console.log('deploying "%s"', env);
 *        });
 *
 *      program.parse(process.argv);
  *
 * @param {String} name
 * @param {String} [desc] for git-style sub-commands
 * @return {Command} the new command
 * @api public
 */

Command.prototype.command = function(name, desc, opts) {
  if (typeof desc === 'object' && desc !== null) {
    opts = desc;
    desc = null;
  }
  opts = opts || {};
  var args = name.split(/ +/);
  var cmd = new Command(args.shift());

  if (desc) {
    cmd.description(desc);
    this.executables = true;
    this._execs[cmd._name] = true;
    if (opts.isDefault) this.defaultExecutable = cmd._name;
  }
  cmd._noHelp = !!opts.noHelp;
  this.commands.push(cmd);
  cmd.parseExpectedArgs(args);
  cmd.parent = this;

  if (desc) return this;
  return cmd;
};

/**
 * Define argument syntax for the top-level command.
 *
 * @api public
 */

Command.prototype.arguments = function(desc) {
  return this.parseExpectedArgs(desc.split(/ +/));
};

/**
 * Add an implicit `help [cmd]` subcommand
 * which invokes `--help` for the given command.
 *
 * @api private
 */

Command.prototype.addImplicitHelpCommand = function() {
  this.command('help [cmd]', 'display help for [cmd]');
};

/**
 * Parse expected `args`.
 *
 * For example `["[type]"]` becomes `[{ required: false, name: 'type' }]`.
 *
 * @param {Array} args
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.parseExpectedArgs = function(args) {
  if (!args.length) return;
  var self = this;
  args.forEach(function(arg) {
    var argDetails = {
      required: false,
      name: '',
      variadic: false
    };

    switch (arg[0]) {
      case '<':
        argDetails.required = true;
        argDetails.name = arg.slice(1, -1);
        break;
      case '[':
        argDetails.name = arg.slice(1, -1);
        break;
    }

    if (argDetails.name.length > 3 && argDetails.name.slice(-3) === '...') {
      argDetails.variadic = true;
      argDetails.name = argDetails.name.slice(0, -3);
    }
    if (argDetails.name) {
      self._args.push(argDetails);
    }
  });
  return this;
};

/**
 * Register callback `fn` for the command.
 *
 * Examples:
 *
 *      program
 *        .command('help')
 *        .description('display verbose help')
 *        .action(function() {
 *           // output help here
 *        });
 *
 * @param {Function} fn
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.action = function(fn) {
  var self = this;
  var listener = function(args, unknown) {
    // Parse any so-far unknown options
    args = args || [];
    unknown = unknown || [];

    var parsed = self.parseOptions(unknown);

    // Output help if necessary
    outputHelpIfNecessary(self, parsed.unknown);

    // If there are still any unknown options, then we simply
    // die, unless someone asked for help, in which case we give it
    // to them, and then we die.
    if (parsed.unknown.length > 0) {
      self.unknownOption(parsed.unknown[0]);
    }

    // Leftover arguments need to be pushed back. Fixes issue #56
    if (parsed.args.length) args = parsed.args.concat(args);

    self._args.forEach(function(arg, i) {
      if (arg.required && args[i] == null) {
        self.missingArgument(arg.name);
      } else if (arg.variadic) {
        if (i !== self._args.length - 1) {
          self.variadicArgNotLast(arg.name);
        }

        args[i] = args.splice(i);
      }
    });

    // Always append ourselves to the end of the arguments,
    // to make sure we match the number of arguments the user
    // expects
    if (self._args.length) {
      args[self._args.length] = self;
    } else {
      args.push(self);
    }

    fn.apply(self, args);
  };
  var parent = this.parent || this;
  var name = parent === this ? '*' : this._name;
  parent.on('command:' + name, listener);
  if (this._alias) parent.on('command:' + this._alias, listener);
  return this;
};

/**
 * Define option with `flags`, `description` and optional
 * coercion `fn`.
 *
 * The `flags` string should contain both the short and long flags,
 * separated by comma, a pipe or space. The following are all valid
 * all will output this way when `--help` is used.
 *
 *    "-p, --pepper"
 *    "-p|--pepper"
 *    "-p --pepper"
 *
 * Examples:
 *
 *     // simple boolean defaulting to false
 *     program.option('-p, --pepper', 'add pepper');
 *
 *     --pepper
 *     program.pepper
 *     // => Boolean
 *
 *     // simple boolean defaulting to true
 *     program.option('-C, --no-cheese', 'remove cheese');
 *
 *     program.cheese
 *     // => true
 *
 *     --no-cheese
 *     program.cheese
 *     // => false
 *
 *     // required argument
 *     program.option('-C, --chdir <path>', 'change the working directory');
 *
 *     --chdir /tmp
 *     program.chdir
 *     // => "/tmp"
 *
 *     // optional argument
 *     program.option('-c, --cheese [type]', 'add cheese [marble]');
 *
 * @param {String} flags
 * @param {String} description
 * @param {Function|*} [fn] or default
 * @param {*} [defaultValue]
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.option = function(flags, description, fn, defaultValue) {
  var self = this,
    option = new Option(flags, description),
    oname = option.name(),
    name = option.attributeName();

  // default as 3rd arg
  if (typeof fn !== 'function') {
    if (fn instanceof RegExp) {
      var regex = fn;
      fn = function(val, def) {
        var m = regex.exec(val);
        return m ? m[0] : def;
      };
    } else {
      defaultValue = fn;
      fn = null;
    }
  }

  // preassign default value only for --no-*, [optional], or <required>
  if (!option.bool || option.optional || option.required) {
    // when --no-* we make sure default is true
    if (!option.bool) defaultValue = true;
    // preassign only if we have a default
    if (defaultValue !== undefined) {
      self[name] = defaultValue;
      option.defaultValue = defaultValue;
    }
  }

  // register the option
  this.options.push(option);

  // when it's passed assign the value
  // and conditionally invoke the callback
  this.on('option:' + oname, function(val) {
    // coercion
    if (val !== null && fn) {
      val = fn(val, self[name] === undefined ? defaultValue : self[name]);
    }

    // unassigned or bool
    if (typeof self[name] === 'boolean' || typeof self[name] === 'undefined') {
      // if no value, bool true, and we have a default, then use it!
      if (val == null) {
        self[name] = option.bool
          ? defaultValue || true
          : false;
      } else {
        self[name] = val;
      }
    } else if (val !== null) {
      // reassign
      self[name] = val;
    }
  });

  return this;
};

/**
 * Allow unknown options on the command line.
 *
 * @param {Boolean} arg if `true` or omitted, no error will be thrown
 * for unknown options.
 * @api public
 */
Command.prototype.allowUnknownOption = function(arg) {
  this._allowUnknownOption = arguments.length === 0 || arg;
  return this;
};

/**
 * Parse `argv`, settings options and invoking commands when defined.
 *
 * @param {Array} argv
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.parse = function(argv) {
  // implicit help
  if (this.executables) this.addImplicitHelpCommand();

  // store raw args
  this.rawArgs = argv;

  // guess name
  this._name = this._name || basename(argv[1], '.js');

  // github-style sub-commands with no sub-command
  if (this.executables && argv.length < 3 && !this.defaultExecutable) {
    // this user needs help
    argv.push('--help');
  }

  // process argv
  var parsed = this.parseOptions(this.normalize(argv.slice(2)));
  var args = this.args = parsed.args;

  var result = this.parseArgs(this.args, parsed.unknown);

  // executable sub-commands
  var name = result.args[0];

  var aliasCommand = null;
  // check alias of sub commands
  if (name) {
    aliasCommand = this.commands.filter(function(command) {
      return command.alias() === name;
    })[0];
  }

  if (this._execs[name] === true) {
    return this.executeSubCommand(argv, args, parsed.unknown);
  } else if (aliasCommand) {
    // is alias of a subCommand
    args[0] = aliasCommand._name;
    return this.executeSubCommand(argv, args, parsed.unknown);
  } else if (this.defaultExecutable) {
    // use the default subcommand
    args.unshift(this.defaultExecutable);
    return this.executeSubCommand(argv, args, parsed.unknown);
  }

  return result;
};

/**
 * Execute a sub-command executable.
 *
 * @param {Array} argv
 * @param {Array} args
 * @param {Array} unknown
 * @api private
 */

Command.prototype.executeSubCommand = function(argv, args, unknown) {
  args = args.concat(unknown);

  if (!args.length) this.help();
  if (args[0] === 'help' && args.length === 1) this.help();

  // <cmd> --help
  if (args[0] === 'help') {
    args[0] = args[1];
    args[1] = '--help';
  }

  // executable
  var f = argv[1];
  // name of the subcommand, link `pm-install`
  var bin = basename(f, path.extname(f)) + '-' + args[0];

  // In case of globally installed, get the base dir where executable
  //  subcommand file should be located at
  var baseDir;

  var resolvedLink = fs.realpathSync(f);

  baseDir = dirname(resolvedLink);

  // prefer local `./<bin>` to bin in the $PATH
  var localBin = path.join(baseDir, bin);

  // whether bin file is a js script with explicit `.js` or `.ts` extension
  var isExplicitJS = false;
  if (exists(localBin + '.js')) {
    bin = localBin + '.js';
    isExplicitJS = true;
  } else if (exists(localBin + '.ts')) {
    bin = localBin + '.ts';
    isExplicitJS = true;
  } else if (exists(localBin)) {
    bin = localBin;
  }

  args = args.slice(1);

  var proc;
  if (process.platform !== 'win32') {
    if (isExplicitJS) {
      args.unshift(bin);
      // add executable arguments to spawn
      args = (process.execArgv || []).concat(args);

      proc = spawn(process.argv[0], args, { stdio: 'inherit', customFds: [0, 1, 2] });
    } else {
      proc = spawn(bin, args, { stdio: 'inherit', customFds: [0, 1, 2] });
    }
  } else {
    args.unshift(bin);
    proc = spawn(process.execPath, args, { stdio: 'inherit' });
  }

  var signals = ['SIGUSR1', 'SIGUSR2', 'SIGTERM', 'SIGINT', 'SIGHUP'];
  signals.forEach(function(signal) {
    process.on(signal, function() {
      if (proc.killed === false && proc.exitCode === null) {
        proc.kill(signal);
      }
    });
  });
  proc.on('close', process.exit.bind(process));
  proc.on('error', function(err) {
    if (err.code === 'ENOENT') {
      console.error('error: %s(1) does not exist, try --help', bin);
    } else if (err.code === 'EACCES') {
      console.error('error: %s(1) not executable. try chmod or run with root', bin);
    }
    process.exit(1);
  });

  // Store the reference to the child process
  this.runningCommand = proc;
};

/**
 * Normalize `args`, splitting joined short flags. For example
 * the arg "-abc" is equivalent to "-a -b -c".
 * This also normalizes equal sign and splits "--abc=def" into "--abc def".
 *
 * @param {Array} args
 * @return {Array}
 * @api private
 */

Command.prototype.normalize = function(args) {
  var ret = [],
    arg,
    lastOpt,
    index;

  for (var i = 0, len = args.length; i < len; ++i) {
    arg = args[i];
    if (i > 0) {
      lastOpt = this.optionFor(args[i - 1]);
    }

    if (arg === '--') {
      // Honor option terminator
      ret = ret.concat(args.slice(i));
      break;
    } else if (lastOpt && lastOpt.required) {
      ret.push(arg);
    } else if (arg.length > 1 && arg[0] === '-' && arg[1] !== '-') {
      arg.slice(1).split('').forEach(function(c) {
        ret.push('-' + c);
      });
    } else if (/^--/.test(arg) && ~(index = arg.indexOf('='))) {
      ret.push(arg.slice(0, index), arg.slice(index + 1));
    } else {
      ret.push(arg);
    }
  }

  return ret;
};

/**
 * Parse command `args`.
 *
 * When listener(s) are available those
 * callbacks are invoked, otherwise the "*"
 * event is emitted and those actions are invoked.
 *
 * @param {Array} args
 * @return {Command} for chaining
 * @api private
 */

Command.prototype.parseArgs = function(args, unknown) {
  var name;

  if (args.length) {
    name = args[0];
    if (this.listeners('command:' + name).length) {
      this.emit('command:' + args.shift(), args, unknown);
    } else {
      this.emit('command:*', args);
    }
  } else {
    outputHelpIfNecessary(this, unknown);

    // If there were no args and we have unknown options,
    // then they are extraneous and we need to error.
    if (unknown.length > 0) {
      this.unknownOption(unknown[0]);
    }
    if (this.commands.length === 0 &&
        this._args.filter(function(a) { return a.required; }).length === 0) {
      this.emit('command:*');
    }
  }

  return this;
};

/**
 * Return an option matching `arg` if any.
 *
 * @param {String} arg
 * @return {Option}
 * @api private
 */

Command.prototype.optionFor = function(arg) {
  for (var i = 0, len = this.options.length; i < len; ++i) {
    if (this.options[i].is(arg)) {
      return this.options[i];
    }
  }
};

/**
 * Parse options from `argv` returning `argv`
 * void of these options.
 *
 * @param {Array} argv
 * @return {Array}
 * @api public
 */

Command.prototype.parseOptions = function(argv) {
  var args = [],
    len = argv.length,
    literal,
    option,
    arg;

  var unknownOptions = [];

  // parse options
  for (var i = 0; i < len; ++i) {
    arg = argv[i];

    // literal args after --
    if (literal) {
      args.push(arg);
      continue;
    }

    if (arg === '--') {
      literal = true;
      continue;
    }

    // find matching Option
    option = this.optionFor(arg);

    // option is defined
    if (option) {
      // requires arg
      if (option.required) {
        arg = argv[++i];
        if (arg == null) return this.optionMissingArgument(option);
        this.emit('option:' + option.name(), arg);
      // optional arg
      } else if (option.optional) {
        arg = argv[i + 1];
        if (arg == null || (arg[0] === '-' && arg !== '-')) {
          arg = null;
        } else {
          ++i;
        }
        this.emit('option:' + option.name(), arg);
      // bool
      } else {
        this.emit('option:' + option.name());
      }
      continue;
    }

    // looks like an option
    if (arg.length > 1 && arg[0] === '-') {
      unknownOptions.push(arg);

      // If the next argument looks like it might be
      // an argument for this option, we pass it on.
      // If it isn't, then it'll simply be ignored
      if ((i + 1) < argv.length && argv[i + 1][0] !== '-') {
        unknownOptions.push(argv[++i]);
      }
      continue;
    }

    // arg
    args.push(arg);
  }

  return { args: args, unknown: unknownOptions };
};

/**
 * Return an object containing options as key-value pairs
 *
 * @return {Object}
 * @api public
 */
Command.prototype.opts = function() {
  var result = {},
    len = this.options.length;

  for (var i = 0; i < len; i++) {
    var key = this.options[i].attributeName();
    result[key] = key === this._versionOptionName ? this._version : this[key];
  }
  return result;
};

/**
 * Argument `name` is missing.
 *
 * @param {String} name
 * @api private
 */

Command.prototype.missingArgument = function(name) {
  console.error("error: missing required argument `%s'", name);
  process.exit(1);
};

/**
 * `Option` is missing an argument, but received `flag` or nothing.
 *
 * @param {String} option
 * @param {String} flag
 * @api private
 */

Command.prototype.optionMissingArgument = function(option, flag) {
  if (flag) {
    console.error("error: option `%s' argument missing, got `%s'", option.flags, flag);
  } else {
    console.error("error: option `%s' argument missing", option.flags);
  }
  process.exit(1);
};

/**
 * Unknown option `flag`.
 *
 * @param {String} flag
 * @api private
 */

Command.prototype.unknownOption = function(flag) {
  if (this._allowUnknownOption) return;
  console.error("error: unknown option `%s'", flag);
  process.exit(1);
};

/**
 * Variadic argument with `name` is not the last argument as required.
 *
 * @param {String} name
 * @api private
 */

Command.prototype.variadicArgNotLast = function(name) {
  console.error("error: variadic arguments must be last `%s'", name);
  process.exit(1);
};

/**
 * Set the program version to `str`.
 *
 * This method auto-registers the "-V, --version" flag
 * which will print the version number when passed.
 *
 * @param {String} str
 * @param {String} [flags]
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.version = function(str, flags) {
  if (arguments.length === 0) return this._version;
  this._version = str;
  flags = flags || '-V, --version';
  var versionOption = new Option(flags, 'output the version number');
  this._versionOptionName = versionOption.long.substr(2) || 'version';
  this.options.push(versionOption);
  this.on('option:' + this._versionOptionName, function() {
    process.stdout.write(str + '\n');
    process.exit(0);
  });
  return this;
};

/**
 * Set the description to `str`.
 *
 * @param {String} str
 * @param {Object} argsDescription
 * @return {String|Command}
 * @api public
 */

Command.prototype.description = function(str, argsDescription) {
  if (arguments.length === 0) return this._description;
  this._description = str;
  this._argsDescription = argsDescription;
  return this;
};

/**
 * Set an alias for the command
 *
 * @param {String} alias
 * @return {String|Command}
 * @api public
 */

Command.prototype.alias = function(alias) {
  var command = this;
  if (this.commands.length !== 0) {
    command = this.commands[this.commands.length - 1];
  }

  if (arguments.length === 0) return command._alias;

  if (alias === command._name) throw new Error('Command alias can\'t be the same as its name');

  command._alias = alias;
  return this;
};

/**
 * Set / get the command usage `str`.
 *
 * @param {String} str
 * @return {String|Command}
 * @api public
 */

Command.prototype.usage = function(str) {
  var args = this._args.map(function(arg) {
    return humanReadableArgName(arg);
  });

  var usage = '[options]' +
    (this.commands.length ? ' [command]' : '') +
    (this._args.length ? ' ' + args.join(' ') : '');

  if (arguments.length === 0) return this._usage || usage;
  this._usage = str;

  return this;
};

/**
 * Get or set the name of the command
 *
 * @param {String} str
 * @return {String|Command}
 * @api public
 */

Command.prototype.name = function(str) {
  if (arguments.length === 0) return this._name;
  this._name = str;
  return this;
};

/**
 * Return prepared commands.
 *
 * @return {Array}
 * @api private
 */

Command.prototype.prepareCommands = function() {
  return this.commands.filter(function(cmd) {
    return !cmd._noHelp;
  }).map(function(cmd) {
    var args = cmd._args.map(function(arg) {
      return humanReadableArgName(arg);
    }).join(' ');

    return [
      cmd._name +
        (cmd._alias ? '|' + cmd._alias : '') +
        (cmd.options.length ? ' [options]' : '') +
        (args ? ' ' + args : ''),
      cmd._description
    ];
  });
};

/**
 * Return the largest command length.
 *
 * @return {Number}
 * @api private
 */

Command.prototype.largestCommandLength = function() {
  var commands = this.prepareCommands();
  return commands.reduce(function(max, command) {
    return Math.max(max, command[0].length);
  }, 0);
};

/**
 * Return the largest option length.
 *
 * @return {Number}
 * @api private
 */

Command.prototype.largestOptionLength = function() {
  var options = [].slice.call(this.options);
  options.push({
    flags: '-h, --help'
  });
  return options.reduce(function(max, option) {
    return Math.max(max, option.flags.length);
  }, 0);
};

/**
 * Return the largest arg length.
 *
 * @return {Number}
 * @api private
 */

Command.prototype.largestArgLength = function() {
  return this._args.reduce(function(max, arg) {
    return Math.max(max, arg.name.length);
  }, 0);
};

/**
 * Return the pad width.
 *
 * @return {Number}
 * @api private
 */

Command.prototype.padWidth = function() {
  var width = this.largestOptionLength();
  if (this._argsDescription && this._args.length) {
    if (this.largestArgLength() > width) {
      width = this.largestArgLength();
    }
  }

  if (this.commands && this.commands.length) {
    if (this.largestCommandLength() > width) {
      width = this.largestCommandLength();
    }
  }

  return width;
};

/**
 * Return help for options.
 *
 * @return {String}
 * @api private
 */

Command.prototype.optionHelp = function() {
  var width = this.padWidth();

  // Append the help information
  return this.options.map(function(option) {
    return pad(option.flags, width) + '  ' + option.description +
      ((option.bool && option.defaultValue !== undefined) ? ' (default: ' + JSON.stringify(option.defaultValue) + ')' : '');
  }).concat([pad('-h, --help', width) + '  ' + 'output usage information'])
    .join('\n');
};

/**
 * Return command help documentation.
 *
 * @return {String}
 * @api private
 */

Command.prototype.commandHelp = function() {
  if (!this.commands.length) return '';

  var commands = this.prepareCommands();
  var width = this.padWidth();

  return [
    'Commands:',
    commands.map(function(cmd) {
      var desc = cmd[1] ? '  ' + cmd[1] : '';
      return (desc ? pad(cmd[0], width) : cmd[0]) + desc;
    }).join('\n').replace(/^/gm, '  '),
    ''
  ].join('\n');
};

/**
 * Return program help documentation.
 *
 * @return {String}
 * @api private
 */

Command.prototype.helpInformation = function() {
  var desc = [];
  if (this._description) {
    desc = [
      this._description,
      ''
    ];

    var argsDescription = this._argsDescription;
    if (argsDescription && this._args.length) {
      var width = this.padWidth();
      desc.push('Arguments:');
      desc.push('');
      this._args.forEach(function(arg) {
        desc.push('  ' + pad(arg.name, width) + '  ' + argsDescription[arg.name]);
      });
      desc.push('');
    }
  }

  var cmdName = this._name;
  if (this._alias) {
    cmdName = cmdName + '|' + this._alias;
  }
  var usage = [
    'Usage: ' + cmdName + ' ' + this.usage(),
    ''
  ];

  var cmds = [];
  var commandHelp = this.commandHelp();
  if (commandHelp) cmds = [commandHelp];

  var options = [
    'Options:',
    '' + this.optionHelp().replace(/^/gm, '  '),
    ''
  ];

  return usage
    .concat(desc)
    .concat(options)
    .concat(cmds)
    .join('\n');
};

/**
 * Output help information for this command
 *
 * @api public
 */

Command.prototype.outputHelp = function(cb) {
  if (!cb) {
    cb = function(passthru) {
      return passthru;
    };
  }
  process.stdout.write(cb(this.helpInformation()));
  this.emit('--help');
};

/**
 * Output help information and exit.
 *
 * @api public
 */

Command.prototype.help = function(cb) {
  this.outputHelp(cb);
  process.exit();
};

/**
 * Camel-case the given `flag`
 *
 * @param {String} flag
 * @return {String}
 * @api private
 */

function camelcase(flag) {
  return flag.split('-').reduce(function(str, word) {
    return str + word[0].toUpperCase() + word.slice(1);
  });
}

/**
 * Pad `str` to `width`.
 *
 * @param {String} str
 * @param {Number} width
 * @return {String}
 * @api private
 */

function pad(str, width) {
  var len = Math.max(0, width - str.length);
  return str + Array(len + 1).join(' ');
}

/**
 * Output help information if necessary
 *
 * @param {Command} command to output help for
 * @param {Array} array of options to search for -h or --help
 * @api private
 */

function outputHelpIfNecessary(cmd, options) {
  options = options || [];
  for (var i = 0; i < options.length; i++) {
    if (options[i] === '--help' || options[i] === '-h') {
      cmd.outputHelp();
      process.exit(0);
    }
  }
}

/**
 * Takes an argument an returns its human readable equivalent for help usage.
 *
 * @param {Object} arg
 * @return {String}
 * @api private
 */

function humanReadableArgName(arg) {
  var nameOutput = arg.name + (arg.variadic === true ? '...' : '');

  return arg.required
    ? '<' + nameOutput + '>'
    : '[' + nameOutput + ']';
}

// for versions before node v0.8 when there weren't `fs.existsSync`
function exists(file) {
  try {
    if (fs.statSync(file).isFile()) {
      return true;
    }
  } catch (e) {
    return false;
  }
}


/***/ }),

/***/ 471:
/***/ (function(module) {

// via http://matt.might.net/articles/shell-scripts-for-passive-voice-weasel-words-duplicates/

// Example:
// Many readers are not aware that the
// the brain will automatically ignore
// a second instance of the word "the"
// when it starts a new line.
const re = new RegExp('(\\s*)([^\\s]+)', 'gi');
const word = /\w+/;

module.exports = function lexicalIllusions(text) {
  const suggestions = [];
  let lastMatch = '';
  let match;

  // eslint-disable-next-line no-cond-assign
  while (match = re.exec(text)) {
    if (word.test(match[2]) && match[2].toLowerCase() === lastMatch) {
      suggestions.push({
        index: match.index + match[1].length,
        offset: match[2].length
      });
    }
    lastMatch = match[2].toLowerCase();
  }

  return suggestions;
};


/***/ }),

/***/ 475:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

/* eslint-disable no-console */

const program = __webpack_require__(444);
const fs = __webpack_require__(747);
const packageJson = __webpack_require__(864);
const writeGood = __webpack_require__(982);
const annotate = __webpack_require__(999);

program
  .version(packageJson.version)
  .usage('[options] <file ...>')
  .description('write-good is a naive linter for English prose.')
  .option('--checks <module>',
    `add a custom checks module.
    If you specify such a module, write-good will support additional options to (de)activate checks of the custom module.`,
    { isDefault: true })
  .option(
    '--text <text>',
    'provide direct text input instead of glob/file name'
  )
  .option(
    '--parse',
    'activate parse-happy output and a more conventional Unix exit code'
  );

const args = process.argv.slice(2);
const checksArg = args.find(arg => arg.startsWith('--checks'));

const checksModule = checksArg ? checksArg.replace('--checks=', '') : undefined;

const checks = [ // default checks
  ['weasel', 'weasel word'],
  ['illusion', 'lexical illusion'],
  ['so', 'so'],
  ['thereIs', 'there is'],
  ['passive', 'passive voice'],
  ['adverb', 'adverb weakens meaning'],
  ['tooWordy', 'too wordy'],
  ['cliches', 'clichés']
];

function generateDeactivationDescription(checkName) {
  return `deactivate the '${checkName}' check`;
}

function generateActivationDescription(checkName) {
  return `activate the '${checkName}' check and `
    + 'deactivate all other checks that aren\'t explicitly activated';
}
let opts = {};

function generateCheckOptions(checkParams) {
  const checkOption = Array.isArray(checkParams) ? checkParams[0] : checkParams;
  const checkName = Array.isArray(checkParams) ? checkParams[1] : checkParams;
  program
    .option(
      `--no-${checkOption}`,
      generateDeactivationDescription(checkName),
      { isDefault: true }
    )
    .option(
      `--${checkOption}`,
      generateActivationDescription(checkName),
      { isDefault: true }
    );
  opts[checkOption] = null;
}

if (!checksModule) {
  opts = {
    eprime: false // user must opt-in
  };
  program
    .option(
      '--eprime',
      generateActivationDescription('E-Prime')
    )
    .option(
      '--yes-eprime',
      "activate 'E-Prime' check, without deactivating the other checks"
    );
  checks.forEach(generateCheckOptions);
} else { // set custom ops, for example to lint a non-English document
  try {
    /* eslint-disable-next-line import/no-dynamic-require, global-require */
    opts.checks = require(checksModule);
  } catch (e) {
    console.log(
      'Could not import custom check module. '
      + 'Check for spelling errors and make sure you have the module installed.'
    );
    process.exit(1);
  }
  // dynamically set up custom options
  Object.keys(opts.checks).forEach(generateCheckOptions);
}

const files = program.parse(process.argv).args;
// 'parse' is a commander.js edge case:
const shouldParse = Object.keys(program).indexOf('parse') !== -1;

const hasTextArg = args.some(arg => arg.startsWith('--text'));
if (files.length === 0 && !hasTextArg) {
  console.log('You did not provide any files to check.');
  process.exit(1);
}

const hasChecks = args.some(arg => arg.startsWith('--checks'));

function handleInvalidArgument(arg) {
  console.log(`"${arg}" is not a valid argument.`);
  process.exit(1);
}

if (hasChecks) {
  // validate base args and infer valid check args from the imported custom check module
  args.slice(1).forEach((arg) => {
    if (arg.startsWith('--text') || arg.startsWith('--checks') || arg === '--parse') return;
    const isValid = Object.keys(opts.checks).some(check => arg === `--${check}` || arg === `--no-${check}`);
    if (!isValid) {
      handleInvalidArgument(arg);
    }
  });
} else {
  const optionArgs = args.filter(arg => !files.includes(arg));
  // validate default args if no custom checks module is provided
  optionArgs.forEach((arg) => {
    if (arg.startsWith('--text')) return;
    const isValid = program.options.some(option => arg === option.long || arg === option.short);
    if (!isValid) {
      handleInvalidArgument(arg);
    }
  });
}

let include = true;
let inputSupplied = files.length;
let textInputSupplied = false;

args.filter(arg => arg.substr(0, 2) === '--').map(arg => arg.substr(2)).forEach((arg) => {
  if (arg.indexOf('text=') !== -1) {
    opts[arg.substr(0, 4)] = arg.substr(5);
    // eslint-disable-next-line no-multi-assign
    textInputSupplied = inputSupplied = true;
  } else if (arg.substr(0, 3) === 'no-') {
    opts[arg.substr(3)] = false;
  } else if (arg.substr(0, 4) === 'yes-') {
    opts[arg.substr(4)] = true;
  } else if (arg === 'parse') {
    // no opt
  } else if (arg.indexOf('checks=') === -1) {
    opts[arg] = true;
    include = false;
  }
});

Object.keys(opts).forEach((name) => {
  if (typeof opts[name] !== 'boolean'
  && name !== 'text' // --text="text to check"
  && name !== 'checks') { // --checks="custom-check-module"
    opts[name] = include;
  }
});

if (!inputSupplied) {
  console.log('You did not provide any input (file or text) to check');
  process.exit(1);
}

let exitCode = 0;

function displaySuggestions(source, contents, options) {
  const suggestions = writeGood(contents, options);

  if (shouldParse) {
    exitCode = suggestions.length > 0 ? -1 : 0;
    console.log(annotate(contents, suggestions, true).map(ann => [source, ann.line, ann.col, ann.reason.replace('\n', ' ')].join(':')).join('\n'));
  } else {
    exitCode += suggestions.length;
    if (suggestions.length) {
      console.log(`In ${source}`);
      console.log('=============');
      console.log(annotate(contents, suggestions).join('\n-------------\n'));
    }
  }
}

if (textInputSupplied) {
  displaySuggestions('text', opts.text, opts);
} else {
  files.forEach((file) => {
    if (fs.lstatSync(file).isFile()) {
      const contents = fs.readFileSync(file, 'utf8');
      displaySuggestions(file, contents, opts);
    }
  });
}

process.exit(exitCode);


/***/ }),

/***/ 564:
/***/ (function(module) {

var irregulars = [
  'awoken',
  'been',
  'born',
  'beat',
  'become',
  'begun',
  'bent',
  'beset',
  'bet',
  'bid',
  'bidden',
  'bound',
  'bitten',
  'bled',
  'blown',
  'broken',
  'bred',
  'brought',
  'broadcast',
  'built',
  'burnt',
  'burst',
  'bought',
  'cast',
  'caught',
  'chosen',
  'clung',
  'come',
  'cost',
  'crept',
  'cut',
  'dealt',
  'dug',
  'dived',
  'done',
  'drawn',
  'dreamt',
  'driven',
  'drunk',
  'eaten',
  'fallen',
  'fed',
  'felt',
  'fought',
  'found',
  'fit',
  'fled',
  'flung',
  'flown',
  'forbidden',
  'forgotten',
  'foregone',
  'forgiven',
  'forsaken',
  'frozen',
  'gotten',
  'given',
  'gone',
  'ground',
  'grown',
  'hung',
  'heard',
  'hidden',
  'hit',
  'held',
  'hurt',
  'kept',
  'knelt',
  'knit',
  'known',
  'laid',
  'led',
  'leapt',
  'learnt',
  'left',
  'lent',
  'let',
  'lain',
  'lighted',
  'lost',
  'made',
  'meant',
  'met',
  'misspelt',
  'mistaken',
  'mown',
  'overcome',
  'overdone',
  'overtaken',
  'overthrown',
  'paid',
  'pled',
  'proven',
  'put',
  'quit',
  'read',
  'rid',
  'ridden',
  'rung',
  'risen',
  'run',
  'sawn',
  'said',
  'seen',
  'sought',
  'sold',
  'sent',
  'set',
  'sewn',
  'shaken',
  'shaven',
  'shorn',
  'shed',
  'shone',
  'shod',
  'shot',
  'shown',
  'shrunk',
  'shut',
  'sung',
  'sunk',
  'sat',
  'slept',
  'slain',
  'slid',
  'slung',
  'slit',
  'smitten',
  'sown',
  'spoken',
  'sped',
  'spent',
  'spilt',
  'spun',
  'spit',
  'split',
  'spread',
  'sprung',
  'stood',
  'stolen',
  'stuck',
  'stung',
  'stunk',
  'stridden',
  'struck',
  'strung',
  'striven',
  'sworn',
  'swept',
  'swollen',
  'swum',
  'swung',
  'taken',
  'taught',
  'torn',
  'told',
  'thought',
  'thrived',
  'thrown',
  'thrust',
  'trodden',
  'understood',
  'upheld',
  'upset',
  'woken',
  'worn',
  'woven',
  'wed',
  'wept',
  'wound',
  'won',
  'withheld',
  'withstood',
  'wrung',
  'written'
];

var exceptions = [
  'indeed',
];

var re = new RegExp('\\b(am|are|were|being|is|been|was|be)\\b\\s*([\\w]+ed|' + irregulars.join('|') + ')\\b', 'gi');
var byRe; // lazly construct

module.exports = function (text, options) {
  var r = (options && options.by) ?
          (byRe || constructByRe()) : re; // not sorry

  var suggestions = [];
  while (match = r.exec(text)) {
    if (exceptions.indexOf(match[2].toLowerCase()) === -1) {
      suggestions.push({
        index: match.index,
        offset: match[0].length
      });
    }
  }
  return suggestions;
}

// lol
function constructByRe () {
  return byRe = new RegExp(re.toString().slice(1, -3) + '\\s*by\\b', 'gi');
}


/***/ }),

/***/ 614:
/***/ (function(module) {

module.exports = require("events");

/***/ }),

/***/ 622:
/***/ (function(module) {

module.exports = require("path");

/***/ }),

/***/ 624:
/***/ (function(module, __unusedexports, __webpack_require__) {

const matcher = __webpack_require__(240);

const wordyWords = [
  'a number of',
  'abundance',
  'accede to',
  'accelerate',
  'accentuate',
  'accompany',
  'accomplish',
  'accorded',
  'accrue',
  'acquiesce',
  'acquire',
  'additional',
  'adjacent to',
  'adjustment',
  'admissible',
  'advantageous',
  'adversely impact',
  'advise',
  'aforementioned',
  'aggregate',
  'aircraft',
  'all of',
  'all things considered',
  'alleviate',
  'allocate',
  'along the lines of',
  'already existing',
  'alternatively',
  'amazing',
  'ameliorate',
  'anticipate',
  'apparent',
  'appreciable',
  'as a matter of fact',
  'as a means of',
  'as far as I\'m concerned',
  'as of yet',
  'as to',
  'as yet',
  'ascertain',
  'assistance',
  'at the present time',
  'at this time',
  'attain',
  'attributable to',
  'authorize',
  'because of the fact that',
  'belated',
  'benefit from',
  'bestow',
  'by means of',
  'by virtue of the fact that',
  'by virtue of',
  'cease',
  'close proximity',
  'commence',
  'comply with',
  'concerning',
  'consequently',
  'consolidate',
  'constitutes',
  'demonstrate',
  'depart',
  'designate',
  'discontinue',
  'due to the fact that',
  'each and every',
  'economical',
  'eliminate',
  'elucidate',
  'employ',
  'endeavor',
  'enumerate',
  'equitable',
  'equivalent',
  'evaluate',
  'evidenced',
  'exclusively',
  'expedite',
  'expend',
  'expiration',
  'facilitate',
  'factual evidence',
  'feasible',
  'finalize',
  'first and foremost',
  'for all intents and purposes',
  'for the most part',
  'for the purpose of',
  'forfeit',
  'formulate',
  'have a tendency to',
  'honest truth',
  'however',
  'if and when',
  'impacted',
  'implement',
  'in a manner of speaking',
  'in a timely manner',
  'in a very real sense',
  'in accordance with',
  'in addition',
  'in all likelihood',
  'in an effort to',
  'in between',
  'in excess of',
  'in lieu of',
  'in light of the fact that',
  'in many cases',
  'in my opinion',
  'in order to',
  'in regard to',
  'in some instances',
  'in terms of',
  'in the case of ',
  'in the event that',
  'in the final analysis',
  'in the nature of',
  'in the near future',
  'in the process of',
  'inception',
  'incumbent upon',
  'indicate',
  'indication',
  'initiate',
  'irregardless',
  'is applicable to',
  'is authorized to',
  'is responsible for',
  'it is essential',
  'it is',
  'it seems that',
  'it was',
  'magnitude',
  'maximum',
  'methodology',
  'minimize',
  'minimum',
  'modify',
  'monitor',
  'multiple',
  'necessitate',
  'nevertheless',
  'not certain',
  'not many',
  'not often',
  'not unless',
  'not unlike',
  'notwithstanding',
  'null and void',
  'numerous',
  'objective',
  'obligate',
  'obtain',
  'on the contrary',
  'on the other hand',
  'one particular',
  'optimum',
  'overall',
  'owing to the fact that',
  'participate',
  'particulars',
  'pass away',
  'pertaining to',
  'point in time',
  'portion',
  'possess',
  'preclude',
  'previously',
  'prior to',
  'prioritize',
  'procure',
  'proficiency',
  'provided that',
  'purchase',
  'put simply',
  'readily apparent',
  'refer back',
  'regarding',
  'relocate',
  'remainder',
  'remuneration',
  'requirement',
  'reside',
  'residence',
  'retain',
  'satisfy',
  'shall',
  'should you wish',
  'similar to',
  'solicit',
  'span across',
  'strategize',
  'subsequent',
  'substantial',
  'successfully complete',
  'sufficient',
  'terminate',
  'the month of',
  'the point I am trying to make',
  'therefore',
  'time period',
  'took advantage of',
  'transmit',
  'transpire',
  'type of',
  'until such time as',
  'utilization',
  'utilize',
  'validate',
  'various different',
  'what I mean to say is',
  'whether or not',
  'with respect to',
  'with the exception of',
  'witnessed'
];

const wordyRegex = new RegExp(`\\b(${wordyWords.join('|')})\\b`, 'gi');

module.exports = function isTextWordy(text) {
  return matcher(wordyRegex, text);
};


/***/ }),

/***/ 669:
/***/ (function(module) {

module.exports = require("util");

/***/ }),

/***/ 724:
/***/ (function(module) {

function matcher(regex, text) {
  const results = [];
  let result = regex.exec(text);

  while (result) {
    results.push({ index: result.index, offset: result[0].length });
    result = regex.exec(text);
  }

  return results;
}

module.exports = matcher;


/***/ }),

/***/ 747:
/***/ (function(module) {

module.exports = require("fs");

/***/ }),

/***/ 835:
/***/ (function(module) {

function matcher(regex, text) {
  const results = [];
  let result = regex.exec(text);

  while (result) {
    results.push({ index: result.index, offset: result[0].length });
    result = regex.exec(text);
  }

  return results;
}

module.exports = matcher;


/***/ }),

/***/ 864:
/***/ (function(module) {

module.exports = {"name":"write-good","version":"1.0.2","description":"Naive linter for English prose","main":"write-good.js","repository":{"type":"git","url":"https://github.com/btford/write-good.git"},"bin":{"write-good":"bin/write-good.js","writegood":"bin/write-good.js"},"engines":{"node":">=6","npm":">=5"},"directories":{"test":"test"},"scripts":{"test":"npm run lint && ./node_modules/.bin/jasmine-node test","lint":"eslint ./ --fix"},"keywords":["english","writing","prose","words","grammar"],"author":"Brian Ford","contributors":[{"name":"Richard Littauer","email":"richard@maintainer.io","url":"https://burntfen.com"},{"name":"Matt Blair","email":"matt@mattblair.co","url":"https://blog.mattblair.co"},{"name":"Timotheus Kampik","email":"","url":"timotheuskampik.de"}],"license":"MIT","devDependencies":{"eslint":"^5.12.0","eslint-config-airbnb":"^17.1.0","eslint-plugin-import":"^2.14.0","eslint-plugin-jsx-a11y":"^6.1.2","eslint-plugin-react":"^7.12.4","jasmine-node":"^2.0.1","schreib-gut":"0.0.1"},"dependencies":{"adverb-where":"^0.2.1","commander":"^2.19.0","e-prime":"^0.10.2","no-cliches":"^0.2.2","passive-voice":"^0.1.0","too-wordy":"^0.2.2","weasel-words":"^0.1.1"},"coordinates":[45.51921480000001,-73.5789434],"_resolved":"https://registry.npmjs.org/write-good/-/write-good-1.0.2.tgz","_integrity":"sha512-1gm9Ouz7mBROF7aC8vvSm/3JtPfTiZ+fegPGCKdxsYhf6VYeStHfVFx2Hnj2kJviHPx5zZkiQ8DytzZMP0Zqwg==","_from":"write-good@1.0.2"};

/***/ }),

/***/ 978:
/***/ (function(module) {

/* eslint-disable no-cond-assign */

// Opinion: I think it's gross to start written English independent clauses with "so"
//          most of the time. Maybe it's okay in spoken English.
//
// More on "so:"
// * http://www.nytimes.com/2010/05/22/us/22iht-currents.html?_r=0
// * http://comminfo.rutgers.edu/images/comprofiler/plug_profilegallery/84/pg_2103855866.pdf

// this implementation is really naive
// eslint-disable-next-line no-control-regex
const re = new RegExp('([^\n\\.;!?]+)([\\.;!?]+)', 'gi');
const startsWithSoRegex = new RegExp('^(\\s)*so\\b[\\s\\S]', 'i');

module.exports = function startsWithSo(text) {
  const suggestions = [];
  let match;
  let innerMatch;

  while (match = re.exec(text)) {
    if (innerMatch = startsWithSoRegex.exec(match[1])) {
      suggestions.push({
        index: match.index + (innerMatch[1] || '').length,
        offset: 2
      });
    }
  }
  return suggestions;
};


/***/ }),

/***/ 982:
/***/ (function(module, __unusedexports, __webpack_require__) {

const weaselWords = __webpack_require__(0);
const passiveVoice = __webpack_require__(564);
const adverbWhere = __webpack_require__(262);
const tooWordy = __webpack_require__(624);
const noCliches = __webpack_require__(60);
const ePrime = __webpack_require__(362);

const lexicalIllusions = __webpack_require__(471);
const startsWithSo = __webpack_require__(978);
const thereIs = __webpack_require__(415);

const defaultChecks = {
  weasel: { fn: weaselWords, explanation: 'is a weasel word' },
  illusion: { fn: lexicalIllusions, explanation: 'is repeated' },
  so: { fn: startsWithSo, explanation: 'adds no meaning' },
  thereIs: { fn: thereIs, explanation: 'is unnecessary verbiage' },
  passive: { fn: passiveVoice, explanation: 'may be passive voice' },
  adverb: { fn: adverbWhere, explanation: 'can weaken meaning' },
  tooWordy: { fn: tooWordy, explanation: 'is wordy or unneeded' },
  cliches: { fn: noCliches, explanation: 'is a cliche' },
  eprime: { fn: ePrime, explanation: 'is a form of \'to be\'' }
};

// User must explicitly opt-in
const disabledChecks = {
  eprime: false
};

function filter(text, suggestions, whitelistTerms = []) {
  const whitelistSlices = whitelistTerms.reduce((memo, term) => {
    let index = text.indexOf(term);
    while (index > 0) {
      memo.push({ from: index, to: index + term.length });
      index = text.indexOf(term, index + 1);
    }
    return memo;
  }, []);

  return suggestions.reduce((memo, suggestion) => {
    if (!whitelistSlices.find((slice) => {
      const suggestionFrom = suggestion.index;
      const suggestionTo = suggestion.index + suggestion.offset;
      return (
        // suggestion covers entire whitelist term
        suggestionFrom <= slice.from && suggestionTo >= slice.to
      ) || (
        // suggestion starts within whitelist term
        suggestionFrom >= slice.from && suggestionFrom <= slice.to
      ) || (
        // suggestion ends within whitelist term
        suggestionTo >= slice.from && suggestionTo <= slice.to
      );
    })) {
      memo.push(suggestion);
    }
    return memo;
  }, []);
}

function dedup(suggestions) {
  const dupsHash = {};

  return suggestions.reduce((memo, suggestion) => {
    const key = `${suggestion.index}:${suggestion.offset}`;
    if (!dupsHash[key]) {
      dupsHash[key] = suggestion;
      memo.push(suggestion);
    } else {
      dupsHash[key].reason += ` and ${suggestion.reason.substring(suggestion.offset + 3)}`;
    }
    return memo;
  }, []);
}

function reasonable(text, reason) {
  return function reasonableSuggestion(suggestion) {
    // eslint-disable-next-line no-param-reassign
    suggestion.reason = `"${
      text.substr(suggestion.index, suggestion.offset)
    }" ${reason}`;
    return suggestion;
  };
}

module.exports = function writeGood(text, opts = {}) {
  const finalOpts = {};
  const defaultOpts = Object.assign({}, disabledChecks, opts);
  Object.keys(defaultOpts).forEach((optKey) => {
    if (optKey !== 'checks') {
      finalOpts[optKey] = defaultOpts[optKey];
    }
  });

  const finalChecks = opts.checks || defaultChecks;

  let suggestions = [];
  Object.keys(finalChecks).forEach((checkName) => {
    if (finalOpts[checkName] !== false) {
      suggestions = suggestions.concat(
        finalChecks[checkName]
          .fn(text)
          .map(reasonable(text, finalChecks[checkName].explanation))
      );
    }
  });

  const filtered = filter(text, suggestions, opts.whitelist);

  return dedup(filtered).sort((a, b) => (a.index < b.index ? -1 : 1));
};

module.exports.annotate = __webpack_require__(999);


/***/ }),

/***/ 999:
/***/ (function(module) {

function repeatChar(ch, times) {
  let str = '';
  for (let i = times; i > 0; i--) {
    str += ch;
  }
  return str;
}

function generateStartOfLineIndex(line, lines) {
  const x = lines.slice(0);
  x.splice(line - 1);
  return x.join('\n').length + (x.length > 0);
}

function findLineColumn(contents, lines, index) {
  const line = contents.substr(0, index).split('\n').length;
  const startOfLineIndex = generateStartOfLineIndex(line, lines);
  const col = index - startOfLineIndex;

  return { line, col };
}

// annotate file contents with suggestions
module.exports = function annotate(contents, suggestions, parse) {
  const lines = contents.split('\n');

  return suggestions.map((suggestion) => {
    const lineColumn = findLineColumn(contents, lines, suggestion.index);

    let fix = 0;

    if (lineColumn.col > 25) {
      fix = lineColumn.col - 25;
    }

    if (parse) {
      return {
        reason: suggestion.reason,
        line: lineColumn.line,
        col: lineColumn.col,
      };
    }
    const lineSegment = lines[lineColumn.line - 1].substr(fix, 80);

    return [
      lineSegment,
      repeatChar(' ', lineColumn.col - fix) + repeatChar('^', suggestion.offset),
      `${suggestion.reason} on line ${lineColumn.line} at column ${lineColumn.col}`
    ].join('\n');
  });
};


/***/ })

/******/ });