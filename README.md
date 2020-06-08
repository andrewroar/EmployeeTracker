# Week 10, HTML Generator

## Description

By prompting a list of question, you can generate a html for your employee/manager/engineer/intern

## Method

To generate the html, open the "generate" folder. the JS starting generate their respective employee using the template in the template folder

"IsXXXXHTMLExist" see if there is already a HTML. For the first prompt, it will generate a html using the template. If we are adding more than 1 user to the html, it will append it the html instead of creating a new one.

I put two variable to control the process. "constinue" determine whether the user want to add another user, As long as this is true, the program will keep prompting questions and append it to the html. When "constinue" is false, the program will wrap up the html.

## Test

I run the test and it passed all of them. See png for result or feel free to re-run
