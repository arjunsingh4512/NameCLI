#!node
const packJson = require("./package.json");
const welcome = require("cli-welcome");
welcome({
  title: `Get to know Arjun`,
  version: packJson.version,
  bgColor: `#fadc00`,
  color: `#000000`,
  bold: true,
  clear: true,
});
console.log(`
Welcome to my blog! In this post, I am thrilled to introduce myself,
Arjun Kumar Singh, a dedicated and enthusiastic .NET developer. With 
a passion for coding and a strong background in software development,
I am excited to share my journey and experiences in the world of 
technology. Join me as we explore the fascinating world of .NET and beyond!

Beyond the world of programming, I am deeply passionate about continuously 
learning and staying up-to-date with the latest advancements in technology.
I believe in the importance of self-improvement and regularly explore new 
frameworks, tools, and best practices to enhance my skill set and deliver 
top-notch solutions.

🐤  Twitter:  https://twitter.com/arjun4512
🐈‍⬛  GitHub :  https://github.com/arjun4512
🔗  Linkedlin:https://linkedli.com/arjun.kumar.singh 
`);
