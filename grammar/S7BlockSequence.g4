grammar S7BlockSequence;

expr: blockSequence EOF;

blockSequence: block (BR block)*;

block: blockHeader BR variableDefinitions;

variableDefinitions: variableDefinition (BR variableDefinition)*;

blockHeader: dbNumber PATH_SEPARATOR dbOffset '(' byteAmount ')';

variableDefinition: WHITESPACE byteOffset WHITESPACE type WHITESPACE varName;

dbNumber: POS_INT;
dbOffset: POS_INT;
byteAmount: POS_INT;
byteOffset: POS_INT;
type:
    short |
    int;
varName: ID;

short: SHORT;
int: INT;

WHITESPACE: [ \t]+;

PATH_SEPARATOR: ':';
POS_INT: [0-9]+;
BR: [\r|\n]+;

SHORT: 'Short';
INT: 'Int';

ID: [a-zA-Z0-9\-_]+;