implement-todoannyang
=====================

The source code of Joe Maddalone's - AngularJS Speech Recognition with [annyang](https://www.talater.com/annyang/)  
[Original Youtube Video](https://www.youtube.com/watch?v=Ds5tm-6Nc9g)  

#### About  
Annyang is a JS library that allows your users to contorl your site using voice commands.  

#### Implementation  

In Joe's video (thanks!), he talked about running the files on a local server. I used nodejs and express to do this.  

To get the application up and running.  
1. Install node  
2. Run
```
node server.js
```
3. Go to
```
http://localhost:8000/index.html
```
#### Tips
I used [bower](http://bower.io/) to install angular and annnyang. It is important that the bower_components remain in the static folder and not in the root directory because express.static "sandboxes" to the path you pass. This means that it won't go a "level up" from the directory. 
