k_project
===============

# Setup the environment
Install Node.js and npm with Node Version Manager (https://github.com/creationix/nvm):
```shellcode
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.19.0/install.sh | bash
```

Install node.js with version 0.10.33:
```shellcode
$ node install 0.10.33
```

Every time you fire up the command line session, use **nvm use 0.10.33** to load up the specfic node:
```shellcode
$ nvm use 0.10.33
```

For the first time, you will need to upgrade your NPM, by installing npm with NPM itself:
```shellcode
$ npm -g install npm
```

# Installation
Install yeoman, grunt, bower globally with npm if you haven't:
```shellcode
$ npm install -g yo grunt-cli bower
```

Clone this repo.

Install required Node packages, using npm:
```shellcode
$ npm install
```

In the repo directory, install required dependency using Bower:
```shellcode
$ bower install
```

Fire up grunt debug server while development, it monitor your code change and automatically reload the page in the browser:
```shellcode
$ grunt serve
```

# Development
All code basic lies in **app/** folder. you can find the router setting in **scripts/app.js**,
controllers in **scripts/controllers/** folder. views (templates) in **views/**
You can have more than one controller in one controller js file, so I think it's a good idea to keep related controllers and helper functions in one file.

You shouldn't changes index.html too often unless you need to such as adding new controller javascript file.

By convention, indent for JavaScript is 2 whitespace. Please follow. There should be few helpful hints provided by JSLint shown in your **grunt serve** console. You can enforce your code quality by that.

# Coding Guideline

1. **Put your data  manipulation logic in the controller file**, all logic related to show / change state on HTML file could go to the templates. (use good stuff such as ng-show, ng-if.)
2. declare the function in the form of:
<code>
var f = function (e) {......};
</code>
This form emphasis the fact that the function can be passed as the argument.
3. Indent shall be 2 whitespaces, no tabs allowed. The encoding shall be UTF-8, with UNIX newline format.
4. All your codes shall pass JSLint test.
5. Below is a sample code snippet of Angular.js controller, you shall follow the format: https://gist.github.com/pa4373/90574497998f3545d3c1

# SOP for Adding New View

1. Create a empty view template html file in **view** folder.
2. Copy a controller file from **scripts/app/controller**, rename the script.
3. Add the new script to index.html (at the bottom of the code.)
4. Add route and the corresponding controller to **app.js** 

# Sample App for Loopback Angular.js SDK

https://github.com/strongloop/loopback-example-angular-starter
