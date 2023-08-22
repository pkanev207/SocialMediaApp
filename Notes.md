 was facing the same problem in windows.

Goto services in task manager  
start the service called MySQL80  
Restart workbench  

```
{
  // Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
  // same ids are connected.
  // Example:
  // "Print to console": {
  // "prefix": "log",
  // "body": [
  // "console.log('$1');",
  // "$2"
  // ],
  // "description": "Log output to console"
  // }
  "Solve Function": {
    "prefix": "solve",
    "body": [
      "function solve(${1:input}) {",
      "\tconsole.log($0);",
      "",
      "",
      "\treturn \"defined\";",
      "}",
      "",
      "console.log(solve($2));",
      "",
      "console.log(solve($3));"
    ],
    "description": "Solve Function For Judge"
  },
  "Native For Loop": {
    "prefix": "native",
    "body": [
      "for (let i = arr$1.length - 1; i >= 0; i--) {",
      "\tlet el = arr$1[i];$0",
      "",
      "}"
    ],
    "description": "Improved Native For Loop"
  },
  "Reduce": {
    "prefix": "reduce",
    "body": [
      "${1:arr}.reduce((total, amount, ind, self$3) => {",
      "\t$0",
      "",
      "\treturn ${4:total};",
      "}, ${2:value});"
    ],
    "description": "Reduce For Judge"
  },
  "For In": {
    "prefix": "forin",
    "body": [
      "for (let ${1:key} in ${2:obj}) {",
      // "\tlet ${3:elem} = ${2:obj}[${1:key}];",
      "\t$0",
      "}"
    ],
    "description": "For In Short Loop"
  },
  "For": {
    "prefix": "for",
    "body": ["for (let i = 0; i < ${1:arr}.length; i++) {", "\t$0", "}"],
    "description": "For Short Loop"
  },
  "const": {
    "prefix": "c",
    "body": ["const "],
    "description": "constant"
  },
  "has": {
    "prefix": "has",
    "body": ["obj$1.hasOwnProperty($0);"],
    "description": "Fuck Typescript"
  },
  "entries": {
    "prefix": "entries",
    "body": ["Object.entries(obj$0);"],
    "description": "Fuck Typescript"
  },
  "arrow": {
    "prefix": "arr",
    "body": ["(${1:req, res}) => {$0}"],
    "description": "Arrow Function"
  },
  "async arrow": {
    "prefix": "aar",
    "body": ["async (${1:req, res}) => {$0}"],
    "description": "Arrow Function"
  },
  "export async arrow": {
    "prefix": "xaar",
    "body": ["export const $1 = async (${2:req, res}) => {$0}"],
    "description": " Export Async Arrow Function"
  },
  "throw error": {
    "prefix": "thr",
    "body": ["throw new Error('$1');"],
    "description": "Throw New Error"
  },
  "._id": {
    "prefix": "_",
    "body": ["$1._id"],
    "description": "Mongoose id"
  }
}

```
