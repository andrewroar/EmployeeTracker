# Week 10, HTML Generator

## Description

By prompting a list of question, you can generate a html for your employee/manager/engineer/intern

## Method

To generate the html, open the "generate" folder. the index.js starting generate their respective employee using the template in the template folder

The first question is what is the position of the category, once the category is identified, it will run the function to create or append the employee to the index.html according to the information provided. All four function (createEmployee,createManager,createIntern, createEngineer) is basically the same with small twist to fit the requirement.

## User Story

While generating the html with inquirer and fs is easy, the tricky part is to combine all four of them in one script. I originally tried to use export.module and request but after trying for an hour I failed to do so. I should add classes to the template so I can append new user more easily but given the time avaliable for me, I cannot achieve that at the moment

## Test

I run the test and it passed all of them. See png for result or feel free to re-run
