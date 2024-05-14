// Historique des modifications pour annuler
let history = [];
let historyIndex = -1;

// Maps for conversion
const standardMap = {
    '𝗔': 'A', '𝗕': 'B', '𝗖': 'C', '𝗗': 'D', '𝗘': 'E', '𝗙': 'F', '𝗚': 'G',
    '𝗛': 'H', '𝗜': 'I', '𝗝': 'J', '𝗞': 'K', '𝗟': 'L', '𝗠': 'M', '𝗡': 'N',
    '𝗢': 'O', '𝗣': 'P', '𝗤': 'Q', '𝗥': 'R', '𝗦': 'S', '𝗧': 'T', '𝗨': 'U',
    '𝗩': 'V', '𝗪': 'W', '𝗫': 'X', '𝗬': 'Y', '𝗭': 'Z', '𝗮': 'a', '𝗯': 'b',
    '𝗰': 'c', '𝗱': 'd', '𝗲': 'e', '𝗳': 'f', '𝗴': 'g', '𝗵': 'h', '𝗶': 'i',
    '𝗷': 'j', '𝗸': 'k', '𝗹': 'l', '𝗺': 'm', '𝗻': 'n', '𝗼': 'o', '𝗽': 'p',
    '𝗾': 'q', '𝗿': 'r', '𝘀': 's', '𝘁': 't', '𝘂': 'u', '𝘃': 'v', '𝘄': 'w',
    '𝘅': 'x', '𝘆': 'y', '𝘇': 'z',

    '𝘈': 'A', '𝘉': 'B', '𝘊': 'C', '𝘋': 'D', '𝘌': 'E', '𝘍': 'F', '𝘎': 'G',
    '𝘏': 'H', '𝘐': 'I', '𝘑': 'J', '𝘒': 'K', '𝘓': 'L', '𝘔': 'M', '𝘕': 'N',
    '𝘖': 'O', '𝘗': 'P', '𝘘': 'Q', '𝘙': 'R', '𝘚': 'S', '𝘛': 'T', '𝘜': 'U',
    '𝘝': 'V', '𝘞': 'W', '𝘟': 'X', '𝘠': 'Y', '𝘡': 'Z', '𝘢': 'a', '𝘣': 'b',
    '𝘤': 'c', '𝘥': 'd', '𝘦': 'e', '𝘧': 'f', '𝘨': 'g', '𝘩': 'h', '𝘪': 'i',
    '𝘫': 'j', '𝘬': 'k', '𝘭': 'l', '𝘮': 'm', '𝘯': 'n', '𝘰': 'o', '𝘱': 'p',
    '𝘲': 'q', '𝘳': 'r', '𝘴': 's', '𝘵': 't', '𝘶': 'u', '𝘷': 'v', '𝘸': 'w',
    '𝘹': 'x', '𝘺': 'y', '𝘻': 'z',

    '𝑨': 'A', '𝑩': 'B', '𝑪': 'C', '𝑫': 'D', '𝑬': 'E', '𝑭': 'F', '𝑮': 'G',
    '𝑯': 'H', '𝑰': 'I', '𝑱': 'J', '𝑲': 'K', '𝑳': 'L', '𝑴': 'M', '𝑵': 'N',
    '𝑶': 'O', '𝑷': 'P', '𝑸': 'Q', '𝑹': 'R', '𝑺': 'S', '𝑻': 'T', '𝑼': 'U',
    '𝑽': 'V', '𝑾': 'W', '𝑿': 'X', '𝒀': 'Y', '𝒁': 'Z', '𝒂': 'a', '𝒃': 'b',
    '𝒄': 'c', '𝒅': 'd', '𝒆': 'e', '𝒇': 'f', '𝒈': 'g', '𝒉': 'h', '𝒊': 'i',
    '𝒋': 'j', '𝒌': 'k', '𝒍': 'l', '𝒎': 'm', '𝒏': 'n', '𝒐': 'o', '𝒑': 'p',
    '𝒒': 'q', '𝒓': 'r', '𝒔': 's', '𝒕': 't', '𝒖': 'u', '𝒗': 'v', '𝒘': 'w',
    '𝒙': 'x', '𝒚': 'y', '𝒛': 'z',

    'A̶': 'A', 'B̶': 'B', 'C̶': 'C', 'D̶': 'D', 'E̶': 'E', 'F̶': 'F', 'G̶': 'G',
    'H̶': 'H', 'I̶': 'I', 'J̶': 'J', 'K̶': 'K', 'L̶': 'L', 'M̶': 'M', 'N̶': 'N',
    'O̶': 'O', 'P̶': 'P', 'Q̶': 'Q', 'R̶': 'R', 'S̶': 'S', 'T̶': 'T', 'U̶': 'U',
    'V̶': 'V', 'W̶': 'W', 'X̶': 'X', 'Y̶': 'Y', 'Z̶': 'Z', 'a̶': 'a', 'b̶': 'b',
    'c̶': 'c', 'd̶': 'd', 'e̶': 'e', 'f̶': 'f', 'g̶': 'g', 'h̶': 'h', 'i̶': 'i',
    'j̶': 'j', 'k̶': 'k', 'l̶': 'l', 'm̶': 'm', 'n̶': 'n', 'o̶': 'o', 'p̶': 'p',
    'q̶': 'q', 'r̶': 'r', 's̶': 's', 't̶': 't', 'u̶': 'u', 'v̶': 'v', 'w̶': 'w',
    'x̶': 'x', 'y̶': 'y', 'z̶': 'z',

    'A̲': 'A', 'B̲': 'B', 'C̲': 'C', 'D̲': 'D', 'E̲': 'E', 'F̲': 'F', 'G̲': 'G',
    'H̲': 'H', 'I̲': 'I', 'J̲': 'J', 'K̲': 'K', 'L̲': 'L', 'M̲': 'M', 'N̲': 'N',
    'O̲': 'O', 'P̲': 'P', 'Q̲': 'Q', 'R̲': 'R', 'S̲': 'S', 'T̲': 'T', 'U̲': 'U',
    'V̲': 'V', 'W̲': 'W', 'X̲': 'X', 'Y̲': 'Y', 'Z̲': 'Z', 'a̲': 'a', 'b̲': 'b',
    'c̲': 'c', 'd̲': 'd', 'e̲': 'e', 'f̲': 'f', 'g̲': 'g', 'h̲': 'h', 'i̲': 'i',
    'j̲': 'j', 'k̲': 'k', 'l̲': 'l', 'm̲': 'm', 'n̲': 'n', 'o̲': 'o', 'p̲': 'p',
    'q̲': 'q', 'r̲': 'r', 's̲': 's', 't̲': 't', 'u̲': 'u', 'v̲': 'v', 'w̲': 'w',
    'x̲': 'x', 'y̲': 'y', 'z̲': 'z',

    'Ａ': 'A', 'Ｂ': 'B', 'Ｃ': 'C', 'Ｄ': 'D', 'Ｅ': 'E', 'Ｆ': 'F', 'Ｇ': 'G',
    'Ｈ': 'H', 'Ｉ': 'I', 'Ｊ': 'J', 'Ｋ': 'K', 'Ｌ': 'L', 'Ｍ': 'M', 'Ｎ': 'N',
    'Ｏ': 'O', 'Ｐ': 'P', 'Ｑ': 'Q', 'Ｒ': 'R', 'Ｓ': 'S', 'Ｔ': 'T', 'Ｕ': 'U',
    'Ｖ': 'V', 'Ｗ': 'W', 'Ｘ': 'X', 'Ｙ': 'Y', 'Ｚ': 'Z', 'ａ': 'a', 'ｂ': 'b',
    'ｃ': 'c', 'ｄ': 'd', 'ｅ': 'e', 'ｆ': 'f', 'ｇ': 'g', 'ｈ': 'h', 'ｉ': 'i',
    'ｊ': 'j', 'ｋ': 'k', 'ｌ': 'l', 'ｍ': 'm', 'ｎ': 'n', 'ｏ': 'o', 'ｐ': 'p',
    'ｑ': 'q', 'ｒ': 'r', 'ｓ': 's', 'ｔ': 't', 'ｕ': 'u', 'ｖ': 'v', 'ｗ': 'w',
    'ｘ': 'x', 'ｙ': 'y', 'ｚ': 'z',

    '𝔄': 'A', '𝔅': 'B', 'ℭ': 'C', '𝔇': 'D', '𝔈': 'E', '𝔉': 'F', '𝔊': 'G',
    'ℌ': 'H', 'ℑ': 'I', '𝔍': 'J', '𝔎': 'K', '𝔏': 'L', '𝔐': 'M', '𝔑': 'N',
    '𝔒': 'O', '𝔓': 'P', '𝔔': 'Q', 'ℜ': 'R', '𝔖': 'S', '𝔗': 'T', '𝔘': 'U',
    '𝔙': 'V', '𝔚': 'W', '𝔛': 'X', '𝔜': 'Y', 'ℨ': 'Z', '𝔞': 'a', '𝔟': 'b',
    '𝔠': 'c', '𝔡': 'd', '𝔢': 'e', '𝔣': 'f', '𝔤': 'g', '𝔥': 'h', '𝔦': 'i',
    '𝔧': 'j', '𝔨': 'k', '𝔩': 'l', '𝔪': 'm', '𝔫': 'n', '𝔬': 'o', '𝔭': 'p',
    '𝔮': 'q', '𝔯': 'r', '𝔰': 's', '𝔱': 't', '𝔲': 'u', '𝔳': 'v', '𝔴': 'w',
    '𝔵': 'x', '𝔶': 'y', '𝔷': 'z',

    '𝕬': 'A', '𝕭': 'B', '𝕮': 'C', '𝕯': 'D', '𝕰': 'E', '𝕱': 'F', '𝕲': 'G',
    '𝕳': 'H', '𝕴': 'I', '𝕵': 'J', '𝕶': 'K', '𝕷': 'L', '𝕸': 'M', '𝕹': 'N',
    '𝕺': 'O', '𝕻': 'P', '𝕼': 'Q', '𝕽': 'R', '𝕾': 'S', '𝕿': 'T', '𝖀': 'U',
    '𝖁': 'V', '𝖂': 'W', '𝖃': 'X', '𝖄': 'Y', '𝖅': 'Z', '𝖆': 'a', '𝖇': 'b',
    '𝖈': 'c', '𝖉': 'd', '𝖊': 'e', '𝖋': 'f', '𝖌': 'g', '𝖍': 'h', '𝖎': 'i',
    '𝖏': 'j', '𝖐': 'k', '𝖑': 'l', '𝖒': 'm', '𝖓': 'n', '𝖔': 'o', '𝖕': 'p',
    '𝖖': 'q', '𝖗': 'r', '𝖘': 's', '𝖙': 't', '𝖚': 'u', '𝖛': 'v', '𝖜': 'w',
    '𝖝': 'x', '𝖞': 'y', '𝖟': 'z',

    '𝔸': 'A', '𝔹': 'B', 'ℂ': 'C', '𝔻': 'D', '𝔼': 'E', '𝔽': 'F', '𝔾': 'G',
    'ℍ': 'H', '𝕀': 'I', '𝕁': 'J', '𝕂': 'K', '𝕃': 'L', '𝕄': 'M', 'ℕ': 'N',
    '𝕆': 'O', 'ℙ': 'P', 'ℚ': 'Q', 'ℝ': 'R', '𝕊': 'S', '𝕋': 'T', '𝕌': 'U',
    '𝕍': 'V', '𝕎': 'W', '𝕏': 'X', '𝕐': 'Y', 'ℤ': 'Z', '𝕒': 'a', '𝕓': 'b',
    '𝕔': 'c', '𝕕': 'd', '𝕖': 'e', '𝕗': 'f', '𝕘': 'g', '𝕙': 'h', '𝕚': 'i',
    '𝕛': 'j', '𝕜': 'k', '𝕝': 'l', '𝕞': 'm', '𝕟': 'n', '𝕠': 'o', '𝕡': 'p',
    '𝕢': 'q', '𝕣': 'r', '𝕤': 's', '𝕥': 't', '𝕦': 'u', '𝕧': 'v', '𝕨': 'w',
    '𝕩': 'x', '𝕪': 'y', '𝕫': 'z',

    '𝒜': 'A', 'ℬ': 'B', '𝒞': 'C', '𝒟': 'D', 'ℰ': 'E', 'ℱ': 'F', '𝒢': 'G',
    'ℋ': 'H', 'ℐ': 'I', '𝒥': 'J', '𝒦': 'K', 'ℒ': 'L', 'ℳ': 'M', '𝒩': 'N',
    '𝒪': 'O', '𝒫': 'P', '𝒬': 'Q', 'ℛ': 'R', '𝒮': 'S', '𝒯': 'T', '𝒰': 'U',
    '𝒱': 'V', '𝒲': 'W', '𝒳': 'X', '𝒴': 'Y', '𝒵': 'Z', '𝒶': 'a', '𝒷': 'b',
    '𝒸': 'c', '𝒹': 'd', 'ℯ': 'e', '𝒻': 'f', 'ℊ': 'g', '𝒽': 'h', '𝒾': 'i',
    '𝒿': 'j', '𝓀': 'k', '𝓁': 'l', '𝓂': 'm', '𝓃': 'n', 'ℴ': 'o', '𝓅': 'p',
    '𝓆': 'q', '𝓇': 'r', '𝓈': 's', '𝓉': 't', '𝓊': 'u', '𝓋': 'v', '𝓌': 'w',
    '𝓍': 'x', '𝓎': 'y', '𝓏': 'z',

    'Ⓐ': 'A', 'Ⓑ': 'B', 'Ⓒ': 'C', 'Ⓓ': 'D', 'Ⓔ': 'E', 'Ⓕ': 'F', 'Ⓖ': 'G',
    'Ⓗ': 'H', 'Ⓘ': 'I', 'Ⓙ': 'J', 'Ⓚ': 'K', 'Ⓛ': 'L', 'Ⓜ': 'M', 'Ⓝ': 'N',
    'Ⓞ': 'O', 'Ⓟ': 'P', 'Ⓠ': 'Q', 'Ⓡ': 'R', 'Ⓢ': 'S', 'Ⓣ': 'T', 'Ⓤ': 'U',
    'Ⓥ': 'V', 'Ⓦ': 'W', 'Ⓧ': 'X', 'Ⓨ': 'Y', 'Ⓩ': 'Z', 'ⓐ': 'a', 'ⓑ': 'b',
    'ⓒ': 'c', 'ⓓ': 'd', 'ⓔ': 'e', 'ⓕ': 'f', 'ⓖ': 'g', 'ⓗ': 'h', 'ⓘ': 'i',
    'ⓙ': 'j', 'ⓚ': 'k', 'ⓛ': 'l', 'ⓜ': 'm', 'ⓝ': 'n', 'ⓞ': 'o', 'ⓟ': 'p',
    'ⓠ': 'q', 'ⓡ': 'r', 'ⓢ': 's', 'ⓣ': 't', 'ⓤ': 'u', 'ⓥ': 'v', 'ⓦ': 'w',
    'ⓧ': 'x', 'ⓨ': 'y', 'ⓩ': 'z',

    '🄰': 'A', '🄱': 'B', '🄲': 'C', '🄳': 'D', '🄴': 'E', '🄵': 'F', '🄶': 'G',
    '🄷': 'H', '🄸': 'I', '🄹': 'J', '🄺': 'K', '🄻': 'L', '🄼': 'M', '🄽': 'N',
    '🄾': 'O', '🄿': 'P', '🅀': 'Q', '🅁': 'R', '🅂': 'S', '🅃': 'T', '🅄': 'U',
    '🅅': 'V', '🅆': 'W', '🅇': 'X', '🅈': 'Y', '🅉': 'Z', '🅰': 'a', '🅱': 'b',
    '🅲': 'c', '🅳': 'd', '🅴': 'e', '🅵': 'f', '🅶': 'g', '🅷': 'h', '🅸': 'i',
    '🅹': 'j', '🅺': 'k', '🅻': 'l', '🅼': 'm', '🅽': 'n', '🅾': 'o', '🅿': 'p',
    '🆀': 'q', '🆁': 'r', '🆂': 's', '🆃': 't', '🆄': 'u', '🆅': 'v', '🆆': 'w',
    '🆇': 'x', '🆈': 'y', '🆉': 'z',

    '🅐': 'a', '🅑': 'b', '🅒': 'c', '🅓': 'd', '🅔': 'e', '🅕': 'f', '🅖': 'g',
    '🅗': 'h', '🅘': 'i', '🅙': 'j', '🅚': 'k', '🅛': 'l', '🅜': 'm', '🅝': 'n',
    '🅞': 'o', '🅟': 'p', '🅠': 'q', '🅡': 'r', '🅢': 's', '🅣': 't', '🅤': 'u',
    '🅥': 'v', '🅦': 'w', '🅧': 'x', '🅨': 'y', '🅩': 'z',

    '\"': '\"', '\\': '\\', ' ': ' ', '!': '!', '#': '#', '$': '$', '%': '%',
    ',': ',', ')': ')', '(': '(', '*': '*', '+': '+', '-': '-', '.': '.',
    '/': '/', '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5',
    '6': '6', '7': '7', '8': '8', '9': '9', ':': ':', ';': ';', '<': '<',
    '=': '=', '>': '>', '?': '?', '@': '@', 'A': 'A', 'B': 'B', 'C': 'C',
    'D': 'D', 'E': 'E', 'F': 'F', 'G': 'G', 'H': 'H', 'I': 'I', 'J': 'J',
    'K': 'K', 'L': 'L', 'M': 'M', 'N': 'N', 'O': 'O', 'P': 'P', 'Q': 'Q',
    'R': 'R', 'S': 'S', 'T': 'T', 'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X',
    'Y': 'Y', 'Z': 'Z', '[': '[', ']': ']', '^': '^', '_': '_', '`': '`',
    'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g',
    'h': 'h', 'i': 'i', 'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n',
    'o': 'o', 'p': 'p', 'q': 'q', 'r': 'r', 's': 's', 't': 't', 'u': 'u',
    'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z', '{': '{', '|': '|',
    '}': '}', '~': '~'
};

const boldMap = {
    'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚',
    'H': '𝗛', 'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡',
    'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨',
    'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
    'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴',
    'h': '𝗵', 'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻',
    'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂',
    'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇'
};

const italicMap = {
    'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎',
    'H': '𝘏', 'I': '𝘐', 'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕',
    'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛', 'U': '𝘜',
    'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡',
    'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨',
    'h': '𝘩', 'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯',
    'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶',
    'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻'
};

const boldItalicMap = {
    'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮',
    'H': '𝑯', 'I': '𝑰', 'J': '𝑱', 'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵',
    'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻', 'U': '𝑼',
    'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁',
    'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈',
    'h': '𝒉', 'i': '𝒊', 'j': '𝒋', 'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏',
    'o': '𝒐', 'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕', 'u': '𝒖',
    'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛'
};

const strikethroughMap = {
    'A': 'A̶', 'B': 'B̶', 'C': 'C̶', 'D': 'D̶', 'E': 'E̶', 'F': 'F̶', 'G': 'G̶',
    'H': 'H̶', 'I': 'I̶', 'J': 'J̶', 'K': 'K̶', 'L': 'L̶', 'M': 'M̶', 'N': 'N̶',
    'O': 'O̶', 'P': 'P̶', 'Q': 'Q̶', 'R': 'R̶', 'S': 'S̶', 'T': 'T̶', 'U': 'U̶',
    'V': 'V̶', 'W': 'W̶', 'X': 'X̶', 'Y': 'Y̶', 'Z': 'Z̶',
    'a': 'a̶', 'b': 'b̶', 'c': 'c̶', 'd': 'd̶', 'e': 'e̶', 'f': 'f̶', 'g': 'g̶',
    'h': 'h̶', 'i': 'i̶', 'j': 'j̶', 'k': 'k̶', 'l': 'l̶', 'm': 'm̶', 'n': 'n̶',
    'o': 'o̶', 'p': 'p̶', 'q': 'q̶', 'r': 'r̶', 's': 's̶', 't': 't̶', 'u': 'u̶',
    'v': 'v̶', 'w': 'w̶', 'x': 'x̶', 'y': 'y̶', 'z': 'z̶'
};

const underlineMap = {
    'A': 'A̲', 'B': 'B̲', 'C': 'C̲', 'D': 'D̲', 'E': 'E̲', 'F': 'F̲', 'G': 'G̲',
    'H': 'H̲', 'I': 'I̲', 'J': 'J̲', 'K': 'K̲', 'L': 'L̲', 'M': 'M̲', 'N': 'N̲',
    'O': 'O̲', 'P': 'P̲', 'Q': 'Q̲', 'R': 'R̲', 'S': 'S̲', 'T': 'T̲', 'U': 'U̲',
    'V': 'V̲', 'W': 'W̲', 'X': 'X̲', 'Y': 'Y̲', 'Z': 'Z̲',
    'a': 'a̲', 'b': 'b̲', 'c': 'c̲', 'd': 'd̲', 'e': 'e̲', 'f': 'f̲', 'g': 'g̲',
    'h': 'h̲', 'i': 'i̲', 'j': 'j̲', 'k': 'k̲', 'l': 'l̲', 'm': 'm̲', 'n': 'n̲',
    'o': 'o̲', 'p': 'p̲', 'q': 'q̲', 'r': 'r̲', 's': 's̲', 't': 't̲', 'u': 'u̲',
    'v': 'v̲', 'w': 'w̲', 'x': 'x̲', 'y': 'y̲', 'z': 'z̲'
};

const fullwidthMap = {
    'A': 'Ａ', 'B': 'Ｂ', 'C': 'Ｃ', 'D': 'Ｄ', 'E': 'Ｅ', 'F': 'Ｆ', 'G': 'Ｇ',
    'H': 'Ｈ', 'I': 'Ｉ', 'J': 'Ｊ', 'K': 'Ｋ', 'L': 'Ｌ', 'M': 'Ｍ', 'N': 'Ｎ',
    'O': 'Ｏ', 'P': 'Ｐ', 'Q': 'Ｑ', 'R': 'Ｒ', 'S': 'Ｓ', 'T': 'Ｔ', 'U': 'Ｕ',
    'V': 'Ｖ', 'W': 'Ｗ', 'X': 'Ｘ', 'Y': 'Ｙ', 'Z': 'Ｚ',
    'a': 'ａ', 'b': 'ｂ', 'c': 'ｃ', 'd': 'ｄ', 'e': 'ｅ', 'f': 'ｆ', 'g': 'ｇ',
    'h': 'ｈ', 'i': 'ｉ', 'j': 'ｊ', 'k': 'ｋ', 'l': 'ｌ', 'm': 'ｍ', 'n': 'ｎ',
    'o': 'ｏ', 'p': 'ｐ', 'q': 'ｑ', 'r': 'ｒ', 's': 'ｓ', 't': 'ｔ', 'u': 'ｕ',
    'v': 'ｖ', 'w': 'ｗ', 'x': 'ｘ', 'y': 'ｙ', 'z': 'ｚ'
};

const frakturMap = {
    'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊',
    'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍', 'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑',
    'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗', 'U': '𝔘',
    'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ',
    'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤',
    'h': '𝔥', 'i': '𝔦', 'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫',
    'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱', 'u': '𝔲',
    'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷'
};

const boldFrakturMap = {
    'A': '𝕬', 'B': '𝕭', 'C': '𝕮', 'D': '𝕯', 'E': '𝕰', 'F': '𝕱', 'G': '𝕲',
    'H': '𝕳', 'I': '𝕴', 'J': '𝕵', 'K': '𝕶', 'L': '𝕷', 'M': '𝕸', 'N': '𝕹',
    'O': '𝕺', 'P': '𝕻', 'Q': '𝕼', 'R': '𝕽', 'S': '𝕾', 'T': '𝕿', 'U': '𝖀',
    'V': '𝖁', 'W': '𝖂', 'X': '𝖃', 'Y': '𝖄', 'Z': '𝖅',
    'a': '𝖆', 'b': '𝖇', 'c': '𝖈', 'd': '𝖉', 'e': '𝖊', 'f': '𝖋', 'g': '𝖌',
    'h': '𝖍', 'i': '𝖎', 'j': '𝖏', 'k': '𝖐', 'l': '𝖑', 'm': '𝖒', 'n': '𝖓',
    'o': '𝖔', 'p': '𝖕', 'q': '𝖖', 'r': '𝖗', 's': '𝖘', 't': '𝖙', 'u': '𝖚',
    'v': '𝖛', 'w': '𝖜', 'x': '𝖝', 'y': '𝖞', 'z': '𝖟'
};

const doubleStruckMap = {
    'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾',
    'H': 'ℍ', 'I': '𝕀', 'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ',
    'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋', 'U': '𝕌',
    'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
    'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘',
    'h': '𝕙', 'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟',
    'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦',
    'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫'
};

const scriptMap = {
    'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢',
    'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥', 'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩',
    'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰',
    'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
    'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': 'ℯ', 'f': '𝒻', 'g': 'ℊ',
    'h': '𝒽', 'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃',
    'o': 'ℴ', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊',
    'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏'
};

const circledMap = {
    'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ',
    'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ',
    'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ',
    'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
    'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ',
    'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ',
    'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ',
    'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ'
};

const squaredMap = {
    'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴', 'F': '🄵', 'G': '🄶',
    'H': '🄷', 'I': '🄸', 'J': '🄹', 'K': '🄺', 'L': '🄻', 'M': '🄼', 'N': '🄽',
    'O': '🄾', 'P': '🄿', 'Q': '🅀', 'R': '🅁', 'S': '🅂', 'T': '🅃', 'U': '🅄',
    'V': '🅅', 'W': '🅆', 'X': '🅇', 'Y': '🅈', 'Z': '🅉',
    'a': '🅰', 'b': '🅱', 'c': '🅲', 'd': '🅳', 'e': '🅴', 'f': '🅵', 'g': '🅶',
    'h': '🅷', 'i': '🅸', 'j': '🅹', 'k': '🅺', 'l': '🅻', 'm': '🅼', 'n': '🅽',
    'o': '🅾', 'p': '🅿', 'q': '🆀', 'r': '🆁', 's': '🆂', 't': '🆃', 'u': '🆄',
    'v': '🆅', 'w': '🆆', 'x': '🆇', 'y': '🆈', 'z': '🆉'
};

const squaredNegativeMap = {
    'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶',
    'H': '🅷', 'I': '🅸', 'J': '🅹', 'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽',
    'O': '🅾', 'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃', 'U': '🆄',
    'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈', 'Z': '🆉',
    'a': '🅐', 'b': '🅑', 'c': '🅒', 'd': '🅓', 'e': '🅔', 'f': '🅕', 'g': '🅖',
    'h': '🅗', 'i': '🅘', 'j': '🅙', 'k': '🅚', 'l': '🅛', 'm': '🅜', 'n': '🅝',
    'o': '🅞', 'p': '🅟', 'q': '🅠', 'r': '🅡', 's': '🅢', 't': '🅣', 'u': '🅤',
    'v': '🅥', 'w': '🅦', 'x': '🅧', 'y': '🅨', 'z': '🅩'
};

const invertedMap = {
    '\"': '\u201e', '\\': '\\', ' ': '\xa1', '!': '#', '#': '$', '$': '%', '%': '\u214b', ',': ')', ')': '(', '(': '*', '*': '+', '+': '\u2018', '-': '\u02d9', '.': '/', '/': '0', '0': '\u0196', '1': '\u0547', '2': '\u0190', '3': '\u152d', '4': '\u03db', '5': '9', '6': '\u2c62', '7': '8', '8': '6', '9': ':', ':': ';', ';': '<', '<': '=', '=': '>', '>': '\xbf', '?': '@', '@': '\u2200', 'A': '\ua4ed', 'B': '\u2183', 'C': '\ua4f7', 'D': '\u018e', 'E': '\u2132', 'F': '\u2141', 'G': 'H', 'H': 'I', 'I': '\u017f', 'J': '\ua4d8', 'K': '\u2142', 'L': 'W', 'M': 'N', 'N': 'O', 'O': '\u0500', 'P': '\u1ff8', 'Q': '\ua4e4', 'R': 'S', 'S': '\u22a5', 'T': '\u2229', 'U': '\ua4e5', 'V': 'M', 'W': 'X', 'X': '\u2144', 'Y': 'Z', 'Z': ']', '[': ']', ']': '^', '^': '\u203e', '_': '`', '`': '\u0250', 'a': 'q', 'b': '\u0254', 'c': 'p', 'd': '\u01dd', 'e': '\u025f', 'f': '\u0183', 'g': '\u0265', 'h': '\u0131', 'i': '\u027e', 'j': '\u029e', 'k': '\u05df', 'l': '\u026f', 'm': 'o', 'n': 'd', 'o': 'b', 'p': '\u0279', 'q': 's', 'r': '\u0287', 's': 'n', 't': '\u028c', 'u': '\u028d', 'v': 'x', 'w': '\u028e', 'x': 'z', 'y': '}', 'z': '|', '|': '{', '{': '~', '~': ' '
};

const mirroredMap = {
    '\"': '/', '/': ' ', '!': '#', '#': '$', '$': '%', '%': '&', '&': '\')(', '(': '*', '*': '+', '+': ',', ',': '.', '.': '\\', '\\': '0', '0': '\u07c1', '1': '\u03c2', '2': '\u0190', '3': '\u07c2', '4': '\u091f', '5': '\u10db', '6': '\u0662', '7': '8', '8': '\u0b67', '9': ':', ':': ';', ';': '<', '<': '=', '=': '>', '>': '\u2e2e', '?': '@', '@': 'A', 'A': '\ua4ed', 'B': '\u2183', 'C': '\ua4f7', 'D': '\u018e', 'E': '\ua7fb', 'F': '\u04d8', 'G': 'H', 'H': 'I', 'I': '\u10b1', 'J': '\ua4d8', 'K': '\u2143', 'L': 'M', 'M': '\u0418', 'N': 'O', 'O': '\ua7fc', 'P': '\u03d8', 'Q': '\u042f', 'R': '\ua644', 'S': 'T', 'T': 'U', 'U': 'V', 'V': 'W', 'W': 'X', 'X': 'Y', 'Y': 'Z', 'Z': ']', '[': ']', ']': '^', '^': '_', '_': '`', '`': '\u0252', 'a': 'd', 'b': '\u2184', 'c': 'b', 'd': '\u0258', 'e': '\u0287', 'f': '\u03f1', 'g': '\u029c', 'h': 'i', 'i': '\u012f', 'j': '\u029e', 'k': 'l', 'l': 'm', 'm': '\u1d0e', 'n': 'o', 'o': 'q', 'p': 'p', 'q': '\u1d19', 'r': '\ua645', 's': '\u0248', 't': '\u03c5', 'u': 'v', 'v': 'w', 'w': 'x', 'x': '\u03b3', 'y': 'z', 'z': '|', '|': '{', '{': '~', '~': ' '
};



// Enregistrer l'état initial ou après chaque modification
function saveHistory(text) {
    historyIndex++;
    history[historyIndex] = text;
    history = history.slice(0, historyIndex + 1); // Tronquer l'avenir si des modifications ont été annulées puis de nouvelles sont faites
}

// Fonction pour gérer l'annulation des actions
function undo() {
    if (historyIndex > 0) {
        historyIndex--;
        const textEditor = document.getElementById('text-editor');
        textEditor.innerHTML = history[historyIndex];
        textEditor.focus();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const textEditor = document.getElementById('text-editor');
    textEditor.addEventListener('input', () => saveHistory(textEditor.innerHTML)); // Sauvegarder chaque changement
    saveHistory(textEditor.innerHTML); // Sauvegarder l'état initial

    document.getElementById('bold').addEventListener('click', function() {
        toggleFormatting('bold');
    });

    document.getElementById('italic').addEventListener('click', function() {
        toggleFormatting('italic');
    });

    document.getElementById('boldItalic').addEventListener('click', function() {
        toggleFormatting('boldItalic');
    });

    document.getElementById('underline').addEventListener('click', function() {
        toggleFormatting('underline');
    });

    document.getElementById('strikethrough').addEventListener('click', function() {
        toggleFormatting('strikethrough');
    });

    document.getElementById('copy').addEventListener('click', function() {
        copyToClipboard();
    });

    document.getElementById('font-style-selector').addEventListener('change', function() {
        applyTypography(this.value);
    });

    document.getElementById('removeFormat').addEventListener('click', function() {
        removeFormatting();
    });

    document.addEventListener('keydown', function(event) {
        if ((event.ctrlKey || event.metaKey) && event.key === 'z') {
            event.preventDefault();
            undo();
        }
    });

    textEditor.addEventListener('input', updateCounters);
    textEditor.addEventListener('input', updateSeeMoreIndicator);
    textEditor.addEventListener('scroll', updateSeeMoreIndicator);
    updateSeeMoreIndicator();
});

function toggleFormatting(style) {
    console.log("toggleFormatting called with style:", style);
    const textEditor = document.getElementById('text-editor');
    const selection = window.getSelection();
    if (!selection.rangeCount) {
        console.log("No selection range found");
        return;
    }

    const range = selection.getRangeAt(0);
    const content = range.cloneContents();
    const fragments = document.createDocumentFragment();

    content.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent;
            let styledText;

            if (isFormatted(text, style)) {
                console.log("Text is already formatted, converting to normal");
                styledText = convertToNormal(text);
            } else {
                console.log("Text is not formatted, converting to style");
                styledText = convertToStyle(text, style);
            }

            fragments.appendChild(document.createTextNode(styledText));
        } else if (node.nodeType === Node.ELEMENT_NODE && node.nodeName === 'BR') {
            fragments.appendChild(document.createElement('br'));
        } else {
            const innerFragments = document.createDocumentFragment();
            node.childNodes.forEach(innerNode => {
                if (innerNode.nodeType === Node.TEXT_NODE) {
                    const innerText = innerNode.textContent;
                    let styledInnerText;

                    if (isFormatted(innerText, style)) {
                        styledInnerText = convertToNormal(innerText);
                    } else {
                        styledInnerText = convertToStyle(innerText, style);
                    }

                    innerFragments.appendChild(document.createTextNode(styledInnerText));
                } else if (innerNode.nodeType === Node.ELEMENT_NODE && innerNode.nodeName === 'BR') {
                    innerFragments.appendChild(document.createElement('br'));
                } else {
                    innerFragments.appendChild(innerNode.cloneNode(true));
                }
            });
            const wrapper = document.createElement(node.nodeName);
            wrapper.appendChild(innerFragments);
            fragments.appendChild(wrapper);
        }
    });

    range.deleteContents();
    range.insertNode(fragments);
    selection.removeAllRanges();
    selection.addRange(range);
}





function isFormatted(text, style) {
    const map = getMapForStyle(style);
    console.log("Checking if text is formatted with style:", style);
    const result = [...text].every((char, index) => {
        let isCharFormatted = false;
        if (style === 'underline') {
            if ((char.charCodeAt(0) === 818) || (text.charAt(index) === '\u0332') ) {
                isCharFormatted = true
            }
            else {
                isCharFormatted = char.length > 1 && char.charCodeAt(1) === 818;
                isCharFormatted = text.charAt(index + 1) === '\u0332';
            }
        } else if (style === 'strikethrough') {
            if ((char.charCodeAt(0) === 822) || (text.charAt(index) === '\u0336') ) {
                isCharFormatted = true
            }
            else {
                isCharFormatted = char.length > 1 && char.charCodeAt(1) === 822;
                isCharFormatted = text.charAt(index + 1) === '\u0336';
            }
        } else {
            isCharFormatted = Object.values(map).includes(char);
        }
        console.log(`Char: ${char}, IsFormatted: ${isCharFormatted}`);
        return isCharFormatted;
    });
    console.log("isFormatted result:", result);
    return result;
}

function convertToNormal(text) {
    console.log("Converting formatted text to normal");
    const normalText = [...text].map(char => {
        let normalChar = char;
        if ((char.charCodeAt(0) === 818) || (char.charCodeAt(0) === 822)) {
            normalChar = "" // Remove the diacritic
        } else {
            normalChar = standardMap[char] || char;
        }
        console.log(`Converting ${char} (code: ${char.charCodeAt(0)}) to ${normalChar}`);
        return normalChar;
    }).join('');
    console.log("Converted to normal text:", normalText);
    return normalText;
}


function applyTypography(style) {
    const textEditor = document.getElementById('text-editor');
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    const styledText = convertToStyle(selectedText, style);
    range.deleteContents();
    range.insertNode(document.createTextNode(styledText));
    selection.removeAllRanges();
    selection.addRange(range);
}

function convertToStyle(text, style) {
    const map = getMapForStyle(style);
    return [...text].map(char => {
        let styledChar = char;
        if (style === 'underline') {
            styledChar = `${char}\u0332`; // Underline diacritic
        } else if (style === 'strikethrough') {
            styledChar = `${char}\u0336`; // Strikethrough diacritic
        } else {
            styledChar = map[char] || char;
        }
        console.log(`Converting ${char} to ${styledChar}`);
        return styledChar;
    }).join('');
}


function getMapForStyle(style) {
    switch (style) {
        case 'fullwidth': return fullwidthMap;
        case 'fraktur': return frakturMap;
        case 'boldFraktur': return boldFrakturMap;
        case 'doubleStruck': return doubleStruckMap;
        case 'script': return scriptMap;
        case 'circled': return circledMap;
        case 'squared': return squaredMap;
        case 'squaredNegative': return squaredNegativeMap;
        case 'inverted': return invertedMap;
        case 'mirrored': return mirroredMap;
        case 'bold': return boldMap;
        case 'italic': return italicMap;
        case 'boldItalic': return boldItalicMap;
        case 'underline': return underlineMap;
        case 'strikethrough': return strikethroughMap;
        default: return {};
    }
}

function removeFormatting() {
    console.log("Remove formatting called");
    const textEditor = document.getElementById('text-editor');
    const selection = window.getSelection();
    if (!selection.rangeCount) {
        console.log("No selection range found");
        return;
    }

    const range = selection.getRangeAt(0);
    const content = range.cloneContents();
    const fragments = document.createDocumentFragment();

    content.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent;
            const normalText = convertToNormal(text);
            fragments.appendChild(document.createTextNode(normalText));
        } else if (node.nodeType === Node.ELEMENT_NODE && node.nodeName === 'BR') {
            fragments.appendChild(document.createElement('br'));
        } else {
            const innerFragments = document.createDocumentFragment();
            node.childNodes.forEach(innerNode => {
                if (innerNode.nodeType === Node.TEXT_NODE) {
                    const innerText = innerNode.textContent;
                    const normalInnerText = convertToNormal(innerText);
                    innerFragments.appendChild(document.createTextNode(normalInnerText));
                } else if (innerNode.nodeType === Node.ELEMENT_NODE && innerNode.nodeName === 'BR') {
                    innerFragments.appendChild(document.createElement('br'));
                } else {
                    innerFragments.appendChild(innerNode.cloneNode(true));
                }
            });
            const wrapper = document.createElement(node.nodeName);
            wrapper.appendChild(innerFragments);
            fragments.appendChild(wrapper);
        }
    });

    range.deleteContents();
    range.insertNode(fragments);
    selection.removeAllRanges();
    selection.addRange(range);
}


function copyToClipboard() {
    const textEditor = document.getElementById('text-editor');
    const text = textEditor.innerText;
    navigator.clipboard.writeText(text)
        .then(() => alert('Texte copié avec succès!'))
        .catch(err => console.error('Erreur lors de la copie :', err));
}

function updateCounters() {
    const textEditor = document.getElementById('text-editor');
    const text = textEditor.innerText;

    const charCount = text.length;
    document.getElementById('char-count').textContent = charCount;

    const wordCount = text.match(/\b\w+\b/g) ? text.match(/\b\w+\b/g).length : 0;
    document.getElementById('word-count').textContent = wordCount;

    const emojiCount = (text.match(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}\u{2B55}]/gu) || []).length;
    document.getElementById('emoji-count').textContent = emojiCount;

    const mentionCount = (text.match(/@\w+/g) || []).length;
    document.getElementById('mention-count').textContent = mentionCount;

    const hashtagCount = (text.match(/#\w+/g) || []).length;
    document.getElementById('hashtag-count').textContent = hashtagCount;
}

document.getElementById('text-editor').addEventListener('input', updateCounters);

let currentFontSize = 18;

function increaseFontSize() {
    const textEditor = document.getElementById('text-editor');
    if (currentFontSize < 32) {
        currentFontSize += 2;
        textEditor.style.fontSize = `${currentFontSize}px`;
    }
}

function decreaseFontSize() {
    const textEditor = document.getElementById('text-editor');
    if (currentFontSize > 10) {
        currentFontSize -= 2;
        textEditor.style.fontSize = `${currentFontSize}px`;
    }
}

function updateSeeMoreIndicator() {
    const textEditor = document.getElementById('text-editor');
    const seeMoreLine = document.getElementById('see-more-line');
    const lineHeight = parseFloat(window.getComputedStyle(textEditor).lineHeight);

    const linePosition = (3 * lineHeight) + textEditor.offsetTop - textEditor.scrollTop + 12;

    if (linePosition + textEditor.offsetTop < textEditor.scrollHeight) {
        seeMoreLine.style.top = `${linePosition}px`;
        seeMoreLine.style.display = 'block';
    } else {
        seeMoreLine.style.display = 'none';
    }
}

document.getElementById('text-editor').addEventListener('input', updateSeeMoreIndicator);
document.getElementById('text-editor').addEventListener('scroll', updateSeeMoreIndicator);

document.addEventListener('DOMContentLoaded', function() {
    updateSeeMoreIndicator();
});
