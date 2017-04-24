/*
	dirty_font is vocabulary using in RunningLine class

	Each element of vocabulary object is an array which represents one char.
	Every char is a matrix of dots. The dot can be set with any char except SPACE one.
	The name of such array includes a number which is equal to real code of char represented.
	Each array must have the same numbers of elements (each char must be the same height)

	Array with 'gap' name sets the space (in matrix dots) between chars
*/

dirty_font = {

	gap:[
	' '	
	],

	L32:[
	'    ',
	'    ',
	'    ',
	'    ',
	'    ',
	'    ',
	'    '
	],

	L33:[
	' M ',
	' M ',
	' M ',
	' M ',
	' M ',
	'   ',
	' M '
	],

	L34:[
	'M M',
	'M M',
	'   ',
	'   ',
	'   ',
	'   ',
	'   '
	],

	L35:[
	'  MMM  ',
	' MMMMM ',
	'MMM M M',
	'MMMMMMM',
	'MMMMMMM',
	' MMMMM ',
	'  MMM  '
	],

	L36:[
	' MMM ',
	'M M M',
	'M M  ',
	' MMM ',
	'  M M',
	'M M M',
	' MMM '
	],

	L37:[
	' M    M',
	'M M  M ',
	'M M M  ',
	' M M M ',
	'  M M M',
	' M  M M',
	'M    M '
	],

	L39:[
	'M',
	'M',
	' ',
	' ',
	' ',
	' ',
	' '
	],

	L40:[
	' M',
	'M ',
	'M ',
	'M ',
	'M ',
	'M ',
	' M'
	],

	L41:[
	'M ',
	' M',
	' M',
	' M',
	' M',
	' M',
	'M '
	],

	L42:[
	'M M',
	' M ',
	'M M',
	'   ',
	'   ',
	'   ',
	'   '
	],

	L43:[
	'     ',
	'  M  ',
	'  M  ',
	'MMMMM',
	'  M  ',
	'  M  ',
	'     '
	],

	L44:[
	'  ',
	'  ',
	'  ',
	'MM',
	'MM',
	' M',
	'M '
	],

	L45:[
	'     ',
	'     ',
	'     ',
	'MMMMM',
	'     ',
	'     ',
	'     '
	],

	L46:[
	'  ',
	'  ',
	'  ',
	'MM',
	'MM',
	'  ',
	'  '
	],

	L47:[
	'      M',
	'     M ',
	'    M  ',
	'   M   ',
	'  M    ',
	' M     ',
	'M      '
	],

	L48:[
	' MMM ',
	'M   M',
	'MM  M',
	'M M M',
	'M  MM',
	'M   M',
	' MMM '
	],

	L49:[
	'  M',
	' MM',
	'M M',
	'  M',
	'  M',
	'  M',
	'  M'
	],

	L50:[
	' MMM ',
	'M   M',
	'    M',
	'   M ',
	'  M  ',
	' M   ',
	'MMMMM'
	],

	L51:[
	' MMM ',
	'M   M',
	'    M',
	'  MM ',
	'    M',
	'M   M',
	' MMM '
	],

	L52:[
	'   M ',
	'  MM ',
	' M M ',
	'M  M ',
	'MMMMM',
	'   M ',
	'   M '
	],

	L53:[
	'MMMMM',
	'M    ',
	'MMMM ',
	'    M',
	'    M',
	'M   M',
	' MMM '
	],

	L54:[
	' MMM ',
	'M   M',
	'M    ',
	'MMMM ',
	'M   M',
	'M   M',
	' MMM '
	],

	L55:[
	'MMMMM',
	'    M',
	'    M',
	'   M ',
	'   M ',
	'  M  ',
	'  M  '
	],

	L56:[
	' MMM ',
	'M   M',
	'M   M',
	' MMM ',
	'M   M',
	'M   M',
	' MMM '
	],

	L57:[
	' MMM ',
	'M   M',
	'M   M',
	' MMMM',
	'    M',
	'M   M',
	' MMM '
	],

	L58:[
	'MM',
	'MM',
	'  ',
	'MM',
	'MM',
	'  ',
	'  '
	],

	L59:[
	'MM',
	'MM',
	'  ',
	'MM',
	'MM',
	' M',
	'M '
	],

	L60:[
	'   ',
	'  M',
	' M ',
	'M  ',
	' M ',
	'  M',
	'   '
	],

	L61:[
	'     ',
	'     ',
	'MMMMM',
	'     ',
	'MMMMM',
	'     ',
	'     '
	],

	L62:[
	'   ',
	'M  ',
	' M ',
	'  M',
	' M ',
	'M  ',
	'   '
	],

	L63:[
	' MMM ',
	'M   M',
	'    M',
	'   M ',
	'  M  ',
	'     ',
	'  M  '
	],

	L64:[
	'  MMM  ',
	' M   M ',
	'M     M',
	'M   MMM',
	'M  M  M',
	' M M  M',
	'   MMMM'
	],

	L65:[
	' MMM ',
	'M   M',
	'M   M',
	'MMMMM',
	'M   M',
	'M   M',
	'M   M'
	],

	L66:[
	'MMMM ',
	'M   M',
	'M   M',
	'MMMM ',
	'M   M',
	'M   M',
	'MMMM '
	],

	L67:[
	' MMM ',
	'M   M',
	'M    ',
	'M    ',
	'M    ',
	'M   M',
	' MMM '
	],

	L68:[
	'MMMM ',
	'M   M',
	'M   M',
	'M   M',
	'M   M',
	'M   M',
	'MMMM '
	],

	L69:[
	'MMMMM',
	'M    ',
	'M    ',
	'MMMM ',
	'M    ',
	'M    ',
	'MMMMM'
	],

	L70:[
	'MMMMM',
	'M    ',
	'M    ',
	'MMMM ',
	'M    ',
	'M    ',
	'M    '
	],

	L71:[
	' MMM ',
	'M   M',
	'M    ',
	'M  MM',
	'M   M',
	'M   M',
	' MMM '
	],

	L72:[
	'M   M',
	'M   M',
	'M   M',
	'MMMMM',
	'M   M',
	'M   M',
	'M   M'
	],

	L73:[
	'M',
	'M',
	'M',
	'M',
	'M',
	'M',
	'M'
	],

	L74:[
	'    M',
	'    M',
	'    M',
	'    M',
	'    M',
	'M   M',
	' MMM '
	],

	L75:[
	'M   M',
	'M  M ',
	'M M  ',
	'MM   ',
	'M M  ',
	'M  M ',
	'M   M'
	],

	L76:[
	'M    ',
	'M    ',
	'M    ',
	'M    ',
	'M    ',
	'M    ',
	'MMMMM'
	],

	L77:[
	'M     M',
	'MM   MM',
	'M M M M',
	'M  M  M',
	'M     M',
	'M     M',
	'M     M'
	],

	L78:[
	'M   M',
	'M   M',
	'MM  M',
	'M M M',
	'M  MM',
	'M   M',
	'M   M'
	],

	L79:[
	' MMM ',
	'M   M',
	'M   M',
	'M   M',
	'M   M',
	'M   M',
	' MMM '
	],

	L80:[
	'MMMM ',
	'M   M',
	'M   M',
	'MMMM ',
	'M    ',
	'M    ',
	'M    '
	],

	L81:[
	' MMM  ',
	'M   M ',
	'M   M ',
	'M   M ',
	'M  MM ',
	'M   M ',
	' MMM M'
	],

	L82:[
	'MMMM ',
	'M   M',
	'M   M',
	'MMMM ',
	'M M  ',
	'M  M ',
	'M   M'
	],

	L83:[
	' MMM ',
	'M   M',
	'M    ',
	' MMM ',
	'    M',
	'M   M',
	' MMM '
	],

	L84:[
	'MMMMM',
	'  M  ',
	'  M  ',
	'  M  ',
	'  M  ',
	'  M  ',
	'  M  '
	],

	L85:[
	'M   M',
	'M   M',
	'M   M',
	'M   M',
	'M   M',
	'M   M',
	' MMM '
	], 

	L86:[
	'M   M',
	'M   M',
	'M   M',
	' M M ',
	' M M ',
	'  M  ',
	'  M  '
	], 

	L87:[
	'M  M  M',
	'M  M  M',
	'M  M  M',
	'M  M  M',
	'M  M  M',
	'M  M  M',
	' MM MM '
	],

	L88:[
	'M   M',
	'M   M',
	' M M ',
	'  M  ',
	' M M ',
	'M   M',
	'M   M'
	],
		
	L89:[
	'M   M',
	'M   M',
	' M M ',
	'  M  ',
	'  M  ',
	'  M  ',
	'  M  '
	],

	L90:[
	'MMMMM',
	'    M',
	'   M ',
	'  M  ',
	' M   ',
	'M    ',
	'MMMMM'
	],

	L91:[
	'MM',
	'M ',
	'M ',
	'M ',
	'M ',
	'M ',
	'MM'
	],

	L92:[
	'M      ',
	' M     ',
	'  M    ',
	'   M   ',
	'    M  ',
	'     M ',
	'      M'
	],

	L93:[
	'MM',
	' M',
	' M',
	' M',
	' M',
	' M',
	'MM'
	],

	L94:[
	'  M  ',
	' M M ',
	'M   M',
	'     ',
	'     ',
	'     ',
	'     '
	],

	L96:[
	'MM',
	' M',
	'M ',
	'  ',
	'  ',
	'  ',
	'  '
	],

	L123:[
	'  MM',
	' M  ',
	' M  ',
	'M   ',
	' M  ',
	' M  ',
	'  MM'
	],

	L124:[
	'M',
	'M',
	'M',
	'M',
	'M',
	'M',
	'M'
	],

	L125:[
	'MM  ',
	'  M ',
	'  M ',
	'   M',
	'  M ',
	'  M ',
	'MM  '
	],

	L126:[
	'       ',
	'       ',
	' MM    ',
	'M  M  M',
	'    MM ',
	'       ',
	'       '
	],

	L8470:[
	'M   M  M ',
	'M   M M M',
	'MM  M M M',
	'M M M  M ',
	'M  MM    ',
	'M   M MMM',
	'M   M    '
	],

	L8212:[
	'     ',
	'     ',
	'     ',
	'MMMMM',
	'     ',
	'     ',
	'     '
	],

	L1040:[
	' MMM ',
	'M   M',
	'M   M',
	'MMMMM',
	'M   M',
	'M   M',
	'M   M'
	],

	L1041:[
	'MMMMM',
	'M    ',
	'M    ',
	'MMMM ',
	'M   M',
	'M   M',
	'MMMM '
	],

	L1042:[
	'MMMM ',
	'M   M',
	'M   M',
	'MMMM ',
	'M   M',
	'M   M',
	'MMMM '
	],

	L1043:[
	'MMMMM',
	'M    ',
	'M    ',
	'M    ',
	'M    ',
	'M    ',
	'M    '
	],

	L1044:[
	'   MMM',
	'  M  M',
	' M   M',
	' M   M',
	' M   M',
	' M   M',
	'MMMMMM'
	],

	L1045:[
	'MMMMM',
	'M    ',
	'M    ',
	'MMMM ',
	'M    ',
	'M    ',
	'MMMMM'
	],

	L1025:[
	'M M M',
	'M    ',
	'M    ',
	'MMMM ',
	'M    ',
	'M    ',
	'MMMMM'
	],

	L1046:[
	'M  M  M',
	'M  M  M',
	' M M M ',
	'  MMM  ',
	' M M M ',
	'M  M  M',
	'M  M  M'
	],

	L1047:[
	'MMMM ',
	'    M',
	'    M',
	'MMMM ',
	'    M',
	'    M',
	'MMMM '
	],

	L1048:[
	'M   M',
	'M   M',
	'M  MM',
	'M M M',
	'MM  M',
	'M   M',
	'M   M'
	],

	L1049:[
	'M M M',
	'M   M',
	'M  MM',
	'M M M',
	'MM  M',
	'M   M',
	'M   M'
	],

	L1050:[
	'M   M',
	'M  M ',
	'M M  ',
	'MM   ',
	'M M  ',
	'M  M ',
	'M   M'
	],

	L1051:[
	'  MMM',
	' M  M',
	'M   M',
	'M   M',
	'M   M',
	'M   M',
	'M   M'
	],

	L1052:[
	'M     M',
	'MM   MM',
	'M M M M',
	'M  M  M',
	'M     M',
	'M     M',
	'M     M'
	],

	L1053:[
	'M   M',
	'M   M',
	'M   M',
	'MMMMM',
	'M   M',
	'M   M',
	'M   M'
	],

	L1054:[
	' MMM ',
	'M   M',
	'M   M',
	'M   M',
	'M   M',
	'M   M',
	' MMM '
	],

	L1055:[
	'MMMMM',
	'M   M',
	'M   M',
	'M   M',
	'M   M',
	'M   M',
	'M   M'
	],

	L1056:[
	'MMMM ',
	'M   M',
	'M   M',
	'MMMM ',
	'M    ',
	'M    ',
	'M    '
	],

	L1057:[
	' MMM ',
	'M   M',
	'M    ',
	'M    ',
	'M    ',
	'M   M',
	' MMM '
	],

	L1058:[
	'MMMMM',
	'  M  ',
	'  M  ',
	'  M  ',
	'  M  ',
	'  M  ',
	'  M  '
	],

	L1059:[
	'M   M',
	'M   M',
	'M   M',
	' MMMM',
	'    M',
	'    M',
	'MMMM '
	],

	L1060:[
	' MMMMM ',
	'M  M  M',
	'M  M  M',
	'M  M  M',
	' MMMMM ',
	'   M   ',
	'   M   '
	],

	L1061:[
	'M   M',
	'M   M',
	' M M ',
	'  M  ',
	' M M ',
	'M   M',
	'M   M'
	],

	L1062:[
	'M   M ',
	'M   M ',
	'M   M ',
	'M   M ',
	'M   M ',
	'M   M ',
	'MMMMMM'
	],

	L1063:[
	'M   M',
	'M   M',
	'M   M',
	' MMMM',
	'    M',
	'    M',
	'    M'
	],

	L1064:[
	'M  M  M',
	'M  M  M',
	'M  M  M',
	'M  M  M',
	'M  M  M',
	'M  M  M',
	'MMMMMMM'
	],

	L1065:[
	'M  M  M ',
	'M  M  M ',
	'M  M  M ',
	'M  M  M ',
	'M  M  M ',
	'M  M  M ',
	'MMMMMMMM'
	],

	L1066:[
	'MMM    ',
	'  M    ',
	'  M    ',
	'  MMMM ',
	'  M   M',
	'  M   M',
	'  MMMM '
	], 

	L1067:[
	'M     M',
	'M     M',
	'M     M',
	'MMMM  M',
	'M   M M',
	'M   M M',
	'MMMM  M'
	],

	L1068:[
	'M    ',
	'M    ',
	'M    ',
	'MMMM ',
	'M   M',
	'M   M',
	'MMMM '
	],

	L1069:[
	'MMMM ',
	'    M',
	'    M',
	' MMMM',
	'    M',
	'    M',
	'MMMM '
	],

	L1070:[
	'M  MMM ',
	'M M   M',
	'M M   M',
	'MMM   M',
	'M M   M',
	'M M   M',
	'M  MMM '
	],

	L1071:[
	' MMMM',
	'M   M',
	'M   M',
	' MMMM',
	'  M M',
	' M  M',
	'M   M'
	]
};