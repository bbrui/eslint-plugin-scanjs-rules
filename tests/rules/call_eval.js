/**
 * @fileoverview Test for call_eval rule
 * @author ScanJS contributors
 * @copyright 2015 Mozilla Corporation. All rights reserved
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require("eslint"),
    ESLintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint.linter);
eslintTester.addRuleTest("lib/rules/call_eval", {
    valid: [
        { code: "eval" }
    ]
,    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "window.eval('jsCode'+usercontrolledVal )",
            errors: [
                { message: "The function eval can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json