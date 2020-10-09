

/*Browser vs Node.js

Javascript in he browser        |  Javascript in Node.js
downloaded from the web         |  loaded from local files
untrusted and highly restricted | trusted and highly privileged
limited blast radius            | nay lead to server compromise

*/

// !!! Always "use strict" mode
// do not use == comparison, instead use ===
// verify types of untrusted types

// Preventing Code Injection Attacks


/* Unsafe Functions
- Eval
- Constructor Function

 Eval                           | Function constuctor
 eval(code)                     | f = new Function('param', code) f(argument);
 direct and indirect invocation | invoke like a funciton
 global and current scope       | only global scope

*/

/* Unsafe Browser API
  - setTimeout
  - setInterval
*/

/* Avoid unsafe functions
   Use validate input : prefer allow lists over block lists
   Sanitize data passed to interpreters
   Apply principle of least authority
   */

/* For more secure code
   Validate JSON Schema,
   Freeze the prototype
     - Object.freeze
    Create Objects without prototype
      - Object.create(null, ...)
      Use map instead of {}
*/

/* Security Testing Techniques */

// SAST : Static application security testing
// DAST : Dynamic application security testing
// IAST : Interactive application security testing

/* 
  SAST | DAST
  source code | running application
  known bad code patterns | malicious payloads
  safe | may be destructive
  compilers, linters, scanners | automated tests and scanners
  
*/

// Use ESLint to catch error and vulnarabilites
// Use unittest to detect prototype
  // mocha -> simple and popular js unit test tools

/* Popular Security Testing tools
SAST
 - Eslint
 - Github Code Scanning and LGTM
 - semgrep

 OWASP ZAP
 - many commercial alternatives

 Dependency Management
 -npm audit : to detect unsafe vulnerabilities libraries and tools
 -retire.js
 -dependency-track

 */